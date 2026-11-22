export interface ProjectCover {
  title: string;
  href: string;
  image: string;
  srcset?: string;
  date?: string;
}

export interface ProjectModule {
  type: "iframe" | "image" | "text" | "video" | string;
  src?: string;
  srcset?: string;
  alt?: string;
  text?: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  description?: string;
  modules: ProjectModule[];
}

import siteData from "./data.json";

export const dpProjects = siteData.dp as ProjectCover[];
export const colorProjects = siteData.color as ProjectCover[];
export const projectsData = siteData.projects as unknown as Record<string, ProjectDetail>;
