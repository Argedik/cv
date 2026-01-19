import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
	personalInfo: {
		name: 'Enes Yasin Gedik',
		title: 'Full Stack Developer',
		avatar: '/images/avatar.jpg',
		location: 'Eyüpsultan, İstanbul, Türkiye',
		email: 'gedikas@hotmail.com',
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
			role: '',
			period: '',
			description: '',
			technologies: ['C#', '.Net', 'Sql Server', 'Javascript', 'Tfs'],
		},
		{
			id: '2',
			company: 'Akinon A.Ş.',
			role: '',
			period: '',
			description: '',
			technologies: [
				'Js',
				'Next Js',
				'React Js',
				'Phyton',
				'Django',
				'Tailwind',
				'Scss',
			],
		},
		{
			id: '3',
			company: '',
			role: '',
			period: '',
			description: '',
			technologies: ['JavaScript', 'React Js', 'Html', 'Css', 'Git'],
		},
		{
			id: '4',
			company: '',
			role: '',
			period: '',
			description: '',
			technologies: ['JavaScript', 'React Js', 'Html', 'Css', 'Git'],
		},
		{
			id: '5',
			company: 'Arçelik A.Ş.',
			role: 'Satınalma Görevlisi',
			period: 'Tem 2014 - Eki 2015 - 1 yıl 4 ay',
			description: 'MS Office VBA ile zamandan %70’e varan tasarruf sağladık.',
			technologies: ['Mso', 'Sap'],
		},
		{
			id: '6',
			company: 'KVK Teknoloji Ürünleri A.Ş.',
			role: '',
			period: '',
			description: '',
			technologies: ['Mso', 'Ifs', 'Tesseract', 'Qr Code Generator'],
		},
	],

	projects: [
		{
			id: '1',
			image: '/images/projects/evidea.png',
			technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
			liveUrl: 'https://evidea.com',
			featured: false,
		},
		{
			id: '2',
			image: '/images/projects/NTV-Haber.png',
			technologies: ['React', 'Node.js', 'MongoDB'],
			liveUrl: 'https://ntv.com.tr',
			featured: false,
		},
		{
			id: '3',
			image: '/images/projects/under-armour.png',
			technologies: ['Next.js', 'TypeScript', 'GraphQL'],
			liveUrl: 'https://underarmour.com.tr',
			featured: false,
		},
		{
			id: '4',
			image: '/images/projects/vakko.png',
			technologies: ['React', 'Next.js', 'Styled Components'],
			liveUrl: 'https://vakko.com',
			featured: false,
		},
		{
			id: '5',
			image: '/images/projects/spx.png',
			technologies: ['Vue.js', 'Node.js', 'PostgreSQL'],
			liveUrl: 'https://spx.com.tr',
			featured: false,
		},
		{
			id: '6',
			image: '/images/projects/siyer-eslestirme.png',
			technologies: ['React', 'TypeScript', 'Firebase'],
			featured: true,
		},
	],

	cvDownloads: [
		{
			language: 'tr',
			label: 'Türkçe CV',
			filename: '/cv/tr/Full-Stack Developer-TR.pdf',
		},
		{
			language: 'en',
			label: 'English CV',
			filename: '/cv/en/Full-Stack Developer-EN.pdf',
		},
		{
			language: 'tr',
			label: 'Engelli Türkçe CV',
			filename: '/cv/tr-e/Full-Stack Developer-TR-E.pdf',
		},
		{
			language: 'en',
			label: 'Disability English CV',
			filename: '/cv/en-e/Full-Stack Developer-EN-E.pdf',
		},
	],
};

// Repository pattern - data access abstraction
// Implements interface for Open/Closed Principle (OCP)
import { IPortfolioRepository } from '../repositories/IPortfolioRepository';

export class PortfolioRepository implements IPortfolioRepository {
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

// Dependency Injection ready - can be replaced with mock for testing
export const portfolioRepository: IPortfolioRepository =
	new PortfolioRepository(portfolioData);
