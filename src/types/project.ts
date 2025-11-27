export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  url?: string;
}

export interface ProjectsData {
  frontend: Project[];
  gamedev: Project[];
  design: Project[];
}
