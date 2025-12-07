'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/domain/types';
import { useLanguage } from '@/domain/context/LanguageContext';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import styles from './ProjectsSection.module.scss';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  const closeModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  // ESC tuşuyla modal kapatma
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, closeModal]);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        <SectionTitle
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        {/* Project Cards */}
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className={styles.cardImageWrapper}>
                <div className={styles.cardImage}>
                  <Image
                    src={project.image}
                    alt={t(`project.${project.id}.title`)}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/project-placeholder.jpg';
                    }}
                  />
                  <div className={styles.cardOverlay}>
                    <span className={styles.viewMore}>{t('projects.viewDetails')}</span>
                  </div>
                </div>
                {project.featured && (
                  <span className={styles.featuredBadge}>{t('projects.featured')}</span>
                )}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{t(`project.${project.id}.title`)}</h3>
                <p className={styles.cardDescription}>{t(`project.${project.id}.description`)}</p>
                <div className={styles.cardTechs}>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className={styles.cardTech}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={styles.cardTech}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeButton}
                onClick={closeModal}
                aria-label={t('projects.close')}
              >
                <X size={24} />
              </button>

              <div className={styles.modalImage}>
                <Image
                  src={selectedProject.image}
                  alt={t(`project.${selectedProject.id}.title`)}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    {/*ihtiyaç olursa popup için ayrı resim eklenebilir*/}
                    target.src = '/images/project-placeholder.jpg';
                  }}
                />
              </div>

              <div className={styles.modalContent}>
                <h2 className={styles.modalTitle}>{t(`project.${selectedProject.id}.title`)}</h2>
                <p className={styles.modalDescription}>
                  {t(`project.${selectedProject.id}.description`)}
                </p>

                <div className={styles.modalTechs}>
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className={styles.modalTech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={styles.modalActions}>
                  {selectedProject.liveUrl && (
                    <Button
                      href={selectedProject.liveUrl}
                      variant="primary"
                      icon={<ExternalLink size={18} />}
                    >
                      {t('projects.liveDemo')}
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button
                      href={selectedProject.githubUrl}
                      variant="secondary"
                      icon={<Github size={18} />}
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

