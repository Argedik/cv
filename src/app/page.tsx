'use client';

import { portfolioRepository } from '@/domain/data/portfolio-data';
import Navbar from '@/presentation/components/layout/Navbar';
import HeroSection from '@/presentation/sections/HeroSection';
import ExperienceSection from '@/presentation/sections/ExperienceSection';
import ProjectsSection from '@/presentation/sections/ProjectsSection';
import ContactSection from '@/presentation/sections/ContactSection';

export default function Home() {
  const personalInfo = portfolioRepository.getPersonalInfo();
  const socialLinks = portfolioRepository.getSocialLinks();
  const experiences = portfolioRepository.getExperiences();
  const projects = portfolioRepository.getProjects();
  const cvDownloads = portfolioRepository.getCVDownloads();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection personalInfo={personalInfo} socialLinks={socialLinks} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <ContactSection
          personalInfo={personalInfo}
          socialLinks={socialLinks}
          cvDownloads={cvDownloads}
        />
      </main>
    </>
  );
}
