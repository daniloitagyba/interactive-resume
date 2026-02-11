import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { DATA } from "../constants/data";
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
  LucideIcon,
} from "lucide-react";


const ICON_MAPPING: { keywords: string[]; Icon: LucideIcon }[] = [
  { keywords: ["sql", "database", "redis", "oracle", "postgresql", "mysql"], Icon: Database },
  { keywords: ["azure", "aws", "cloud"], Icon: Cloud },
  { keywords: ["docker", "kubernetes", "container"], Icon: Package },
  { keywords: ["test", "unit", "integration"], Icon: TestTube2 },
  { keywords: ["architecture", "ddd", "solid", "patterns", "clean"], Icon: Layers },
  { keywords: ["api", "rest", "soap", "spa", "http"], Icon: Globe },
  { keywords: ["microservices", "service bus", "rabbitmq", "server", "message"], Icon: Server },
  { keywords: ["react", "javascript", "typescript", "node", "c#", ".net", "frontend", "backend"], Icon: Code2 },
  { keywords: ["ci/cd", "pipeline", "automation"], Icon: Workflow },
];


const getSkillIcon = (skill: string): React.ReactNode => {
  const normalizedSkill = skill.toLowerCase();
  const match = ICON_MAPPING.find((cfg) =>
    cfg.keywords.some((keyword) => normalizedSkill.includes(keyword))
  );

  const IconComponent = match ? match.Icon : Cpu;
  return <IconComponent size={18} />;
};

interface SkillCardProps {
  skill: string;
  index: number;
}


const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    whileHover={{ scale: 1.05 }}
    className="p-4 rounded-lg bg-white dark:bg-midnight-light border border-gray-200 dark:border-gray-700 
               flex items-center gap-3 font-medium shadow-sm text-gray-800 dark:text-gray-200"
  >
    <span className="text-accent flex-shrink-0" aria-hidden="true">
      {getSkillIcon(skill)}
    </span>
    <span className="text-sm md:text-base truncate" title={skill}>
      {skill}
    </span>
  </motion.div>
);

const Skills: React.FC = () => {
  const { language } = useLanguage();
  
  const { techStack } = useMemo(() => DATA[language], [language]);

  const title = language === "en" ? "Technical Skills" : "Habilidades Técnicas";

  return (
    <section id="skills" className="section-padding bg-midnight-light/10" aria-labelledby="skills-title">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center gap-4 mb-12">
          <Code2 className="text-accent" size={32} aria-hidden="true" />
          <h2 id="skills-title" className="text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((skill, index) => (
            <SkillCard key={skill} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
