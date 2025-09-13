import Image from "next/image";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import SkillChip from "@/components/SkillChip";
import ProjectCard from "@/components/ProjectCard";
import Hero from "@/components/Hero";
import { loadLanguages, loadProjects } from "@/lib/loaders";

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
        <div className="flex flex-col gap-6">
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
      <Section id="about" title="About" subtitle="Principles, background, and what I bring to teams.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlassCard className="p-6 md:col-span-2">
            <p className="text-neutral-300 leading-relaxed">
              I design and build focused, performant interfaces with an eye for detail—accessibility, motion, and clarity. My work spans full‑stack web, mobile (React Native), and applied AI/ML for computer vision. I value strong fundamentals, thoughtful systems, and clean handoffs.
            </p>
          </GlassCard>
          <GlassCard className="p-6">
            <ul className="text-sm space-y-2 list-disc pl-5 text-neutral-300">
              <li>Full‑stack web with React + Tailwind</li>
              <li>Prototyping in Figma</li>
              <li>AI/ML pipelines (PyTorch, OpenCV)</li>
              <li>IoT tinkering (Raspberry Pi, Arduino)</li>
            </ul>
          </GlassCard>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Let’s build something enduring.">
        <GlassCard className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-neutral-300">Available for freelance, collaborations, and full‑time roles.</p>
          <div className="flex gap-3">
            {/* TODO: Replace with your actual email / social links */}
            <a className="glass rounded-xl px-4 py-2 text-sm hover:opacity-90" href="#">Email</a>
            <a className="rounded-xl px-4 py-2 text-sm border border-[var(--glass-border)] hover:bg-white/5" href="https://github.com/sarthakwade" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </GlassCard>
      </Section>
    </div>
  );
}
