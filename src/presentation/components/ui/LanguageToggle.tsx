'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/domain/context/LanguageContext';
import styles from './LanguageToggle.module.scss';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.languageToggle}>
      <motion.button
        className={`${styles.langButton} ${language === 'tr' ? styles.active : ''}`}
        onClick={() => setLanguage('tr')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Türkçe"
      >
        TR
      </motion.button>
      <motion.button
        className={`${styles.langButton} ${language === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="English"
      >
        EN
      </motion.button>
      <motion.button
        className={`${styles.langButton} ${language === 'ar' ? styles.active : ''}`}
        onClick={() => setLanguage('ar')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="العربية"
      >
        AR
      </motion.button>
    </div>
  );
}
