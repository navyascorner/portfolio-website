import { notebook } from "../data/notebook";
import { Link } from "react-router-dom";

export default function Notebook() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAEBEE] px-4 py-10 sm:px-6">
      <section className="mx-auto flex min-h-screen w-full max-w-[1180px] flex-col items-center">
        <header className="mb-10 text-center sm:mb-12">
          <a
            href={`${import.meta.env.BASE_URL}#/`}
            className="mb-6 inline-block border border-black bg-white px-4 py-2 text-xs uppercase tracking-wide hover:bg-black hover:text-white"
          >
            Go Home
          </a>

          <p className="text-xs uppercase tracking-[0.35em] text-neutral-800 sm:text-sm">
            Navya Jain
          </p>

          <h1 className="mt-3 text-4xl font-bold uppercase tracking-[0.18em] text-neutral-800 [font-family:'Open_Sans',sans-serif] sm:text-5xl lg:text-6xl lg:tracking-[0.25em]">
            NOTEBOOK
          </h1>
        </header>

        <section className="grid w-full grid-cols-1 justify-items-center gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
          {notebook.map((entry) => (
            <div key={entry.id} className="w-full max-w-[300px]">
              <Link
                to={entry.link}
                className="group block"
                aria-label={entry.title}
              >
                <div className="aspect-square overflow-hidden border-[2px] border-black bg-white">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}