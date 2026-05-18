import { useState, useEffect } from "react";
import { Menu, X, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "首页", href: "#hero" },
  { label: "个人简介", href: "#about" },
  { label: "技能", href: "#skills" },
  { label: "项目", href: "#projects" },
  { label: "荣誉", href: "#achievements" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-dark-bg/80 backdrop-blur-lg border-b border-neon-blue/10 shadow-lg shadow-neon-blue/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#hero");
            }}
            className="font-orbitron text-2xl font-bold text-neon-blue"
            style={{
              textShadow:
                "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #00d4ff80",
            }}
          >
            YQ
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  activeSection === link.href.slice(1)
                    ? "text-neon-blue bg-neon-blue/10"
                    : "text-gray-400 hover:text-neon-blue hover:bg-neon-blue/5"
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/yaoQQ"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 rounded-lg text-gray-400 hover:text-neon-blue hover:bg-neon-blue/5 transition-all duration-300"
            >
              <Github size={20} />
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://github.com/yaoQQ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-neon-blue transition-colors"
            >
              <Github size={20} />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-400 hover:text-neon-blue transition-colors"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-dark-bg/95 backdrop-blur-lg border-b border-neon-blue/10",
          mobileOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              className={cn(
                "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300",
                activeSection === link.href.slice(1)
                  ? "text-neon-blue bg-neon-blue/10"
                  : "text-gray-400 hover:text-neon-blue hover:bg-neon-blue/5"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
