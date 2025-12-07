import type { Metadata } from 'next';
import './globals.scss';
import { ThemeProvider } from '@/domain/context/ThemeContext';
import { LanguageProvider } from '@/domain/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Portfolio | Full Stack Developer & UI/UX Designer',
  description:
    'Modern web teknolojileri ve kullanıcı deneyimi tasarımı konusunda uzmanlaşmış Full Stack Developer portföyü.',
  keywords: [
    'Portfolio',
    'Full Stack Developer',
    'Web Developer',
    'UI/UX Designer',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'Your Name' }],
  icons: {
    icon: '/logo/logo.png',
    shortcut: '/logo/logo.png',
    apple: '/logo/logo.png',
  },
  openGraph: {
    title: 'Portfolio | Full Stack Developer & UI/UX Designer',
    description:
      'Modern web teknolojileri ve kullanıcı deneyimi tasarımı konusunda uzmanlaşmış Full Stack Developer portföyü.',
    type: 'website',
    locale: 'tr_TR',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/logo/logo.png" />
        <link rel="shortcut icon" type="image/png" href="/logo/logo.png" />
        <link rel="apple-touch-icon" href="/logo/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                  
                  var language = localStorage.getItem('language');
                  if (!language) {
                    var browserLang = navigator.language.toLowerCase();
                    if (browserLang.startsWith('tr')) {
                      language = 'tr';
                    } else if (browserLang.startsWith('ar')) {
                      language = 'ar';
                    } else {
                      language = 'en';
                    }
                  }
                  document.documentElement.setAttribute('lang', language);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
