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
import { useLanguage } from '@/domain/context/LanguageContext';
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
  const { t } = useLanguage();
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

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      
      if (!accessKey) {
        throw new Error(t('contact.error.web3formsKey'));
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `${t('contact.formSubject')} - ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: `${t('contact.formNameLabel')}: ${formData.name}\n${t('contact.formEmailLabel')}: ${formData.email}\n\n${t('contact.formMessageLabel')}:\n${formData.message}`,
          to_email: personalInfo.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        throw new Error(result.message || t('contact.error.formSubmit'));
      }
    } catch (error) {
      console.error('Form gönderim hatası:', error);
      alert(
        error instanceof Error
          ? error.message
          : t('contact.error.sendFailed')
      );
      setFormStatus('idle');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.backgroundPattern} />

      <div className={styles.container}>
        <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} />

        <div className={styles.content}>
          {/* Contact Info */}
          <motion.div
            className={styles.infoSection}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.infoTitle}>{t('contact.contactInfo')}</h3>

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
                  <span className={styles.infoLabel}>{t('contact.email')}</span>
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
                  <span className={styles.infoLabel}>{t('contact.location')}</span>
                  <span className={styles.infoValue}>
                    {personalInfo.location}
                  </span>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>{t('contact.socialMedia')}</h4>
              <SocialIcons links={socialLinks} size="lg" />
            </div>

            {/* CV Download */}
            <div className={styles.cvSection}>
              <h4 className={styles.cvTitle}>
                <FileText size={20} />
                {t('contact.downloadCV')}
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
              <h3 className={styles.formTitle}>{t('contact.sendMessage')}</h3>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder={t('contact.namePlaceholder')}
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    {t('contact.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder={t('contact.emailPlaceholder')}
                    required
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    placeholder={t('contact.messagePlaceholder')}
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
                      {t('contact.send')}
                    </>
                  )}
                  {formStatus === 'sending' && (
                    <>
                      <div className={styles.spinner} />
                      {t('contact.sending')}
                    </>
                  )}
                  {formStatus === 'sent' && (
                    <>
                      <CheckCircle size={18} />
                      {t('contact.sent')}
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
            © {new Date().getFullYear()} {personalInfo.name}. {t('contact.rights')}
          </p>
          <p className={styles.madeWith}>
            {t('contact.madeWith')}
          </p>
        </div>
      </footer>
    </section>
  );
}

