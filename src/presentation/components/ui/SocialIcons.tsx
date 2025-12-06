'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { SocialLink } from '@/domain/types';
import XLogo from './XLogo';
import styles from './SocialIcons.module.scss';

interface SocialIconsProps {
  links: SocialLink[];
  size?: 'sm' | 'md' | 'lg';
}

export default function SocialIcons({ links, size = 'md' }: SocialIconsProps) {
  const iconSize = size === 'sm' ? 18 : size === 'lg' ? 26 : 22;

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'github':
        return <Github size={iconSize} />;
      case 'linkedin':
        return <Linkedin size={iconSize} />;
      case 'x':
      case 'twitter':
        return <XLogo size={iconSize} />;
      case 'email':
        return <Mail size={iconSize} />;
      case 'phone':
        return <Phone size={iconSize} />;
      default:
    }
  };

  return (
    <div className={styles.container}>
      {links.map((link, index) => {
        return (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconLink} ${styles[size]}`}
            title={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {getIcon(link.icon)}
          </motion.a>
        );
      })}
    </div>
  );
}

