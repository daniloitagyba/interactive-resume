import { motion } from 'framer-motion';
import { useTranslation } from '../../hooks/useTranslation';
import { TECH_STACK } from '../../constants/data';
import {
  Code2,
  Database,
  Cloud,
  Layers,
  Server,
  TestTube2,
  Globe,
  Cpu,
  Package,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

const ICON_MAPPING: { keywords: string[]; icon: LucideIcon }[] = [
  { keywords: ["sql", "database", "redis", "oracle", "postgresql", "mysql"], icon: Database },
  { keywords: ["azure", "aws", "cloud"], icon: Cloud },
  { keywords: ["docker", "kubernetes", "container"], icon: Package },
  { keywords: ["test", "unit", "integration"], icon: TestTube2 },
  { keywords: ["architecture", "ddd", "solid", "patterns", "clean"], icon: Layers },
  { keywords: ["api", "rest", "soap", "spa", "http"], icon: Globe },
  { keywords: ["microservices", "service bus", "rabbitmq", "server", "message"], icon: Server },
  { keywords: ["react", "javascript", "typescript", "node", "c#", ".net", "frontend", "backend"], icon: Code2 },
  { keywords: ["ci/cd", "pipeline", "automation"], icon: Workflow },
];

const getSkillIcon = (skill: string): LucideIcon => {
  const normalized = skill.toLowerCase();
  const match = ICON_MAPPING.find((cfg) =>
    cfg.keywords.some((keyword) => normalized.includes(keyword))
  );
  return match?.icon ?? Cpu;
};

const SkillCard = ({ skill, index }: { skill: string; index: number }) => {
  const Icon = getSkillIcon(skill);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="p-4 rounded-lg bg-theme-card border border-theme-border flex items-center gap-3 font-medium shadow-sm text-theme-text"
    >
      <span className="text-accent flex-shrink-0" aria-hidden="true">
        <Icon size={18} />
      </span>
      <span className="text-sm md:text-base truncate" title={skill}>
        {skill}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section-padding bg-theme-bg-secondary" aria-labelledby="skills-title">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center gap-4 mb-12">
          <Code2 className="text-accent" size={32} aria-hidden="true" />
          <h2 id="skills-title" className="text-3xl font-bold text-theme-text">
            {t.skills.title}
          </h2>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TECH_STACK.map((skill, index) => (
            <SkillCard key={skill} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
