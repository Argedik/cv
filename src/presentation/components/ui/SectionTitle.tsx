'use client';

import { motion } from 'framer-motion';
import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  return (
    <motion.div
      className={styles.container}
      style={{ textAlign: align }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.divider} />
    </motion.div>
  );
}

