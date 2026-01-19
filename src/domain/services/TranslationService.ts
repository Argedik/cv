// Translation Service - Single Responsibility Principle (SRP)
export type Language = 'tr' | 'en' | 'ar';
export type TranslationKey = string;

export interface ITranslationService {
	translate(key: TranslationKey, language: Language): string;
	getAllTranslations(language: Language): Record<string, string>;
}

class TranslationService implements ITranslationService {
	private translations: Record<Language, Record<string, string>>;

	constructor(translations: Record<Language, Record<string, string>>) {
		this.translations = translations;
	}

	translate(key: TranslationKey, language: Language): string {
		return this.translations[language]?.[key] || key;
	}

	getAllTranslations(language: Language): Record<string, string> {
		return this.translations[language] || {};
	}
}

// Translation data - separated from service logic
const translationData: Record<Language, Record<string, string>> = {
	tr: {
		'nav.home': 'Ana Sayfa',
		'nav.experience': 'Tecrübeler',
		'nav.projects': 'Projeler',
		'nav.contact': 'İletişim',
		'hero.explore': 'Keşfet',
		'hero.available': 'İş için müsait',
		'hero.subtitle': 'E-ticaret, Muhasebe ve Finans',
		'hero.description':
			'Merhaba! \n Full Stack Developer olarak bankacılık/finans projelerinde kurumsal uygulamalar geliştirdim; e-ticaret tarafında frontend deneyimi edindim. Ayrıca n8n ile iş akışı otomasyonu ve yapay zeka entegrasyonları üzerine eğitimler alarak süreçleri verimlileştiren çözümler geliştirmeye odaklanıyorum. Full stack pozisyonlar için görüşmelere açığım. \n İlginiz için teşekkür ederim. \n Saygılarımla,',
		'exp.title': 'Tecrübelerim',
		'exp.subtitle': 'Kariyer Yolculuğum',
		// Experience 1 - AlbarakaTech Global
		'exp.1.role': 'Full Stack Developer',
		'exp.1.periodStart': 'Ağu 2023',
		'exp.1.periodEnd': 'Halen',
		'exp.1.periodDuration': '2 yıl 4 ay',
		'exp.1.description':
			'Bankacılık personellerinin muhasebe ve finans operasyonlarını kolaylaştıran arayüz uygulamalarını geliştiriyorum.',
		// Experience 2 - Akinon
		'exp.2.role': 'Front-End Developer',
		'exp.2.periodStart': 'Ağu 2022',
		'exp.2.periodEnd': 'Ağu 2023',
		'exp.2.periodDuration': '1 yıl',
		'exp.2.description':
			'SPX, Underarmour, Brandys, Evidea, Vakko, Altınçadır gibi markaların e-ticaret sitelerine yazılımlar geliştirdim.',
		// Experience 3 - Kodluyoruz
		'exp.3.company': 'Kodluyoruz',
		'exp.3.role': 'Bootcamp Hızlandırma Programı',
		'exp.3.periodStart': 'Mar 2022',
		'exp.3.periodEnd': 'Ağu 2022',
		'exp.3.periodDuration': '6 ay',
		'exp.3.description':
			'Ön elemeleri geçtikten sonra hızlandırılmış eğitimi tamamladım ve bitirme projesiyle mezun oldum.',
		// Experience 4 - Kariyer Geçişi
		'exp.4.company': 'Kariyer Geçişi',
		'exp.4.role': 'Çeşitli Deneyimler',
		'exp.4.periodStart': 'Eki 2015',
		'exp.4.periodEnd': 'Ağu 2020',
		'exp.4.periodDuration': '5 yıl',
		'exp.4.description':
			"Arçelik sonrası, depo, kodlama, personel işleri ve emlakçılık gibi çeşitli küçük işletmelerde çalıştım. 2020'den itibaren yazılım alanlarında eğitimler aldım.",
		// Experience 5 - Arçelik
		'exp.5.role': 'Satınalma Görevlisi',
		'exp.5.periodStart': 'Tem 2014',
		'exp.5.periodEnd': 'Eki 2015',
		'exp.5.periodDuration': '1 yıl 4 ay',
		'exp.5.description':
			"MS Office VBA ile zamandan %70'e varan tasarruf sağladık.",
		// Experience 6 - KVK
		'exp.6.role': 'Lojistik Sorumlusu',
		'exp.6.periodStart': 'Ara 2010',
		'exp.6.periodEnd': 'Tem 2014',
		'exp.6.periodDuration': '3 yıl 8 ay',
		'exp.6.description':
			'MS Office VBA ile yazdığım programlar sayesinde sistem üzerinden zamandan tasarruflar sağladık.',
		'projects.title': 'Projelerim',
		'projects.subtitle': 'Çalışmalarım',
		'projects.viewDetails': 'Detayları Gör',
		'projects.featured': 'Öne Çıkan',
		'projects.liveDemo': 'Canlı Demo',
		'projects.close': 'Kapat',
		// Project 1 - Evidea
		'project.1.title': 'Evidea',
		'project.1.description':
			'E-ticaret platformu. Kullanıcı dostu arayüz, ürün yönetimi ve stok takibi özellikleri.',
		// Project 2 - NTV Haber
		'project.2.title': 'NTV Haber',
		'project.2.description':
			'Haber portalı. Gerçek zamanlı haber akışı ve multimedya içerik yönetimi.',
		// Project 3 - Under Armour
		'project.3.title': 'Under Armour',
		'project.3.description':
			'Spor giyim e-ticaret platformu. Modern tasarım ve kullanıcı deneyimi odaklı.',
		// Project 4 - Vakko
		'project.4.title': 'Vakko',
		'project.4.description':
			'Lüks moda markası e-ticaret sitesi. Şık tasarım ve premium kullanıcı deneyimi.',
		// Project 5 - SPX
		'project.5.title': 'SPX',
		'project.5.description':
			'Spor ve fitness platformu. Kullanıcı etkileşimi ve performans takibi.',
		// Project 6 - Siyer Eşleştirme
		'project.6.title': 'Siyer Eşleştirme',
		'project.6.description':
			'Eğitim platformu. İnteraktif öğrenme ve eşleştirme oyunu.',
		// Project 7 - Editor Portfolio
		'project.7.title': 'Editor Portfolio',
		'project.7.description':
			'Editör ve içerik üreticileri için portfolyo sitesi.',
		// Project 8 - Online Medrese
		'project.8.title': 'Online Medrese',
		'project.8.description':
			'Monorepo mimarisiyle geliştirilen online eğitim platformu.',
		'contact.title': 'İletişime Geçin',
		'contact.subtitle': 'Benimle Çalışmak İster misiniz?',
		'contact.contactInfo': 'İletişim Bilgileri',
		'contact.email': 'E-posta',
		'contact.location': 'Konum',
		'contact.socialMedia': 'Sosyal Medya',
		'contact.downloadCV': 'CV İndir',
		'contact.sendMessage': 'Mesaj Gönderin',
		'contact.name': 'İsim',
		'contact.namePlaceholder': 'İsminizi girin',
		'contact.emailLabel': 'E-posta',
		'contact.emailPlaceholder': 'E-posta adresinizi girin',
		'contact.message': 'Mesaj',
		'contact.messagePlaceholder': 'Mesajınızı yazın...',
		'contact.send': 'Mesaj Gönder',
		'contact.sending': 'Gönderiliyor...',
		'contact.sent': 'Gönderildi!',
		'contact.rights': 'Tüm hakları saklıdır.',
		'contact.madeWith': 'Next.js ile kodlanmıştır',
		'contact.error.web3formsKey':
			'Web3Forms access key bulunamadı. Lütfen .env dosyasını kontrol edin.',
		'contact.error.formSubmit': 'Form gönderiminde bir hata oluştu.',
		'contact.error.sendFailed':
			'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
		'contact.formSubject': 'Yeni İletişim Formu',
		'contact.formNameLabel': 'İsim',
		'contact.formEmailLabel': 'E-posta',
		'contact.formMessageLabel': 'Mesaj',
	},
	en: {
		'nav.home': 'Home',
		'nav.experience': 'Experience',
		'nav.projects': 'Projects',
		'nav.contact': 'Contact',
		'hero.explore': 'Explore',
		'hero.available': 'Available for work',
		'hero.subtitle': 'E-commerce, Accounting and Finance',
		'hero.description':
			'Hello! \n As a Full Stack Developer, I have built enterprise applications for banking/finance projects and gained frontend experience in e-commerce. I am also focusing on developing efficiency-driven solutions by taking training in workflow automation with n8n and AI integrations. I am open to opportunities for full stack roles. \nThank you for your consideration.\nSincerely,',
		'exp.title': 'My Experience',
		'exp.subtitle': 'Career Journey',
		// Experience 1 - AlbarakaTech Global
		'exp.1.role': 'Full Stack Developer',
		'exp.1.periodStart': 'Aug 2023',
		'exp.1.periodEnd': 'Present',
		'exp.1.periodDuration': '2 years 4 months',
		'exp.1.description':
			'I develop interface applications that facilitate accounting and finance operations for banking personnel.',
		// Experience 2 - Akinon
		'exp.2.role': 'Front-End Developer',
		'exp.2.periodStart': 'Aug 2022',
		'exp.2.periodEnd': 'Aug 2023',
		'exp.2.periodDuration': '1 year',
		'exp.2.description':
			'I developed software for e-commerce sites of brands such as SPX, Underarmour, Brandys, Evidea, Vakko, Altınçadır.',
		// Experience 3 - Kodluyoruz
		'exp.3.company': 'Kodluyoruz',
		'exp.3.role': 'Bootcamp Accelerator Program',
		'exp.3.periodStart': 'Mar 2022',
		'exp.3.periodEnd': 'Aug 2022',
		'exp.3.periodDuration': '6 months',
		'exp.3.description':
			'After passing the preliminary eliminations, I completed the intensive training and graduated with a final project.',
		// Experience 4 - Career Transition
		'exp.4.company': 'Career Transition',
		'exp.4.role': 'Various Experiences',
		'exp.4.periodStart': 'Oct 2015',
		'exp.4.periodEnd': 'Aug 2020',
		'exp.4.periodDuration': '5 years',
		'exp.4.description':
			'After Arçelik, I worked in various small businesses such as warehouse, coding, personnel affairs, and real estate. Since 2020, I have been receiving training in software fields.',
		// Experience 5 - Arçelik
		'exp.5.role': 'Procurement Officer',
		'exp.5.periodStart': 'Jul 2014',
		'exp.5.periodEnd': 'Oct 2015',
		'exp.5.periodDuration': '1 year 4 months',
		'exp.5.description':
			'We achieved up to 70% time savings with MS Office VBA.',
		// Experience 6 - KVK
		'exp.6.role': 'Logistics Supervisor',
		'exp.6.periodStart': 'Dec 2010',
		'exp.6.periodEnd': 'Jul 2014',
		'exp.6.periodDuration': '3 years 8 months',
		'exp.6.description':
			'Thanks to the programs I wrote with MS Office VBA, we achieved time savings through the system.',
		'projects.title': 'My Projects',
		'projects.subtitle': 'My Work',
		'projects.viewDetails': 'View Details',
		'projects.featured': 'Featured',
		'projects.liveDemo': 'Live Demo',
		'projects.close': 'Close',
		// Project 1 - Evidea
		'project.1.title': 'Evidea',
		'project.1.description':
			'E-commerce platform. User-friendly interface, product management and inventory tracking features.',
		// Project 2 - NTV Haber
		'project.2.title': 'NTV News',
		'project.2.description':
			'News portal. Real-time news feed and multimedia content management.',
		// Project 3 - Under Armour
		'project.3.title': 'Under Armour',
		'project.3.description':
			'Sports apparel e-commerce platform. Modern design and user experience focused.',
		// Project 4 - Vakko
		'project.4.title': 'Vakko',
		'project.4.description':
			'Luxury fashion brand e-commerce site. Elegant design and premium user experience.',
		// Project 5 - SPX
		'project.5.title': 'SPX',
		'project.5.description':
			'Sports and fitness platform. User interaction and performance tracking.',
		// Project 6 - Siyer Eşleştirme
		'project.6.title': 'Siyer Matching',
		'project.6.description':
			'Educational platform. Interactive learning and matching game.',
		// Project 7 - Editor Portfolio
		'project.7.title': 'Editor Portfolio',
		'project.7.description':
			'A portfolio website for editors and content creators.',
		// Project 8 - Online Medrese
		'project.8.title': 'Online Medrese',
		'project.8.description':
			'An online learning platform built with a monorepo architecture.',
		'contact.title': 'Get in Touch',
		'contact.subtitle': 'Do You Want to Work with Me?',
		'contact.contactInfo': 'Contact Information',
		'contact.email': 'Email',
		'contact.location': 'Location',
		'contact.socialMedia': 'Social Media',
		'contact.downloadCV': 'Download CV',
		'contact.sendMessage': 'Send Message',
		'contact.name': 'Name',
		'contact.namePlaceholder': 'Enter your name',
		'contact.emailLabel': 'Email',
		'contact.emailPlaceholder': 'Enter your email address',
		'contact.message': 'Message',
		'contact.messagePlaceholder': 'Write your message...',
		'contact.send': 'Send Message',
		'contact.sending': 'Sending...',
		'contact.sent': 'Sent!',
		'contact.rights': 'All rights reserved.',
		'contact.madeWith': 'Built with Next.js',
		'contact.error.web3formsKey':
			'Web3Forms access key not found. Please check the .env file.',
		'contact.error.formSubmit': 'An error occurred while submitting the form.',
		'contact.error.sendFailed':
			'An error occurred while sending the message. Please try again.',
		'contact.formSubject': 'New Contact Form',
		'contact.formNameLabel': 'Name',
		'contact.formEmailLabel': 'Email',
		'contact.formMessageLabel': 'Message',
	},
	ar: {
		'nav.home': 'الرئيسية',
		'nav.experience': 'الخبرات',
		'nav.projects': 'المشاريع',
		'nav.contact': 'اتصل',
		'hero.explore': 'استكشف',
		'hero.available': 'متاح للعمل',
		'hero.subtitle': 'التجارة الإلكترونية والمحاسبة والمالية',
		'hero.description':
			'مرحباً! \n بصفتي مطوّرًا شاملاً (Full Stack Developer)، قمت بتطوير تطبيقات مؤسسية ضمن مشاريع في مجال البنوك والتمويل، كما اكتسبت خبرة في تطوير الواجهات الأمامية لمشاريع التجارة الإلكترونية. كما أركّز على تطوير حلول تُحسّن الكفاءة من خلال تلقي تدريبات على أتمتة سير العمل باستخدام n8n ودمج تقنيات الذكاء الاصطناعي. أنا منفتح على فرص العمل في وظائف التطوير الشامل (Full Stack). \n شكراً لاهتمامك. \n مع أطيب التحيات،',
		'exp.title': 'خبراتي',
		'exp.subtitle': 'رحلتي المهنية',
		// Experience 1 - AlbarakaTech Global
		'exp.1.role': 'مطور Full Stack',
		'exp.1.periodStart': 'أغسطس 2023',
		'exp.1.periodEnd': 'حالياً',
		'exp.1.periodDuration': 'سنتان و 4 أشهر',
		'exp.1.description':
			'أطور تطبيقات واجهة تسهل عمليات المحاسبة والمالية لموظفي البنوك.',
		// Experience 2 - Akinon
		'exp.2.role': 'مطور Front-End',
		'exp.2.periodStart': 'أغسطس 2022',
		'exp.2.periodEnd': 'أغسطس 2023',
		'exp.2.periodDuration': 'سنة واحدة',
		'exp.2.description':
			'طورت برمجيات لمواقع التجارة الإلكترونية لعلامات تجارية مثل SPX و Underarmour و Brandys و Evidea و Vakko و Altınçadır.',
		// Experience 3 - Kodluyoruz
		'exp.3.company': 'Kodluyoruz',
		'exp.3.role': 'برنامج تسريع Bootcamp',
		'exp.3.periodStart': 'مارس 2022',
		'exp.3.periodEnd': 'أغسطس 2022',
		'exp.3.periodDuration': '6 أشهر',
		'exp.3.description':
			'بعد اجتياز التصفيات الأولية، أكملت التدريب المكثف وتخرجت بمشروع نهائي.',
		// Experience 4 - Kariyer Geçişi
		'exp.4.company': 'الانتقال المهني',
		'exp.4.role': 'خبرات متنوعة',
		'exp.4.periodStart': 'أكتوبر 2015',
		'exp.4.periodEnd': 'أغسطس 2020',
		'exp.4.periodDuration': '5 سنوات',
		'exp.4.description':
			'بعد Arçelik، عملت في أعمال تجارية صغيرة متنوعة مثل المستودعات والبرمجة وشؤون الموظفين والعقارات. منذ عام 2020، أتلقى تدريبات في مجالات البرمجيات.',
		// Experience 5 - Arçelik
		'exp.5.role': 'موظف المشتريات',
		'exp.5.periodStart': 'يوليو 2014',
		'exp.5.periodEnd': 'أكتوبر 2015',
		'exp.5.periodDuration': 'سنة واحدة و 4 أشهر',
		'exp.5.description':
			'حققنا توفيراً في الوقت يصل إلى 70% باستخدام MS Office VBA.',
		// Experience 6 - KVK
		'exp.6.role': 'مشرف اللوجستيات',
		'exp.6.periodStart': 'ديسمبر 2010',
		'exp.6.periodEnd': 'يوليو 2014',
		'exp.6.periodDuration': '3 سنوات و 8 أشهر',
		'exp.6.description':
			'بفضل البرامج التي كتبتها باستخدام MS Office VBA، حققنا توفيرات في الوقت من خلال النظام.',
		'projects.title': 'مشاريعي',
		'projects.subtitle': 'أعمالي',
		'projects.viewDetails': 'عرض التفاصيل',
		'projects.featured': 'مميز',
		'projects.liveDemo': 'عرض مباشر',
		'projects.close': 'إغلاق',
		// Project 1 - Evidea
		'project.1.title': 'Evidea',
		'project.1.description':
			'منصة التجارة الإلكترونية. واجهة سهلة الاستخدام، إدارة المنتجات وميزات تتبع المخزون.',
		// Project 2 - NTV Haber
		'project.2.title': 'NTV News',
		'project.2.description':
			'بوابة إخبارية. تدفق الأخبار في الوقت الفعلي وإدارة المحتوى متعدد الوسائط.',
		// Project 3 - Under Armour
		'project.3.title': 'Under Armour',
		'project.3.description':
			'منصة التجارة الإلكترونية للملابس الرياضية. تصميم حديث ومركز على تجربة المستخدم.',
		// Project 4 - Vakko
		'project.4.title': 'Vakko',
		'project.4.description':
			'موقع التجارة الإلكترونية لعلامة الأزياء الفاخرة. تصميم أنيق وتجربة مستخدم متميزة.',
		// Project 5 - SPX
		'project.5.title': 'SPX',
		'project.5.description':
			'منصة الرياضة واللياقة البدنية. تفاعل المستخدم وتتبع الأداء.',
		// Project 6 - Siyer Eşleştirme
		'project.6.title': 'مطابقة السيرة',
		'project.6.description': 'منصة تعليمية. التعلم التفاعلي ولعبة المطابقة.',
		// Project 7 - Editor Portfolio
		'project.7.title': 'Editor Portfolio',
		'project.7.description':
			'موقع بورتفوليو للمحررين وصنّاع المحتوى، يركز على واجهة حديثة وعرض الأعمال بسرعة وبشكل منظم.',
		// Project 8 - Online Medrese
		'project.8.title': 'المدرسة الإلكترونية',
		'project.8.description': 'منصة تعليمية عبر الإنترنت ببنية monorepo.',
		'contact.title': 'تواصل معي',
		'contact.subtitle': 'هل تريد العمل معي؟',
		'contact.contactInfo': 'معلومات الاتصال',
		'contact.email': 'البريد الإلكتروني',
		'contact.location': 'الموقع',
		'contact.socialMedia': 'وسائل التواصل الاجتماعي',
		'contact.downloadCV': 'تحميل السيرة الذاتية',
		'contact.sendMessage': 'إرسال رسالة',
		'contact.name': 'الاسم',
		'contact.namePlaceholder': 'أدخل اسمك',
		'contact.emailLabel': 'البريد الإلكتروني',
		'contact.emailPlaceholder': 'أدخل عنوان بريدك الإلكتروني',
		'contact.message': 'الرسالة',
		'contact.messagePlaceholder': 'اكتب رسالتك...',
		'contact.send': 'إرسال الرسالة',
		'contact.sending': 'جاري الإرسال...',
		'contact.sent': 'تم الإرسال!',
		'contact.rights': 'جميع الحقوق محفوظة.',
		'contact.madeWith': 'مبني باستخدام Next.js',
		'contact.error.web3formsKey':
			'لم يتم العثور على مفتاح الوصول Web3Forms. يرجى التحقق من ملف .env.',
		'contact.error.formSubmit': 'حدث خطأ أثناء إرسال النموذج.',
		'contact.error.sendFailed':
			'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.',
		'contact.formSubject': 'نموذج اتصال جديد',
		'contact.formNameLabel': 'الاسم',
		'contact.formEmailLabel': 'البريد الإلكتروني',
		'contact.formMessageLabel': 'الرسالة',
	},
};

// Service instance - Dependency Injection ready
export const translationService: ITranslationService = new TranslationService(
	translationData,
);
