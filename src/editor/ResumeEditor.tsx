import { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  FileText,
  GraduationCap,
  Languages,
  LoaderCircle,
  Plus,
  Save,
  Trash2,
} from 'lucide-react';
import { RESUME_DATA } from '../constants/resume-data';
import { TECH_STACK } from '../constants/tech-stack';
import type { Translatable, TranslatableList } from '../types';
import { toEditableResumeData } from './resume-data-adapter';
import type { EditableExperience, EditableResumeData } from './types';

type Tab = 'overview' | 'experience' | 'skills' | 'education' | 'languages';
type SaveState = { kind: 'idle' | 'saving' | 'success' | 'error'; message?: string };

const tabs: { id: Tab; label: string; icon: typeof FileText }[] = [
  { id: 'overview', label: 'Apresentação', icon: FileText },
  { id: 'experience', label: 'Experiências', icon: BriefcaseBusiness },
  { id: 'skills', label: 'Skills', icon: FileText },
  { id: 'education', label: 'Formação', icon: GraduationCap },
  { id: 'languages', label: 'Idiomas', icon: Languages },
];

const fieldClass =
  'w-full rounded-lg border border-theme-border bg-theme-bg px-3 py-2.5 text-sm text-theme-text outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20';

interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'month';
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
}

const Field = ({
  label,
  value,
  onChange,
  type = 'text',
  multiline = false,
  rows = 3,
  placeholder,
}: FieldProps) => (
  <label className="block space-y-1.5">
    <span className="text-xs font-semibold uppercase tracking-wide text-theme-text-muted">
      {label}
    </span>
    {multiline ? (
      <textarea
        className={`${fieldClass} resize-y`}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    ) : (
      <input
        className={fieldClass}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    )}
  </label>
);

interface LocalizedFieldProps {
  label: string;
  value: Translatable;
  onChange: (value: Translatable) => void;
  multiline?: boolean;
  rows?: number;
}

const LocalizedField = ({ label, value, onChange, multiline, rows }: LocalizedFieldProps) => (
  <div className="grid gap-4 md:grid-cols-2">
    <Field
      label={`${label} · EN`}
      value={value.en}
      multiline={multiline}
      rows={rows}
      onChange={(en) => onChange({ ...value, en })}
    />
    <Field
      label={`${label} · PT`}
      value={value.pt}
      multiline={multiline}
      rows={rows}
      onChange={(pt) => onChange({ ...value, pt })}
    />
  </div>
);

interface LocalizedListFieldProps {
  label: string;
  value: TranslatableList;
  onChange: (value: TranslatableList) => void;
}

const LocalizedListField = ({ label, value, onChange }: LocalizedListFieldProps) => (
  <div className="grid gap-4 md:grid-cols-2">
    <Field
      label={`${label} · EN · um item por linha`}
      value={value.en.join('\n')}
      multiline
      rows={6}
      onChange={(en) => onChange({ ...value, en: en.split('\n') })}
    />
    <Field
      label={`${label} · PT · um item por linha`}
      value={value.pt.join('\n')}
      multiline
      rows={6}
      onChange={(pt) => onChange({ ...value, pt: pt.split('\n') })}
    />
  </div>
);

interface CardActionsProps {
  index: number;
  count: number;
  onMove: (direction: -1 | 1) => void;
  onRemove: () => void;
}

const CardActions = ({ index, count, onMove, onRemove }: CardActionsProps) => (
  <div className="flex items-center gap-1">
    <button
      type="button"
      className="rounded-md p-2 text-theme-text-muted hover:bg-theme-bg-secondary hover:text-accent disabled:opacity-30"
      disabled={index === 0}
      aria-label="Mover para cima"
      onClick={() => onMove(-1)}
    >
      <ArrowUp size={17} />
    </button>
    <button
      type="button"
      className="rounded-md p-2 text-theme-text-muted hover:bg-theme-bg-secondary hover:text-accent disabled:opacity-30"
      disabled={index === count - 1}
      aria-label="Mover para baixo"
      onClick={() => onMove(1)}
    >
      <ArrowDown size={17} />
    </button>
    <button
      type="button"
      className="rounded-md p-2 text-theme-text-muted hover:bg-red-500/10 hover:text-red-500"
      aria-label="Excluir item"
      onClick={onRemove}
    >
      <Trash2 size={17} />
    </button>
  </div>
);

const moveItem = <T,>(items: T[], index: number, direction: -1 | 1): T[] => {
  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= items.length) return items;

  const updated = [...items];
  [updated[index], updated[nextIndex]] = [updated[nextIndex], updated[index]];
  return updated;
};

const cleanupLines = (data: EditableResumeData): EditableResumeData => ({
  ...data,
  experience: data.experience.map((item) => ({
    ...item,
    description: {
      en: item.description.en.filter((line) => line.trim()),
      pt: item.description.pt.filter((line) => line.trim()),
    },
    technologies: item.technologies.filter((line) => line.trim()),
  })),
});

const emptyExperience = (): EditableExperience => ({
  role: { en: '', pt: '' },
  company: '',
  location: { en: '', pt: '' },
  startDate: new Date().toISOString().slice(0, 7),
  endDate: null,
  description: { en: [''], pt: [''] },
  technologies: [],
});

const ResumeEditor = () => {
  const initialData = useMemo(() => toEditableResumeData(RESUME_DATA), []);
  const initialSkills = useMemo(() => [...TECH_STACK], []);
  const [data, setData] = useState<EditableResumeData>(initialData);
  const [skills, setSkills] = useState<string[]>(initialSkills);
  const [savedSnapshot, setSavedSnapshot] = useState(() =>
    JSON.stringify({ resume: initialData, skills: initialSkills }));
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [saveState, setSaveState] = useState<SaveState>({ kind: 'idle' });

  const isDirty = JSON.stringify({ resume: data, skills }) !== savedSnapshot;

  useEffect(() => {
    const warnAboutUnsavedChanges = (event: BeforeUnloadEvent) => {
      if (!isDirty) return;
      event.preventDefault();
    };

    window.addEventListener('beforeunload', warnAboutUnsavedChanges);
    return () => window.removeEventListener('beforeunload', warnAboutUnsavedChanges);
  }, [isDirty]);

  const updateExperience = (index: number, item: EditableExperience) => {
    setData((current) => ({
      ...current,
      experience: current.experience.map((existing, itemIndex) =>
        itemIndex === index ? item : existing),
    }));
  };

  const save = async () => {
    setSaveState({ kind: 'saving' });
    const cleaned = cleanupLines(data);
    const cleanedSkills = [...new Set(skills.map((skill) => skill.trim()).filter(Boolean))];

    try {
      const response = await fetch('/__resume-editor/api/data', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume: cleaned, skills: cleanedSkills }),
      });
      const result = await response.json() as { ok?: boolean; error?: string };

      if (!response.ok) throw new Error(result.error ?? 'Não foi possível salvar.');

      setData(cleaned);
      setSkills(cleanedSkills);
      setSavedSnapshot(JSON.stringify({ resume: cleaned, skills: cleanedSkills }));
      setSaveState({
        kind: 'success',
        message: 'Currículo e skills salvos. A prévia será atualizada.',
      });
    } catch (error) {
      setSaveState({
        kind: 'error',
        message: error instanceof Error ? error.message : 'Não foi possível salvar.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text">
      <header className="sticky top-0 z-40 border-b border-theme-border bg-theme-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="rounded-lg border border-theme-border p-2 text-theme-text-muted transition hover:border-accent hover:text-accent"
              aria-label="Voltar ao currículo"
            >
              <ArrowLeft size={20} />
            </a>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold">Editor local do currículo</h1>
                <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  somente dev
                </span>
              </div>
              <p className="text-xs text-theme-text-muted">
                Altera diretamente src/constants/resume-data.ts
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-theme-border px-3 py-2 text-sm font-semibold text-theme-text-muted transition hover:border-accent hover:text-accent"
            >
              <ExternalLink size={17} />
              Ver prévia
            </a>
            <button
              type="button"
              disabled={!isDirty || saveState.kind === 'saving'}
              onClick={save}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-accent-dark hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saveState.kind === 'saving'
                ? <LoaderCircle className="animate-spin" size={17} />
                : <Save size={17} />}
              Salvar arquivo
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside>
          <nav className="sticky top-24 flex gap-2 overflow-x-auto lg:flex-col" aria-label="Seções do editor">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex min-w-max items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition ${
                  activeTab === tab.id
                    ? 'bg-accent/15 text-accent'
                    : 'text-theme-text-muted hover:bg-theme-bg-secondary hover:text-theme-text'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
                {tab.id !== 'overview' && (
                  <span className="ml-auto rounded-full bg-theme-bg-secondary px-2 py-0.5 text-xs">
                    {tab.id === 'skills' ? skills.length : data[tab.id].length}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 space-y-5">
          {saveState.kind !== 'idle' && saveState.message && (
            <div className={`flex items-center gap-2 rounded-lg border px-4 py-3 text-sm ${
              saveState.kind === 'error'
                ? 'border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400'
                : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
            }`}>
              {saveState.kind === 'error'
                ? <AlertCircle size={18} />
                : <CheckCircle2 size={18} />}
              {saveState.message}
            </div>
          )}

          {activeTab === 'overview' && (
            <section className="space-y-5 rounded-xl border border-theme-border bg-theme-card p-5 shadow-sm">
              <div>
                <h2 className="text-lg font-bold">Apresentação</h2>
                <p className="text-sm text-theme-text-muted">Título e resumo exibidos no topo do portfólio.</p>
              </div>
              <LocalizedField
                label="Título profissional"
                value={data.title}
                onChange={(title) => setData((current) => ({ ...current, title }))}
              />
              <LocalizedField
                label="Resumo"
                value={data.summary}
                multiline
                rows={5}
                onChange={(summary) => setData((current) => ({ ...current, summary }))}
              />
            </section>
          )}

          {activeTab === 'experience' && (
            <section className="space-y-4">
              <SectionHeading
                title="Experiências"
                description="A ordem aqui é a mesma exibida no portfólio."
                onAdd={() => setData((current) => ({
                  ...current,
                  experience: [...current.experience, emptyExperience()],
                }))}
              />
              {data.experience.map((item, index) => (
                <article key={index} className="space-y-5 rounded-xl border border-theme-border bg-theme-card p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="min-w-0 truncate font-bold">
                      {item.company || `Nova experiência ${index + 1}`}
                    </h3>
                    <CardActions
                      index={index}
                      count={data.experience.length}
                      onMove={(direction) => setData((current) => ({
                        ...current,
                        experience: moveItem(current.experience, index, direction),
                      }))}
                      onRemove={() => setData((current) => ({
                        ...current,
                        experience: current.experience.filter((_, itemIndex) => itemIndex !== index),
                      }))}
                    />
                  </div>
                  <LocalizedField
                    label="Cargo"
                    value={item.role}
                    onChange={(role) => updateExperience(index, { ...item, role })}
                  />
                  <div className="grid gap-4 md:grid-cols-3">
                    <Field
                      label="Empresa"
                      value={item.company}
                      onChange={(company) => updateExperience(index, { ...item, company })}
                    />
                    <Field
                      label="Início"
                      type="month"
                      value={item.startDate}
                      onChange={(startDate) => updateExperience(index, { ...item, startDate })}
                    />
                    <div className="space-y-1.5">
                      <Field
                        label="Término"
                        type="month"
                        value={item.endDate ?? ''}
                        onChange={(endDate) => updateExperience(index, { ...item, endDate: endDate || null })}
                      />
                      <label className="flex items-center gap-2 text-xs text-theme-text-muted">
                        <input
                          type="checkbox"
                          checked={item.endDate === null}
                          onChange={(event) => updateExperience(index, {
                            ...item,
                            endDate: event.target.checked ? null : item.startDate,
                          })}
                        />
                        Trabalho atual
                      </label>
                    </div>
                  </div>
                  <LocalizedField
                    label="Local"
                    value={item.location}
                    onChange={(location) => updateExperience(index, { ...item, location })}
                  />
                  <LocalizedListField
                    label="Descrição"
                    value={item.description}
                    onChange={(description) => updateExperience(index, { ...item, description })}
                  />
                  <Field
                    label="Tecnologias · uma por linha"
                    value={item.technologies.join('\n')}
                    multiline
                    rows={4}
                    onChange={(technologies) =>
                      updateExperience(index, { ...item, technologies: technologies.split('\n') })}
                  />
                </article>
              ))}
            </section>
          )}

          {activeTab === 'education' && (
            <section className="space-y-4">
              <SectionHeading
                title="Formação"
                description="Cursos, graduações e outras formações acadêmicas."
                onAdd={() => setData((current) => ({
                  ...current,
                  education: [...current.education, {
                    degree: { en: '', pt: '' },
                    institution: '',
                    period: { en: '', pt: '' },
                    description: { en: '', pt: '' },
                  }],
                }))}
              />
              {data.education.map((item, index) => (
                <article key={index} className="space-y-5 rounded-xl border border-theme-border bg-theme-card p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="truncate font-bold">{item.institution || `Nova formação ${index + 1}`}</h3>
                    <CardActions
                      index={index}
                      count={data.education.length}
                      onMove={(direction) => setData((current) => ({
                        ...current,
                        education: moveItem(current.education, index, direction),
                      }))}
                      onRemove={() => setData((current) => ({
                        ...current,
                        education: current.education.filter((_, itemIndex) => itemIndex !== index),
                      }))}
                    />
                  </div>
                  <LocalizedField
                    label="Curso"
                    value={item.degree}
                    onChange={(degree) => setData((current) => ({
                      ...current,
                      education: current.education.map((existing, itemIndex) =>
                        itemIndex === index ? { ...item, degree } : existing),
                    }))}
                  />
                  <Field
                    label="Instituição"
                    value={item.institution}
                    onChange={(institution) => setData((current) => ({
                      ...current,
                      education: current.education.map((existing, itemIndex) =>
                        itemIndex === index ? { ...item, institution } : existing),
                    }))}
                  />
                  <LocalizedField
                    label="Período"
                    value={item.period}
                    onChange={(period) => setData((current) => ({
                      ...current,
                      education: current.education.map((existing, itemIndex) =>
                        itemIndex === index ? { ...item, period } : existing),
                    }))}
                  />
                  <LocalizedField
                    label="Descrição"
                    value={item.description ?? { en: '', pt: '' }}
                    multiline
                    rows={4}
                    onChange={(description) => setData((current) => ({
                      ...current,
                      education: current.education.map((existing, itemIndex) =>
                        itemIndex === index ? { ...item, description } : existing),
                    }))}
                  />
                </article>
              ))}
            </section>
          )}

          {activeTab === 'languages' && (
            <section className="space-y-4">
              <SectionHeading
                title="Idiomas"
                description="Idiomas e respectivos níveis de proficiência."
                onAdd={() => setData((current) => ({
                  ...current,
                  languages: [...current.languages, {
                    name: { en: '', pt: '' },
                    proficiency: { en: '', pt: '' },
                  }],
                }))}
              />
              {data.languages.map((item, index) => (
                <article key={index} className="space-y-5 rounded-xl border border-theme-border bg-theme-card p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="truncate font-bold">{item.name.pt || `Novo idioma ${index + 1}`}</h3>
                    <CardActions
                      index={index}
                      count={data.languages.length}
                      onMove={(direction) => setData((current) => ({
                        ...current,
                        languages: moveItem(current.languages, index, direction),
                      }))}
                      onRemove={() => setData((current) => ({
                        ...current,
                        languages: current.languages.filter((_, itemIndex) => itemIndex !== index),
                      }))}
                    />
                  </div>
                  <LocalizedField
                    label="Idioma"
                    value={item.name}
                    onChange={(name) => setData((current) => ({
                      ...current,
                      languages: current.languages.map((existing, itemIndex) =>
                        itemIndex === index ? { ...item, name } : existing),
                    }))}
                  />
                  <LocalizedField
                    label="Proficiência"
                    value={item.proficiency}
                    onChange={(proficiency) => setData((current) => ({
                      ...current,
                      languages: current.languages.map((existing, itemIndex) =>
                        itemIndex === index ? { ...item, proficiency } : existing),
                    }))}
                  />
                </article>
              ))}
            </section>
          )}

          {activeTab === 'skills' && (
            <section className="space-y-5 rounded-xl border border-theme-border bg-theme-card p-5 shadow-sm">
              <div>
                <h2 className="text-lg font-bold">Skills</h2>
                <p className="text-sm text-theme-text-muted">
                  Uma skill por linha. A ordem define a sequência dos cards no portfólio.
                </p>
              </div>
              <Field
                label="Stack técnica · uma skill por linha"
                value={skills.join('\n')}
                multiline
                rows={18}
                placeholder={'C#\n.NET\nReact\nTypeScript'}
                onChange={(value) => setSkills(value.split('\n'))}
              />
              <div className="flex flex-wrap gap-2">
                {skills.filter((skill) => skill.trim()).map((skill, index) => (
                  <span
                    key={`${skill}-${index}`}
                    className="rounded-md border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

interface SectionHeadingProps {
  title: string;
  description: string;
  onAdd: () => void;
}

const SectionHeading = ({ title, description, onAdd }: SectionHeadingProps) => (
  <div className="flex items-end justify-between gap-4">
    <div>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-theme-text-muted">{description}</p>
    </div>
    <button
      type="button"
      onClick={onAdd}
      className="inline-flex min-w-max items-center gap-2 rounded-lg border border-accent/40 px-3 py-2 text-sm font-bold text-accent transition hover:bg-accent/10"
    >
      <Plus size={17} />
      Adicionar
    </button>
  </div>
);

export default ResumeEditor;
