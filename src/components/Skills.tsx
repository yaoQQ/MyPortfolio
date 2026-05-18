import {
  Gamepad2,
  Code2,
  Network,
  Monitor,
  Scan,
  Zap,
  Smartphone,
  Cpu,
  Server,
  Sparkles,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { skills } from "@/data/skills";
import ScrollReveal from "@/components/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  Gamepad2,
  Code2,
  Network,
  Monitor,
  Scan,
  Zap,
  Smartphone,
  Cpu,
  Server,
  Sparkles,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-dark-bg">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              <span className="text-neon-blue font-orbitron">二、</span>
              核心技能概览
            </h2>
            <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-accent-green" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon];
            return (
              <ScrollReveal key={skill.name} delay={index * 100}>
                <div className="group rounded-xl border border-transparent bg-dark-panel p-6 transition-all duration-300 hover:border-neon-blue hover:shadow-neon-blue">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neon-blue/10 text-neon-blue transition-colors duration-300 group-hover:bg-neon-blue/20">
                      {IconComponent && <IconComponent className="h-5 w-5" />}
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-neon-purple/30 bg-neon-purple/10 px-3 py-1 text-xs text-neon-purple transition-colors duration-200 hover:border-neon-purple/60 hover:bg-neon-purple/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
