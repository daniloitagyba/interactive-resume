import { rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { IncomingMessage } from 'node:http';
import type { Plugin } from 'vite';

const API_PATH = '/__resume-editor/api/data';
const MAX_BODY_SIZE = 1024 * 1024;
const MONTH_PATTERN = /^\d{4}-(0[1-9]|1[0-2])$/;

type JsonObject = Record<string, unknown>;
type Localized = { en: string; pt: string };
type LocalizedList = { en: string[]; pt: string[] };

interface EditableResumeData {
  title: Localized;
  summary: Localized;
  experience: {
    role: Localized;
    company: string;
    location: Localized;
    startDate: string;
    endDate: string | null;
    description: LocalizedList;
    technologies: string[];
  }[];
  education: {
    degree: Localized;
    institution: string;
    period: Localized;
    description?: Localized;
  }[];
  certifications: {
    name: Localized;
    issuer?: string;
    issued?: Localized;
    credentialId?: string;
  }[];
  languages: {
    name: Localized;
    proficiency: Localized;
  }[];
}

const isObject = (value: unknown): value is JsonObject =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const readString = (value: unknown, field: string): string => {
  if (typeof value !== 'string') {
    throw new Error(`${field} deve ser um texto.`);
  }

  return value;
};

const readOptionalString = (value: unknown, field: string): string | undefined => {
  if (value === undefined) return undefined;
  return readString(value, field);
};

const readStringList = (value: unknown, field: string): string[] => {
  if (!Array.isArray(value)) {
    throw new Error(`${field} deve ser uma lista.`);
  }

  return value.map((item, index) => readString(item, `${field}[${index}]`));
};

const readLocalized = (value: unknown, field: string) => {
  if (!isObject(value)) {
    throw new Error(`${field} deve conter os idiomas en e pt.`);
  }

  return {
    en: readString(value.en, `${field}.en`),
    pt: readString(value.pt, `${field}.pt`),
  };
};

const readLocalizedList = (value: unknown, field: string) => {
  if (!isObject(value)) {
    throw new Error(`${field} deve conter os idiomas en e pt.`);
  }

  return {
    en: readStringList(value.en, `${field}.en`),
    pt: readStringList(value.pt, `${field}.pt`),
  };
};

const readMonth = (value: unknown, field: string): string => {
  const month = readString(value, field);
  if (!MONTH_PATTERN.test(month)) {
    throw new Error(`${field} deve usar o formato AAAA-MM.`);
  }

  return month;
};

export const parseResumeData = (value: unknown): EditableResumeData => {
  if (!isObject(value)) {
    throw new Error('Os dados enviados são inválidos.');
  }

  if (!Array.isArray(value.experience)) throw new Error('experience deve ser uma lista.');
  if (!Array.isArray(value.education)) throw new Error('education deve ser uma lista.');
  if (!Array.isArray(value.certifications)) throw new Error('certifications deve ser uma lista.');
  if (!Array.isArray(value.languages)) throw new Error('languages deve ser uma lista.');

  return {
    title: readLocalized(value.title, 'title'),
    summary: readLocalized(value.summary, 'summary'),
    experience: value.experience.map((item, index) => {
      const field = `experience[${index}]`;
      if (!isObject(item)) throw new Error(`${field} deve ser um objeto.`);

      const endDate = item.endDate === null
        ? null
        : readMonth(item.endDate, `${field}.endDate`);

      return {
        role: readLocalized(item.role, `${field}.role`),
        company: readString(item.company, `${field}.company`),
        location: readLocalized(item.location, `${field}.location`),
        startDate: readMonth(item.startDate, `${field}.startDate`),
        endDate,
        description: readLocalizedList(item.description, `${field}.description`),
        technologies: readStringList(item.technologies, `${field}.technologies`),
      };
    }),
    education: value.education.map((item, index) => {
      const field = `education[${index}]`;
      if (!isObject(item)) throw new Error(`${field} deve ser um objeto.`);

      const description = item.description === undefined
        ? undefined
        : readLocalized(item.description, `${field}.description`);

      return {
        degree: readLocalized(item.degree, `${field}.degree`),
        institution: readString(item.institution, `${field}.institution`),
        period: readLocalized(item.period, `${field}.period`),
        ...(description ? { description } : {}),
      };
    }),
    certifications: value.certifications.map((item, index) => {
      const field = `certifications[${index}]`;
      if (!isObject(item)) throw new Error(`${field} deve ser um objeto.`);

      const issued = item.issued === undefined
        ? undefined
        : readLocalized(item.issued, `${field}.issued`);

      return {
        name: readLocalized(item.name, `${field}.name`),
        ...(readOptionalString(item.issuer, `${field}.issuer`) !== undefined
          ? { issuer: readOptionalString(item.issuer, `${field}.issuer`) }
          : {}),
        ...(issued ? { issued } : {}),
        ...(readOptionalString(item.credentialId, `${field}.credentialId`) !== undefined
          ? { credentialId: readOptionalString(item.credentialId, `${field}.credentialId`) }
          : {}),
      };
    }),
    languages: value.languages.map((item, index) => {
      const field = `languages[${index}]`;
      if (!isObject(item)) throw new Error(`${field} deve ser um objeto.`);

      return {
        name: readLocalized(item.name, `${field}.name`),
        proficiency: readLocalized(item.proficiency, `${field}.proficiency`),
      };
    }),
  };
};

const indentation = (level: number) => '  '.repeat(level);

const serialize = (value: unknown, level = 0, key?: string): string => {
  if ((key === 'startDate' || key === 'endDate') && typeof value === 'string') {
    const [year, month] = value.split('-').map(Number);
    return `new Date(${year}, ${month - 1})`;
  }

  if (value === null) return 'null';
  if (typeof value === 'string') return JSON.stringify(value);

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';

    if (
      value.every((item) => typeof item === 'string')
      && value.map((item) => JSON.stringify(item)).join(', ').length <= 100
    ) {
      return `[${value.map((item) => JSON.stringify(item)).join(', ')}]`;
    }

    const items = value
      .map((item) => `${indentation(level + 1)}${serialize(item, level + 1)},`)
      .join('\n');
    return `[\n${items}\n${indentation(level)}]`;
  }

  if (isObject(value)) {
    const entries = Object.entries(value);
    if (entries.length === 0) return '{}';

    const properties = entries
      .map(([property, propertyValue]) =>
        `${indentation(level + 1)}${property}: ${serialize(propertyValue, level + 1, property)},`)
      .join('\n');
    return `{\n${properties}\n${indentation(level)}}`;
  }

  throw new Error('Foi encontrado um valor que não pode ser salvo.');
};

export const createResumeDataSource = (data: EditableResumeData): string =>
  `import type { ResumeData } from '../types';\n\nexport const RESUME_DATA: ResumeData = ${serialize(data)};\n`;

export const createTechStackSource = (skills: string[]): string =>
  `export const TECH_STACK = ${serialize(skills)};\n`;

const isLocalRequest = (request: IncomingMessage): boolean => {
  const remoteAddress = request.socket.remoteAddress;
  if (!remoteAddress || !['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(remoteAddress)) {
    return false;
  }

  const origin = request.headers.origin;
  if (!origin) return true;

  try {
    const originUrl = new URL(origin);
    const isLoopbackOrigin =
      originUrl.hostname === 'localhost'
      || originUrl.hostname === '127.0.0.1'
      || originUrl.hostname === '[::1]';

    return isLoopbackOrigin && originUrl.host === request.headers.host;
  } catch {
    return false;
  }
};

const readBody = async (request: IncomingMessage): Promise<unknown> => {
  const chunks: Buffer[] = [];
  let size = 0;

  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.length;
    if (size > MAX_BODY_SIZE) throw new Error('Os dados excedem o limite de 1 MB.');
    chunks.push(buffer);
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
};

export const resumeEditorPlugin = (): Plugin => ({
  name: 'resume-editor-local-api',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use(async (request, response, next) => {
      const pathname = request.url ? new URL(request.url, 'http://localhost').pathname : '';
      if (pathname !== API_PATH) {
        next();
        return;
      }

      response.setHeader('Content-Type', 'application/json; charset=utf-8');
      response.setHeader('Cache-Control', 'no-store');

      if (!isLocalRequest(request)) {
        response.statusCode = 403;
        response.end(JSON.stringify({ error: 'O editor aceita somente conexões locais.' }));
        return;
      }

      if (request.method !== 'PUT') {
        response.statusCode = 405;
        response.setHeader('Allow', 'PUT');
        response.end(JSON.stringify({ error: 'Método não permitido.' }));
        return;
      }

      try {
        const body = await readBody(request);
        if (!isObject(body)) throw new Error('Os dados enviados são inválidos.');

        const data = parseResumeData(body.resume);
        const skills = readStringList(body.skills, 'skills');
        const resumeTarget = path.resolve(server.config.root, 'src/constants/resume-data.ts');
        const skillsTarget = path.resolve(server.config.root, 'src/constants/tech-stack.ts');
        const resumeTemporary = path.resolve(
          server.config.root,
          `src/constants/.resume-data.${process.pid}.tmp`,
        );
        const skillsTemporary = path.resolve(
          server.config.root,
          `src/constants/.tech-stack.${process.pid}.tmp`,
        );

        await Promise.all([
          writeFile(resumeTemporary, createResumeDataSource(data), 'utf8'),
          writeFile(skillsTemporary, createTechStackSource(skills), 'utf8'),
        ]);
        await rename(resumeTemporary, resumeTarget);
        await rename(skillsTemporary, skillsTarget);

        response.statusCode = 200;
        response.end(JSON.stringify({ ok: true }));
      } catch (error) {
        response.statusCode = 400;
        response.end(JSON.stringify({
          error: error instanceof Error ? error.message : 'Não foi possível salvar os dados.',
        }));
      }
    });
  },
});
