import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Users,
  Rocket,
  Trophy,
  Gamepad2,
  Award,
  BadgeCheck,
  Globe,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { achievements } from "@/data/achievements";
import ScrollReveal from "@/components/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  Users,
  Rocket,
  Trophy,
  Gamepad2,
  Award,
  BadgeCheck,
  Globe,
};

const typeConfig = {
  award: {
    badge: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
    iconBg: "bg-yellow-500/10 text-yellow-400",
    dot: "bg-yellow-500",
  },
  contribution: {
    badge: "bg-neon-blue/20 text-neon-blue border-neon-blue/40",
    iconBg: "bg-neon-blue/10 text-neon-blue",
    dot: "bg-neon-blue",
  },
  milestone: {
    badge: "bg-accent-green/20 text-accent-green border-accent-green/40",
    iconBg: "bg-accent-green/10 text-accent-green",
    dot: "bg-accent-green",
  },
};

const typeLabels: Record<string, string> = {
  award: "荣誉奖项",
  contribution: "技术贡献",
  milestone: "里程碑",
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 bg-dark-bg">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              <span className="text-neon-blue font-orbitron">四、</span>
              技术贡献与荣誉
            </h2>
            <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-accent-green" />
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-neon-blue/40 via-neon-purple/40 to-accent-green/40 md:block" />

          <div className="space-y-8">
            {achievements.map((achievement, index) => {
              const config = typeConfig[achievement.type];
              const isLeft = index % 2 === 0;
              const IconComponent = iconMap[achievement.icon];

              return (
                <ScrollReveal key={achievement.title} delay={index * 100}>
                  <div className="relative flex flex-col md:flex-row md:items-center">
                    <div
                      className={`hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 h-4 w-4 rounded-full border-2 ${config.dot} ring-4 ring-dark-bg`}
                    />

                    <div
                      className={`md:w-1/2 ${
                        isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"
                      }`}
                    >
                      <div
                        className={`rounded-xl border border-transparent bg-dark-panel p-6 transition-all duration-300 hover:border-neon-purple hover:shadow-neon-purple ${
                          isLeft ? "md:mr-0" : "md:ml-0"
                        }`}
                      >
                        <div
                          className={`mb-3 flex items-center gap-3 ${
                            isLeft ? "md:justify-end" : "md:justify-start"
                          }`}
                        >
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-lg ${config.iconBg}`}
                          >
                            {IconComponent && <IconComponent className="h-5 w-5" />}
                          </div>
                          <h3 className="text-lg font-semibold text-white">
                            {achievement.title}
                          </h3>
                        </div>

                        <p className="mb-4 text-sm leading-relaxed text-gray-400">
                          {achievement.description}
                        </p>

                        <div
                          className={`flex items-center gap-3 ${
                            isLeft ? "md:justify-end" : "md:justify-start"
                          }`}
                        >
                          <span
                            className={`rounded-full border px-3 py-0.5 text-xs ${config.badge}`}
                          >
                            {typeLabels[achievement.type]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
