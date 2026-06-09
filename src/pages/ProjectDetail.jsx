import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#E8D8F0] px-8 py-12">
        <div className="mx-auto max-w-3xl bg-white p-8">
          <h1 className="text-4xl font-bold">Project not found</h1>
          <Link to="/" className="mt-6 inline-block underline">
            Back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#E8D8F0] px-8 py-12">
      <article className="mx-auto max-w-5xl">
        <Link
        to="/"
        className="mb-8 inline-block border border-black bg-white px-4 py-2 text-sm uppercase tracking-wide hover:bg-black hover:text-white"
        >
          Back
        </Link>

        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <div className="aspect-square overflow-hidden border-2 border-black bg-white">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          <section>
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-700">
              Project
            </p>

            <h1 className="mt-3 font-display text-5xl font-black">
              {project.title}
            </h1>

            <p className="mt-4 text-lg text-neutral-800">
              {project.subtitle}
            </p>

            <p className="mt-8 leading-7 text-neutral-800">
              {project.description}
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="border border-black bg-white px-4 py-2 text-sm uppercase tracking-wide hover:bg-black hover:text-white"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="border border-black bg-white px-4 py-2 text-sm uppercase tracking-wide hover:bg-black hover:text-white"
              >
                Try Here!
              </a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}