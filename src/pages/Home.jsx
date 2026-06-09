import { Link } from "react-router-dom";
import Section from "../components/Section";
import SocialButton from "../components/SocialButton";
import SelectedProject from "../components/SelectedProject";
import { experience } from "../data/experience";
import { education } from "../data/education";
import { projects } from "../data/projects";
import { otherLinks } from "../data/otherLinks";

export default function Home() {
  const selectedProjects = projects.slice(0, 3);

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#E8D8F0] via-[#F0E6F5] to-[#FFF9FF] text-neutral-950">
      {/* ABOUT / HERO */}
      <section className="mx-auto flex min-h-screen w-full max-w-[1300px] flex-col justify-center px-8 py-16 sm:px-12">
        <p className="text-center text-sm uppercase tracking-[0.35em] text-neutral-800">
          Home
        </p>

        <h1 className="mt-4 text-center text-5xl font-bold uppercase tracking-[0.18em] [font-family:'Open_Sans',sans-serif] sm:text-7xl">
          Navya Jain
        </h1>

        <div className="mx-auto mt-16 grid w-full max-w-[1180px] items-center gap-10 md:grid-cols-[260px_1fr]">
          <div className="relative -top-19 flex justify-center md:justify-start">
            <div className="h-[220px] w-[220px] overflow-hidden rounded-full border-2 border-black bg-white sm:h-[250px] sm:w-[250px]">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Navya Jain"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-3xl font-bold">About Me</h2>

            <p className="mt-5 max-w-[940px] text-lg leading-8 text-neutral-800">
              Hi, I am an AI/ML engineer with 2 years of experience and a Master’s degree in Artificial Intelligence.
              I build intelligent systems that are useful, reliable, and thoughtfully designed. My work spans agentic-systems, machine learning, backend engineering, LLM applications, recommendation systems, and production ML workflows.
              In my current role, along with other LLM-based and agentic projects, I built an end-to-end ML pipeline for a heavy-freight price prediction model that increased quarterly revenue by 25%, owning everything from data analysis and model selection to AWS deployment, logging and automatic model retraining.
              I’m especially interested in agentic AI, personalization, deep learning, and creative technical projects. Outside of work, I like reading, playing electric guitar, and aviation.


            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <SocialButton href="https://github.com/navyascorner">
                GitHub
              </SocialButton>

              <SocialButton href="https://linkedin.com/in/navya45">
                LinkedIn
              </SocialButton>

              <SocialButton href="mailto:iamjainnavya@gmail.com">
                Email
              </SocialButton>

              <SocialButton href={`${import.meta.env.BASE_URL}resume.pdf`}>
                Resume
              </SocialButton>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
<Section title="Professional Experience">
  <div className="mx-auto max-w-3xl space-y-7">
    {experience.map((item) => (
      <article
        key={`${item.role}-${item.company}`}
        className="border-l-2 border-black pl-5"
      >
        <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-700">
          {item.date}
        </p>

        <h3 className="mt-1.5 text-xl font-bold">
          {item.role} at {item.company}
        </h3>

        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-neutral-800">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </article>
    ))}
  </div>
</Section>
      {/* EDUCATION */}
<Section title="Education">
  <div className="mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-2">
    {education.map((item) => (
      <article
        key={`${item.degree}-${item.school}`}
        className="border border-black bg-white/45 p-4"
      >
        <h3 className="text-xl font-bold">{item.degree}</h3>

        <p className="mt-1.5 text-base">{item.school}</p>

        <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-neutral-700">
          {item.date}
        </p>

        <p className="mt-3 text-sm leading-6 text-neutral-800">
          {item.details}
        </p>
      </article>
    ))}
  </div>
</Section>

      {/* SELECTED PROJECTS */}
      <Section title="Selected Projects">
        <div className="space-y-16">
          {selectedProjects.map((project, index) => (
            <SelectedProject
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/projects"
            className="inline-block border border-black bg-white px-6 py-3 text-sm uppercase tracking-[0.2em] hover:bg-black hover:text-white"
          >
            View More Projects
          </Link>
        </div>
      </Section>

      {/* OTHER */}
      <Section title="Other">
        <div className="mx-auto grid max-w-3xl gap-10 sm:grid-cols-2">
          {otherLinks.map((item) => (
            <Link key={item.title} to={item.link} className="group block">
              <div className="aspect-square overflow-hidden border-2 border-black bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <p className="mt-4 text-center text-sm uppercase tracking-[0.2em]">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}