import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-4 z-40 w-[92%] sm:w-9/12 left-1/2 -translate-x-1/2">
      <nav className="mx-auto rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-125 shadow-lg">
        <Link href="#" className="tracking-tighter text-md sm:text-2xl hover:opacity-90 font-pixel">
          {"{ S }"}
        </Link>
        <div className="flex gap-2 sm:gap-4 text-md sm:text-2xl font-pixel overflow-x-auto sm:overflow-visible max-w-[60%] sm:max-w-none no-scrollbar">
          <a href="#about" className="hover:opacity-80 shrink-0">About</a>
          <a href="#skills" className="hover:opacity-80 shrink-0">Skills</a>
          <a href="#projects" className="hover:opacity-80 shrink-0">Projects</a>
          <a href="#contact" className="hover:opacity-80 shrink-0">Contact</a>
        </div>
      </nav>
    </header>
  );
}
