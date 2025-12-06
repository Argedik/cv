'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { PersonalInfo, SocialLink } from '@/domain/types';
import SocialIcons from '../components/ui/SocialIcons';
import styles from './HeroSection.module.scss';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
}

export default function HeroSection({
  personalInfo,
  socialLinks,
}: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('experience');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Animated background */}
      <div className={styles.backgroundOverlay}>
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gridPattern} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Text content */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <motion.h1
              className={styles.name}
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div
              className={styles.titles}
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className={styles.title}>{personalInfo.title}</span>
              <span className={styles.titleDivider}>&</span>
              <span className={styles.subtitle}>{personalInfo.subtitle}</span>
            </motion.div>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {personalInfo.description}
            </motion.p>

            <motion.a
              href="https://maps.app.goo.gl/z76TRNQaZRcsZmoa8"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.location}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin size={18} />
              <span>{personalInfo.location}</span>
            </motion.a>

            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0, y: 30 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <SocialIcons links={socialLinks} />
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            className={styles.avatarContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarGlow} />
              <div className={styles.avatarBorder}>
                <div className={styles.avatar}>
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/avatar.jpg';
                      }}
                  />
                </div>
              </div>
              <div className={styles.floatingBadge}>
                <span className={styles.badgeText}>Available for work</span>
                <span className={styles.badgeDot} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          className={styles.scrollIndicator}
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 20, x: '-40%', scale: 0.9 }}
          animate={mounted ? { opacity: 1, y: 0, x: '-40%', scale: 1 } : { x: '-40%', scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.6, delay: 1 }}
          aria-label="Scroll down"
        >
          <span>Keşfet</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}

