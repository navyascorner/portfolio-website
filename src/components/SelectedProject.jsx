import { Link } from "react-router-dom";

export default function SelectedProject({ project, reverse = false }) {
  const image = (
    <div className="mx-auto max-w-[340px] overflow-hidden border-2 border-black bg-white">
      <img
        src={project.image}
        alt={project.title}
        className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );

  return (
    <article
      className={`grid items-center gap-6 md:grid-cols-2 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Link
        to={`/projects/${project.id}`}
        className="group block"
        aria-label={`Read more about ${project.title}`}
      >
        {image}
      </Link>

      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-neutral-700">
          Selected Project
        </p>

        <h3 className="mt-3 text-3xl font-bold text-neutral-950">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-neutral-700">
            {project.subtitle}
          </p>
        )}

        <p className="mt-4 leading-7 text-neutral-800">
          {project.homeDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to={`/projects/${project.id}`}
            className="border border-black bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
          >
            Details
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
            >
              Try Here!
            </a>
          )}

          {project.readmore && (
            <a
              href={project.readmore}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
            >
              Read More
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
