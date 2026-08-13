export default function ProjectCard({ project }) {
  const image = (
    <div className="aspect-square overflow-hidden border-[2px] border-black bg-white">
      <img
        src={project.image}
        alt={project.title}
        className={`h-full w-full object-cover ${
          project.demo
            ? "transition-transform duration-500 group-hover:scale-[1.03]"
            : ""
        }`}
      />
    </div>
  );

  return (
    <div className="w-full max-w-[300px]">
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
        image
      )}

      <div className="mt-4 flex items-center justify-center gap-2 text-[11px] sm:text-xs">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black bg-white px-2 py-1 uppercase tracking-wide transition hover:bg-black hover:text-white sm:px-3"
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black bg-white px-2 py-1 uppercase tracking-wide transition hover:bg-black hover:text-white sm:px-3"
          >
            Try Here!
          </a>
        )}

        {project.readmore && (
          <a
            href={project.readmore}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black bg-white px-2 py-1 uppercase tracking-wide transition hover:bg-black hover:text-white sm:px-3"
          >
            Read More
          </a>
        )}
      </div>
    </div>
  );
}