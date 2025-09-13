import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-4 z-40 w-9/12 left-1/2 -translate-x-1/2">
      <nav className="mx-auto rounded-2xl px-5 py-3 flex items-center justify-between border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-125 shadow-lg">
        <Link href="#" className="font-semibold tracking-tight text-lg hover:opacity-90">
          {"{ S }"}
        </Link>
        <div className="hidden sm:flex gap-4 text-sm">
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#skills" className="hover:opacity-80">Skills</a>
          <a href="#projects" className="hover:opacity-80">Projects</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </div>
      </nav>
    </header>
  );
}
