import projectsData from "./projects.json";
import othersData from "./others.json";
import personalData from "./personal.json";

export interface ProjectDataContent {
  sections?: Record<string, string | string[]>;
  media?: { src: string; alt?: string; caption?: string }[];
}

export interface ExperienceItem {
  label: string;
  description: string;
  state?: string;
  date?: string;
  employment?: string;
}

export type OtherDataContent = Record<string, string[]> | ExperienceItem[];

export interface NavigationItemType {
  id: string;
  title: string;
  abbreviation: string;
  lastUpdated: string;
  isPrivate: boolean;
  imageSrc: string;
  description: string;
  data: any; // We will narrow this down where used
}

export interface PersonalDataType {
  name: string;
  role: string;
  pfp: string;
  email: string;
  about: string;
  study: string;
  experience: string;
  info: string;
}

export const navigationItemJSON: NavigationItemType[] = projectsData;
export const otherNavigationItemJSON: NavigationItemType[] = othersData;
export const personalItemJSON: PersonalDataType = personalData;
