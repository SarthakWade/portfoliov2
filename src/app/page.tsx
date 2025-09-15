import Image from "next/image";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import SkillChip from "@/components/SkillChip";
import ProjectCard from "@/components/ProjectCard";
import Hero from "@/components/Hero";
import { loadLanguages, loadProjects } from "@/lib/loaders";
import LangToggleImage from "@/components/LangToggleImage";

export default async function Home() {
  const [langSections, projects] = await Promise.all([
    loadLanguages(),
    loadProjects(),
  ]);

  return (
    <div className="flex flex-col gap-24">
      {/* Hero */}
      <Hero />

      {/* Skills */}
      <Section id="skills" title="Skills" subtitle="A curated stack I use to build and ship.">
        <div className="flex gap-6 items-center justify-between">
          {/* Skills list (left) */}
          <div className="flex flex-col gap-6 w-1/2">
            {langSections.map((section) => (
              <div key={section.section} className="flex flex-col gap-3">
                <h3 className="text-sm uppercase tracking-wide text-neutral-400">{section.section}</h3>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <SkillChip key={item.name} name={item.name} logo={item.logo} dominantColor={item.dominantColor} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Image on the right */}
          <div className="flex flex-col items-end">
            <LangToggleImage />
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Selected work across web, apps, and AI/ML.">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              name={p.name}
              description={p.description}
              languages={p.languages}
              githubLink={p.githubLink}
              liveLink={p.liveLink}
            />
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="About" subtitle="Powered by ideas—and occasionally by coffee.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlassCard className="p-6 md:col-span-2 flex flex-col gap-4">
            <p className="text-neutral-300 leading-relaxed">
              Hi there, thanks for scrolling down this much, quite an effort you took. Anyways this is me, a developer who likes to build things and make them look good. Trying explore as much as I can while I have the time. Worked on Open Source, did some freelancing, contributing and being in startups are always a yes for me.
            </p>
            <p>So yeah, thats about it.</p>
          </GlassCard>
          <Image
            src="/about.gif"
            alt="About animation"
            width={500}
            height={500}
            className="w-full h-auto rounded-xl"
            priority={false}
          />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Let’s build something enduring.">
        <GlassCard className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-neutral-300">Available for freelance, collaborations, and full‑time roles.</p>
          <div className="flex gap-3">
            {/* TODO: Replace with your actual email / social links */}
            <a className="rounded-xl px-4 py-2 text-sm border border-white/20 bg-white/10 backdrop-blur-md backdrop-saturate-125 shadow hover:opacity-90" href="#">Email</a>
            <a className="rounded-xl px-4 py-2 text-sm border border-white/20 hover:bg-white/5" href="https://github.com/sarthakwade" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </GlassCard>
      </Section>
    </div>
  );
}
