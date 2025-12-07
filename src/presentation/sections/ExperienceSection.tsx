'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Experience } from '@/domain/types';
import { useLanguage } from '@/domain/context/LanguageContext';
import SectionTitle from '../components/ui/SectionTitle';
import styles from './ExperienceSection.module.scss';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <SectionTitle title={t('exp.title')} subtitle={t('exp.subtitle')} />

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
                      <h3 className={styles.company}>
                        {exp.id === '3' || exp.id === '4' 
                          ? t(`exp.${exp.id}.company`) 
                          : exp.company}
                      </h3>
                      <span className={styles.role}>{t(`exp.${exp.id}.role`)}</span>
                    </div>
                    <div className={styles.period}>
                      <div className={styles.periodRange}>
                        {t(`exp.${exp.id}.periodStart`)} - {t(`exp.${exp.id}.periodEnd`)}
                      </div>
                      <div className={styles.periodDuration}>
                        {t(`exp.${exp.id}.periodDuration`)}
                      </div>
                    </div>
                  </div>
                  <p className={styles.description}>{t(`exp.${exp.id}.description`)}</p>
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

