export default function SelectedProject({ project, reverse = false }) {
  const image = (
    <div className="mx-auto max-w-[340px] overflow-hidden border-2 border-black bg-white">
      <img
        src={project.image}
        alt={project.title}
        className={`w-full object-contain ${
          project.demo
            ? "transition-transform duration-500 group-hover:scale-[1.03]"
            : ""
        }`}
      />
    </div>
  );

  return (
    <article
      className={`grid items-center gap-6 md:grid-cols-2 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {project.demo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
          aria-label={`Try ${project.title}`}
        >
          {image}
        </a>
      ) : (
        <div>{image}</div>
      )}

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