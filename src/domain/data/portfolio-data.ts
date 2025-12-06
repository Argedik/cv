import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Enes Yasin Gedik',
    title: 'Full Stack Developer',
    subtitle: 'E-ticaret, Muhasebe ve Finans',
    description: `Merhaba! AlbarakaTech Global ve Akinon gibi şirketlerde Full-Stack ve Front-End geliştiricisi olarak çok çeşitli teknolojilerde uygulama geliştirme konusunda kapsamlı deneyim kazandım. Kullanıcı dostu arayüzler oluşturmaya ve performans optimizasyonlarını iyileştirmeye, çeşitli markalar için projeleri yönetmeye ve farklı veri modelleme ve kodlama tekniklerini keşfetmeye odaklandım. Detaylara önem veririm ve kodlama standartlarına bağlı kalırım; görevleri bağımsız olarak tamamlarken ekip uyumuna da öncelik veririm. Son olarak, hem yerel hem de uluslararası kaynaklar aracılığıyla teknik becerilerimi sürekli olarak geliştiriyorum. İlginiz için teşekkür ederim. Saygılarımla,`,
    avatar: '/images/avatar.jpg',
    location: 'Eyüpsultan, İstanbul, Türkiye',
    email: 'gedikas@hotmail.com'
  },

  socialLinks: [
    {
      id: '1',
      name: 'GitHub',
      url: 'https://github.com/argedik',
      icon: 'github',
    },
    {
      id: '2',
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/enes-yasin-gedik',
      icon: 'linkedin',
    },
    /*
    En değerli hazinelerimizden olan, sonsuz ilim okyanusundan, bir damla ilmin, çeşitli alanlardaki atomlarını, hayat boyu araştırarak, öğrenerek, pratik ederek, muhafaza etmeye çalışıyorum.
    */ 
    {
      id: '3',
      name: 'X',
      url: 'https://x.com/EnesYasinGedik',
      icon: 'x',
    },
    {
      id: '4',
      name: 'Email',
      url: 'mailto:gedikas@hotmail.com',
      icon: 'email',
    },
    {
      id: '5',
      name: 'Phone',
      url: 'tel:05510226273',
      icon: 'phone',
    },
  ],

  experiences: [
    {
      id: '1',
      company: 'AlbarakaTech Global',
      role: 'Full Stack Developer',
      period: 'Ağu 2023 - Halen - 2 yıl 4 ay',
      description:
        'Bankacılık personellerinin muhasebe ve finans operasyonlarını kolaylaştıran arayüz uygulamalarını geliştiriyorum.',
      technologies: ['C#', '.Net', 'Sql Server', 'Javascript', 'Tfs'],
    },
    {
      id: '2',
      company: 'Akinon A.Ş.',
      role: 'Front-End Developer',
      period: 'Ağu 2022 - Ağu 2023 - 1 yıl',
      description:
        'SPX, Underarmour, Brandys, Evidea, Vakko, Altınçadır gibi markaların e-ticaret sitelerine yazılımlar geliştirdim.',
      technologies: ['Js', 'Next Js', 'React Js', 'Phyton', 'Django', 'Tailwind', 'Scss'],
    },
    {
      id: '3',
      company: 'Kodluyoruz',
      role: 'Bootcamp Hızlandırma Programı',
      period: 'Mar 2022 - Ağu 2022 - 6 ay',
      description:
        'Ön elemeleri geçtikten sonra hızlandırılmış eğitimi tamamladım ve bitirme projesiyle mezun oldum.',
      technologies: ['JavaScript', 'React Js', 'Html', 'Css', 'Git'],
    },
    {
      id: '4',
      company: 'Kariyer Geçişi',
      role: 'Çeşitli Deneyimler',
      period: 'Eki 2015 - Ağu 2020 - 5 yıl',
      description:
        'Arçelik sonrası, depo, kodlama, personel işleri ve emlakçılık gibi çeşitli küçük işletmelerde çalıştım. 2020\'den itibaren yazılım alanlarında eğitimler aldım.',
      technologies: ['JavaScript', 'React Js', 'Html', 'Css', 'Git'],
    },
    {
      id: '5',
      company: 'Arçelik A.Ş.',
      role: 'Satınalma Görevlisi',
      period: 'Tem 2014 - Eki 2015 - 1 yıl 4 ay',
      description:
        'MS Office VBA ile zamandan %70’e varan tasarruf sağladık.',
      technologies: ['Mso', 'Sap'],
    },
    {
      id: '6',
      company: 'KVK Teknoloji Ürünleri A.Ş.',
      role: 'Lojistik Sorumlusu',
      period: 'Ara 2010 - Tem 2014 - 3 yıl 8 ay',
      description:
        'MS Office VBA ile yazdığım programlar sayesinde sistem üzerinden zamandan tasarruflar sağladık.',
      technologies: ['Mso', 'Ifs', 'Tesseract', 'Qr Code Generator'],
    },
  ],

  projects: [
    {
      id: '1',
      title: 'Evidea',
      description:
        'E-ticaret platformu. Kullanıcı dostu arayüz, ürün yönetimi ve stok takibi özellikleri.',
      image: '/images/projects/evidea.png',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
      liveUrl: 'https://evidea.com',
      featured: true,
      coordinates: { lat: 41.0082, lng: 28.9784 }, // İstanbul
    },
    {
      id: '2',
      title: 'NTV Haber',
      description:
        'Haber portalı. Gerçek zamanlı haber akışı ve multimedya içerik yönetimi.',
      image: '/images/projects/NTV-Haber.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://ntv.com.tr',
      featured: true,
      coordinates: { lat: 38.9072, lng: -77.0369 }, // ABD
    },
    {
      id: '3',
      title: 'Under Armour',
      description:
        'Spor giyim e-ticaret platformu. Modern tasarım ve kullanıcı deneyimi odaklı.',
      image: '/images/projects/under-armour.png',
      technologies: ['Next.js', 'TypeScript', 'GraphQL'],
      liveUrl: 'https://underarmour.com.tr',
      featured: true,
      coordinates: { lat: 39.2904, lng: -76.6122 }, // Baltimore
    },
    {
      id: '4',
      title: 'Vakko',
      description:
        'Lüks moda markası e-ticaret sitesi. Şık tasarım ve premium kullanıcı deneyimi.',
      image: '/images/projects/vakko.png',
      technologies: ['React', 'Next.js', 'Styled Components'],
      liveUrl: 'https://vakko.com',
      featured: true,
      coordinates: { lat: 30.0626, lng: 31.2497 }, // Afrika
    },
    {
      id: '5',
      title: 'SPX',
      description:
        'Spor ve fitness platformu. Kullanıcı etkileşimi ve performans takibi.',
      image: '/images/projects/spx.png',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://spx.com.tr',
      featured: false,
      coordinates: { lat: 52.52, lng: 13.405 }, // Berlin
    },
    {
      id: '6',
      title: 'Siyer Eşleştirme',
      description:
        'Eğitim platformu. İnteraktif öğrenme ve eşleştirme oyunu.',
      image: '/images/projects/siyer-eslestirme.png',
      technologies: ['React', 'TypeScript', 'Firebase'],
      featured: false,
      coordinates: { lat: 21.4225, lng: 39.8262 }, // Mekke
    },
  ],

  cvDownloads: [
    {
      language: 'tr',
      label: 'Türkçe CV',
      filename: '/cv/tr/CV.pdf',
    },
    {
      language: 'en',
      label: 'English CV',
      filename: '/cv/en/CV.pdf',
    },
    {
      language: 'tr',
      label: 'Engelli Türkçe CV',
      filename: '/cv/tr-e/CV.pdf',
    },
    {
      language: 'en',
      label: 'Disability English CV',
      filename: '/cv/en-e/CV.pdf',
    },
  ],
};

// Repository pattern - data access abstraction
export class PortfolioRepository {
  private data: PortfolioData;

  constructor(data: PortfolioData) {
    this.data = data;
  }

  getPersonalInfo() {
    return this.data.personalInfo;
  }

  getSocialLinks() {
    return this.data.socialLinks;
  }

  getExperiences() {
    return this.data.experiences;
  }

  getProjects() {
    return this.data.projects;
  }

  getFeaturedProjects() {
    return this.data.projects.filter((p) => p.featured);
  }

  getCVDownloads() {
    return this.data.cvDownloads;
  }
}

export const portfolioRepository = new PortfolioRepository(portfolioData);

