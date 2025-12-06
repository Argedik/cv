'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Download,
  Send,
  FileText,
  CheckCircle,
} from 'lucide-react';
import { PersonalInfo, SocialLink, CVDownload } from '@/domain/types';
import SectionTitle from '../components/ui/SectionTitle';
import SocialIcons from '../components/ui/SocialIcons';
import Button from '../components/ui/Button';
import styles from './ContactSection.module.scss';

interface ContactSectionProps {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  cvDownloads: CVDownload[];
}

export default function ContactSection({
  personalInfo,
  socialLinks,
  cvDownloads,
}: ContactSectionProps) {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>(
    'idle'
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormStatus('sent');
    setFormData({ name: '', email: '', message: '' });

    // Reset after 3 seconds
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.backgroundPattern} />

      <div className={styles.container}>
        <SectionTitle title="İletişime Geçin" subtitle="Benimle Çalışmak İster misiniz?" />

        <div className={styles.content}>
          {/* Contact Info */}
          <motion.div
            className={styles.infoSection}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.infoTitle}>İletişim Bilgileri</h3>

            <div className={styles.infoItems}>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className={styles.infoItem}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.infoIcon}>
                  <Mail size={20} />
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>E-posta</span>
                  <span className={styles.infoValue}>
                    {personalInfo.email}
                  </span>
                </div>
              </motion.a>

              <motion.a
                href="https://maps.app.goo.gl/z76TRNQaZRcsZmoa8"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoItem}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.infoIcon}>
                  <MapPin size={20} />
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Konum</span>
                  <span className={styles.infoValue}>
                    {personalInfo.location}
                  </span>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Sosyal Medya</h4>
              <SocialIcons links={socialLinks} size="lg" />
            </div>

            {/* CV Download */}
            <div className={styles.cvSection}>
              <h4 className={styles.cvTitle}>
                <FileText size={20} />
                CV İndir
              </h4>

              <div className={styles.cvGrid}>
                {cvDownloads.map((cv, index) => (
                  <motion.a
                    key={cv.filename}
                    href={cv.filename}
                    download="CV.pdf"
                    className={styles.cvButton}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className={styles.cvFlag}>
                      {cv.language === 'tr' ? '🇹🇷' : '🇬🇧'}
                    </span>
                    <span className={styles.cvLabel}>{cv.label}</span>
                    <Download size={16} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className={styles.formSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Mesaj Gönderin</h3>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    İsim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="İsminizi girin"
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="E-posta adresinizi girin"
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    placeholder="Mesajınızı yazın..."
                    rows={5}
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={formStatus !== 'idle'}
                >
                  {formStatus === 'idle' && (
                    <>
                      <Send size={18} />
                      Mesaj Gönder
                    </>
                  )}
                  {formStatus === 'sending' && (
                    <>
                      <div className={styles.spinner} />
                      Gönderiliyor...
                    </>
                  )}
                  {formStatus === 'sent' && (
                    <>
                      <CheckCircle size={18} />
                      Gönderildi!
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} {personalInfo.name}. Tüm hakları
            saklıdır.
          </p>
          <p className={styles.madeWith}>
          Next.js ile kodlanmıştır
          </p>
        </div>
      </footer>
    </section>
  );
}

