import { useMemo } from "react";

interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
  opacity: number;
}

export default function ParticleBackground() {
  const particles = useMemo<Particle[]>(() => {
    const count = 65;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: `${Math.random() * 4 + 2}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.id % 3 === 0 ? "#a855f7" : "#00d4ff",
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
            boxShadow:
              p.id % 3 === 0
                ? `0 0 ${p.size * 2}px #a855f780`
                : `0 0 ${p.size * 2}px #00d4ff80`,
          }}
        />
      ))}
    </div>
  );
}
