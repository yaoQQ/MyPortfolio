import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-dark-bg">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              <span className="text-neon-blue font-orbitron">三、</span>
              项目案例
            </h2>
            <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-accent-green" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <ProjectCard
                id={project.id}
                title={project.title}
                subtitle={project.subtitle}
                category={project.category}
                status={project.status}
                coverImage={project.coverImage}
                techStack={project.techStack}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
