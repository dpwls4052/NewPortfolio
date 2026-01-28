export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  logoWidth?: string;
  demo?: string;
  github?: string;
  role: string;
  contribution: string;
  skills: string;
  summary: string;
  type: "site" | "kiosk" | "dashboard" | "cloud";
  photos?: string[];
  video?: string;
  kioskPhotos?: { images: string[]; bgColor?: string }[];
  newsLink?: string;
};
