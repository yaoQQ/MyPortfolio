import { useState, useCallback, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";

function ImageWithLoader({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="relative rounded-xl overflow-hidden border border-dark-panel hover:border-neon-blue/30 transition-all duration-300 group cursor-pointer bg-dark-panel">
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center h-48 sm:h-64 z-10">
          <Loader2 className="h-8 w-8 text-neon-blue animate-spin" />
        </div>
      )}
      {error && (
        <div className="flex items-center justify-center h-48 sm:h-64 text-gray-500 text-sm">
          图片加载失败
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-auto object-contain transition-all duration-500 group-hover:brightness-110 ${
          loaded ? "opacity-100" : "opacity-0 h-48 sm:h-64"
        }`}
      />
    </div>
  );
}

function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [currentIndex]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[101] p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
      >
        <X size={24} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 z-[101] p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 z-[101] p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      <div
        className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {!loaded && (
          <Loader2 className="h-12 w-12 text-neon-blue animate-spin absolute" />
        )}
        <img
          src={images[currentIndex]}
          alt={`截图 ${currentIndex + 1}`}
          onLoad={() => setLoaded(true)}
          className={`max-w-full max-h-[85vh] object-contain rounded-lg transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = project?.images ?? [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
  }, [allImages.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
  }, [allImages.length]);

  const goToProjects = () => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center font-noto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">项目未找到</h1>
          <p className="text-gray-400 mb-8">抱歉，您访问的项目不存在</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/20 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            返回主页
          </Link>
        </div>
      </div>
    );
  }

  const descriptionParagraphs = project.description.split("\n\n");

  return (
    <div className="min-h-screen bg-dark-bg font-noto">
      {lightboxOpen && (
        <Lightbox
          images={allImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-lg border-b border-neon-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 sm:gap-4 text-sm">
              <Link
                to="/"
                className="flex items-center gap-1 text-gray-400 hover:text-neon-blue transition-colors"
              >
                <ArrowLeft size={18} />
                <span className="hidden sm:inline">返回主页</span>
              </Link>
              <span className="text-gray-600">/</span>
              <button
                onClick={goToProjects}
                className="text-gray-400 hover:text-neon-blue transition-colors"
              >
                项目案例
              </button>
              <span className="text-gray-600">/</span>
              <span className="text-neon-blue">{project.title}</span>
            </div>
            <Link
              to="/"
              className="font-orbitron text-xl font-bold text-neon-blue"
              style={{
                textShadow: "0 0 10px #00d4ff, 0 0 20px #00d4ff80",
              }}
            >
              YQ
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <div className="relative bg-dark-panel">
          {project.images.length > 0 ? (
            <div
              className="w-full max-h-[50vh] flex items-center justify-center bg-dark-panel cursor-pointer overflow-hidden"
              onClick={() => openLightbox(0)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full max-h-[50vh] object-contain"
              />
            </div>
          ) : (
            <div className="w-full h-64 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-accent-green/20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/30 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
            <ScrollReveal>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="rounded-full border border-neon-purple/40 bg-neon-purple/20 px-3 py-0.5 text-xs text-neon-purple">
                  {project.category}
                </span>
                <span className="rounded-full border border-accent-green/40 bg-accent-green/20 px-3 py-0.5 text-xs text-accent-green">
                  {project.status}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                {project.title}
              </h1>
              <p className="text-lg text-gray-300">{project.subtitle}</p>
            </ScrollReveal>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                <span className="text-neon-blue font-orbitron mr-2">3.x</span>
                项目介绍
              </h2>
              <div className="space-y-4">
                {descriptionParagraphs.map((paragraph, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                <span className="text-neon-blue font-orbitron mr-2">◆</span>
                技术亮点
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-dark-panel border border-transparent hover:border-neon-blue/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-neon-blue mt-2" />
                    <span className="text-gray-300 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                <span className="text-neon-blue font-orbitron mr-2">◆</span>
                技术栈
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-neon-blue/10 text-neon-blue border border-neon-blue/20 text-sm font-medium hover:bg-neon-blue/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {project.images.length > 0 && (
            <ScrollReveal delay={300}>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  <span className="text-neon-blue font-orbitron mr-2">◆</span>
                  项目截图
                </h2>
                <div className="space-y-6">
                  {project.images.map((image, i) => (
                    <div
                      key={i}
                      className="cursor-pointer"
                      onClick={() => openLightbox(i)}
                    >
                      <ImageWithLoader
                        src={image}
                        alt={`${project.title} 截图 ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-xs text-gray-500">
                  点击图片可查看大图
                </p>
              </div>
            </ScrollReveal>
          )}

          <div className="flex justify-center pt-8 pb-12">
            <button
              onClick={goToProjects}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/20 hover:shadow-neon-blue transition-all duration-300 text-sm font-medium"
            >
              <ArrowLeft size={18} />
              返回项目列表
            </button>
          </div>
        </div>
      </div>

      <footer className="border-t border-gray-800 py-6 px-4 text-center">
        <p className="text-sm text-gray-500">
          期待与您共同探讨游戏技术的无限可能
        </p>
      </footer>
    </div>
  );
}
