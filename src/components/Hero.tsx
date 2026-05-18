import { ChevronDown, Mail, Phone, MapPin } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const tags = ["10年游戏行业经验", "独立游戏开发者", "新技术探索者"];
const keywords = ["游戏开发", "Unity3D", "全栈开发", "DOTS", "Vibe Coding"];

export default function Hero() {
  const scrollDown = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg"
    >
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-transparent to-dark-bg z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-transparent to-neon-blue/5 z-[1]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className="font-orbitron text-6xl sm:text-7xl md:text-8xl font-bold text-neon-blue mb-6 animate-glow-pulse"
        >
          姚强
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 font-light tracking-wide">
          游戏开发工程师{" "}
          <span className="text-neon-purple">|</span>{" "}
          Unity全栈开发者
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full text-sm border border-neon-blue/30 text-neon-blue bg-neon-blue/5 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10 text-gray-400 text-sm">
          <a
            href="mailto:348531613@qq.com"
            className="flex items-center gap-2 hover:text-neon-blue transition-colors"
          >
            <Mail size={16} />
            <span>348531613@qq.com</span>
          </a>
          <span className="flex items-center gap-2">
            <Phone size={16} />
            <span>13144436445</span>
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} />
            <span>广州</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {keywords.map((kw) => (
            <span
              key={kw}
              className="px-3 py-1 rounded text-xs font-medium bg-neon-purple/10 text-neon-purple border border-neon-purple/20"
            >
              {kw}
            </span>
          ))}
        </div>

        <button
          onClick={scrollDown}
          className="animate-scroll-indicator inline-flex flex-col items-center text-neon-blue/60 hover:text-neon-blue transition-colors cursor-pointer"
        >
          <span className="text-xs mb-2 tracking-widest">向下滚动</span>
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
}
