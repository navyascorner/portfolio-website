import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="min-h-screen bg-[#E8D8F0] px-8 py-12">
      <section className="mx-auto max-w-3xl text-center">
        <Link
          to="/"
          className="mb-8 inline-block border border-black bg-white px-4 py-2 text-xs uppercase tracking-wide hover:bg-black hover:text-white"
        >
          Back Home
        </Link>

        <h1 className="text-7xl font-bold [font-family:'Cormorant_Garamond',serif]">
          About Me
        </h1>

        <p className="mt-8 text-lg leading-8">
          Write your about me section here.
        </p>
      </section>
    </main>
  );
}