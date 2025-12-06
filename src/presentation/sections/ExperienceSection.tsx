'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { Experience } from '@/domain/types';
import SectionTitle from '../components/ui/SectionTitle';
import styles from './ExperienceSection.module.scss';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <SectionTitle title="Tecrübelerim" subtitle="Kariyer Yolculuğum" />

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.timelineDot}>
                <Briefcase size={20} />
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.cardGlow} />
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.companyInfo}>
                      <h3 className={styles.company}>{exp.company}</h3>
                      <span className={styles.role}>{exp.role}</span>
                    </div>
                    <div className={styles.period}>
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className={styles.description}>{exp.description}</p>
                  <div className={styles.technologies}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

