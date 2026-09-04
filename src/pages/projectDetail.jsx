import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const index = projects.findIndex((item) => item.id === id);
  const project = projects[index];

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#F8F2FA] px-6 text-center">
        <h1 className="text-3xl font-bold uppercase tracking-[0.18em]">
          Project Not Found
        </h1>
        <Link
          to="/projects"
          className="mt-8 inline-block border border-black bg-white px-4 py-2 text-xs uppercase tracking-wide hover:bg-black hover:text-white"
        >
          Back to Projects
        </Link>
      </main>
    );
  }

  const previous = projects[index - 1];
  const next = projects[index + 1];

  // Falls back to splitting the existing `subtitle` string until
  // entries gain a proper `stack` array.
  const stack =
    project.stack ??
    (project.subtitle ? project.subtitle.split(",").map((s) => s.trim()) : []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8F2FA] px-4 py-10 text-neutral-950 sm:px-6">
      <div className="mx-auto w-full max-w-[1180px]">
        {/* HEADER */}
        <header className="mb-14 text-center">
          <Link
            to="/projects"
            className="mb-6 inline-block border border-black bg-white px-4 py-2 text-xs uppercase tracking-wide hover:bg-black hover:text-white"
          >
            ← Back to Projects
          </Link>

          <h1 className="mx-auto mt-3 max-w-[900px] text-3xl font-bold uppercase tracking-[0.14em] text-neutral-800 [font-family:'Open_Sans',sans-serif] sm:text-4xl lg:text-5xl lg:tracking-[0.18em]">
            {project.title}
          </h1>
        </header>

        {/* HERO: image above, description below */}
        <section>
          <div className="mx-auto w-full max-w-[1000px]">
            <div className="border-[2px] border-black bg-white">
              <img
                src={project.detailImage ?? project.image}
                alt={project.title}
                width="1601"
                height="832"
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-[900px] text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-700">
              Selected Project
            </p>

            <h2 className="mt-4 text-2xl font-bold">Agentic Book Recommender</h2>

            <p className="mx-auto mt-4 max-w-[720px] text-lg leading-8 text-neutral-800">
              {project.detailIntro ?? project.homeDescription}
            </p>

            {stack.length > 0 && (
              <p className="mt-7 text-xs uppercase tracking-[0.22em] text-neutral-700">
                {stack.join(" · ")}
              </p>
            )}

            <div className="mt-7 flex flex-wrap justify-center gap-3 text-xs">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black bg-white px-4 py-2 uppercase tracking-wide transition hover:bg-black hover:text-white"
                >
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black bg-white px-4 py-2 uppercase tracking-wide transition hover:bg-black hover:text-white"
                >
                  Try Here!
                </a>
              )}

              {project.readmore && (
                <a
                  href={project.readmore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black bg-white px-4 py-2 uppercase tracking-wide transition hover:bg-black hover:text-white"
                >
                  Read More
                </a>
              )}
            </div>
          </div>
        </section>

        {/* WRITEUP */}
        {project.writeup?.length > 0 && (
          <>
            <hr className="mx-auto mt-16 max-w-[900px] border-neutral-400" />

            <article className="mx-auto mt-16 max-w-[720px]">
              {project.writeup.map((sectionItem) => (
                <section key={sectionItem.heading} className="mb-14">
                  <h2 className="text-2xl font-bold">{sectionItem.heading}</h2>

                  <div className="mt-4 space-y-5 text-lg leading-8 text-neutral-800">
                    {sectionItem.body.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  {sectionItem.image && (
                    <figure className="mt-8">
                      <div className="overflow-hidden border-[2px] border-black bg-white">
                        <img
                          src={sectionItem.image}
                          alt={sectionItem.caption ?? sectionItem.heading}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      {sectionItem.caption && (
                        <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-neutral-700">
                          {sectionItem.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </section>
              ))}
            </article>
          </>
        )}

        {/* PREV / NEXT */}
        <hr className="mx-auto mt-4 max-w-[900px] border-neutral-400" />

        <nav className="mx-auto mt-8 flex max-w-[900px] items-start justify-between gap-6 text-xs">
          <div className="max-w-[45%]">
            {previous && (
              <Link
                to={`/projects/${previous.id}`}
                className="group block uppercase tracking-[0.2em] text-neutral-700 hover:text-black"
              >
                ← Previous
                <span className="mt-2 block normal-case tracking-normal text-sm text-neutral-800 group-hover:underline">
                  {previous.title}
                </span>
              </Link>
            )}
          </div>

          <div className="max-w-[45%] text-right">
            {next && (
              <Link
                to={`/projects/${next.id}`}
                className="group block uppercase tracking-[0.2em] text-neutral-700 hover:text-black"
              >
                Next →
                <span className="mt-2 block normal-case tracking-normal text-sm text-neutral-800 group-hover:underline">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </main>
  );
}
