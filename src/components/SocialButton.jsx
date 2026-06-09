export default function SocialButton({ href, children, download = false }) {
  return (
    <a
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noreferrer"}
      download={download}
      className="border border-black bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
    >
      {children}
    </a>
  );
}