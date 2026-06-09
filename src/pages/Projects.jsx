import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#F8F2FA] px-6 py-10">
      <section className="mx-auto flex min-h-screen max-w-[1180px] flex-col items-center">
        <header className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-800">
            Navya Jain
          </p>

          <h1 className="mt-3 text-6xl font-bold uppercase tracking-[0.25em] text-neutral-800 [font-family:'Open_Sans',sans-serif]">
            PROJECTS
          </h1>
        </header>

        <section className="grid w-full grid-cols-3 justify-items-center gap-x-10 gap-y-14">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </section>
    </main>
  );
}