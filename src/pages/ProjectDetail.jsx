import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#E8D8F0] px-8 py-10 text-neutral-950">
        <p className="mb-4">Project not found.</p>
        <Link
          to="/projects"
          className="border border-black bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
        >
          Back
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#E8D8F0] px-8 py-10 text-neutral-950 sm:px-12">
      <Link
        to="/projects"
        className="border border-black bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
      >
        Back
      </Link>

      <div className="mx-auto mt-12 max-w-[900px]">
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-700">
          Project
        </p>

        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
          {project.title}
        </h1>

        {/* ── design this page here ── */}
      </div>
    </main>
  );
}