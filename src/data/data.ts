import projects from "./projects.json";
import others from "./others.json";
import personal from "./personal.json";

export interface NavItem {
  id: string;
  title: string;
  abbreviation: string;
  lastUpdated: string;
  isPrivate: boolean;
  imageSrc: string;
  description: string;
  data: any;
}

export interface PersonalData {
  name: string;
  role: string;
  pfp: string;
  email: string;
  about: string;
  study: string;
  experience: string;
  info: string;
}

export { projects, others, personal };
