// Repository Interface - Open/Closed Principle (OCP)
import { PortfolioData } from '../types';

export interface IPortfolioRepository {
  getPersonalInfo(): PortfolioData['personalInfo'];
  getSocialLinks(): PortfolioData['socialLinks'];
  getExperiences(): PortfolioData['experiences'];
  getProjects(): PortfolioData['projects'];
  getFeaturedProjects(): PortfolioData['projects'];
  getCVDownloads(): PortfolioData['cvDownloads'];
}
