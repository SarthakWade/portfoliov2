export default function Footer() {
  return (
    <footer className="w-[min(1100px,92%)] mx-auto my-10 text-sm text-neutral-400 flex items-center justify-between">
      <p>© {new Date().getFullYear()} Sarthak Wadegaonkar</p>
      <p className="hidden sm:block">Built with Next.js and Tailwind · Glass UI · Pixel accents</p>
    </footer>
  );
}
