export default function Section({ title, children }) {
  return (
    <section className="mx-auto w-full max-w-[1100px] border-t border-black/40 px-4 py-16 sm:px-6">
      <h2 className="mb-10 text-center text-3xl font-bold uppercase tracking-[0.22em] text-neutral-900 [font-family:'Open_Sans',sans-serif] sm:text-4xl">
        {title}
      </h2>

      {children}
    </section>
  );
}