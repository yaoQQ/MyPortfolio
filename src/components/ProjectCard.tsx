import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  coverImage: string;
  techStack: string[];
}

const statusStyles: Record<string, string> = {
  "已上线": "bg-accent-green/20 text-accent-green border-accent-green/40",
  "上线阶段": "bg-neon-blue/20 text-neon-blue border-neon-blue/40",
  "开发中": "bg-neon-blue/20 text-neon-blue border-neon-blue/40",
  "已交付": "bg-neon-purple/20 text-neon-purple border-neon-purple/40",
  "稳定运营": "bg-accent-green/20 text-accent-green border-accent-green/40",
  "已运营": "bg-accent-green/20 text-accent-green border-accent-green/40",
  "原型阶段": "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
};

const gradients = [
  "from-neon-blue/30 to-neon-purple/30",
  "from-neon-purple/30 to-accent-green/30",
  "from-accent-green/30 to-neon-blue/30",
  "from-neon-blue/30 to-accent-green/30",
  "from-neon-purple/30 to-neon-blue/30",
  "from-accent-green/30 to-neon-purple/30",
];

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash;
}

export default function ProjectCard({
  id,
  title,
  subtitle,
  category,
  status,
  coverImage,
  techStack,
}: ProjectCardProps) {
  const gradientClass = gradients[Math.abs(hashCode(id)) % gradients.length];
  const statusClass = statusStyles[status] ?? "bg-gray-500/20 text-gray-400 border-gray-500/40";

  return (
    <Link to={`/project/${id}`} className="group block">
      <div className="overflow-hidden rounded-xl border border-transparent bg-dark-panel transition-all duration-300 hover:scale-[1.02] hover:border-neon-blue hover:shadow-neon-blue">
        <div className="relative h-48 overflow-hidden">
          {coverImage ? (
            <img
              src={coverImage}
              alt={title}
              className="h-full w-full object-cover transition-all duration-300 group-hover:brightness-110"
            />
          ) : (
            <div
              className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradientClass}`}
            >
              <span className="text-4xl font-bold text-white/20">{title[0]}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-panel/80 to-transparent" />

          <div className="absolute left-3 top-3 flex gap-2">
            <span className="rounded-full border border-neon-purple/40 bg-neon-purple/20 px-3 py-0.5 text-xs text-neon-purple">
              {category}
            </span>
            <span className={`rounded-full border px-3 py-0.5 text-xs ${statusClass}`}>
              {status}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="mb-1 text-lg font-bold text-white transition-colors duration-200 group-hover:text-neon-blue">
            {title}
          </h3>
          <p className="mb-3 text-sm text-gray-400">{subtitle}</p>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-dark-bg px-2 py-0.5 text-xs text-gray-300 transition-colors duration-200 group-hover:text-neon-blue/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
