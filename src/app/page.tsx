import Image from "next/image";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import SkillChip from "@/components/SkillChip";
import ProjectCard from "@/components/ProjectCard";
import Hero from "@/components/Hero";
import { loadLanguages, loadProjects } from "@/lib/loaders";
import LangToggleImage from "@/components/LangToggleImage";
import Socials from "@/components/Socials";
import { SimpleErrorBoundary } from "@/components/SimpleErrorBoundary";
import GitHubCalendarClient from "@/components/GitHubCalendarClient";

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
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          {/* Skills list (left) */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
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
          <div className="flex flex-col items-center md:items-end mt-2 md:mt-0">
            <LangToggleImage />
          </div>
        </div>
      </Section>

      {/* GitHub Activity */}
      <Section id="github" title="Activity" subtitle="Code doesn't sleep, and apparently neither do I.">
        <SimpleErrorBoundary>
        <GitHubCalendarClient />
        </SimpleErrorBoundary>
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
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Open to opportunities, collaborations & great coffee">
        <div className="flex flex-col gap-4 justify-center items-center">
          <Image
                src="/contact.gif"
                alt="Contact animation"
                width={800}
                height={450}
                className="w-2/3 h-auto rounded-xl"
                sizes="(max-width: 640px) 66vw, 50vw"
                priority={false}
                />
          <Socials />
        </div>
      </Section>
    </div>
  );
}
