'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import styles from './Navbar.module.scss';

const navLinks = [
  { id: 'hero', label: 'Ana Sayfa' },
  { id: 'experience', label: 'Tecrübeler' },
  { id: 'projects', label: 'Projeler' },
  { id: 'contact', label: 'İletişim' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => {
        const element = document.getElementById(link.id);
        return element ? { id: link.id, element } : null;
      }).filter(Boolean) as Array<{ id: string; element: HTMLElement }>;

      const scrollPos = window.scrollY + 150; // Adjusted offset
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // If at the bottom, set last section as active
      if (window.scrollY + windowHeight >= documentHeight - 50) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          setActiveSection(lastSection.id);
          return;
        }
      }

      // Find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const { element, id } = sections[i];
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(id);
          return;
        }
      }

      // Fallback: if no section is in view, check by scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const { element, id } = sections[i];
        if (element.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Set active section immediately
      setActiveSection(id);
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      
      // Update after scroll completes
      setTimeout(() => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(id);
        }
      }, 500);
    }
  };

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.container}>
          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <motion.a
                  href={`#${link.id}`}
                  className={`${styles.navLink} ${
                    activeSection === link.id ? styles.active : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      className={styles.activeIndicator}
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.a>
              </li>
            ))}
          </ul>

          <div className={styles.rightActions}>
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              className={styles.mobileMenuButton}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className={styles.mobileMenuHeader}>
              <h3>Tema</h3>
              <ThemeToggle />
            </div>
            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${link.id}`}
                    className={`${styles.mobileNavLink} ${
                      activeSection === link.id ? styles.active : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

