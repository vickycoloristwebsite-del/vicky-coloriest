import fs from "fs";
import path from "path";

export interface GalleryProject {
  id: string;
  title: string;
  thumbnail: string;
  images: string[];
}

/**
 * Dynamically reads D:\check\vicky-colorsit\public\projects
 * Returns folders sorted sequentially (1, 2, 3, ...), with thumbnail (1.jpg) and all images.
 */
export function getGalleryProjects(): GalleryProject[] {
  const dir = path.join(process.cwd(), "public", "projects");
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => {
      const numA = parseInt(a, 10);
      const numB = parseInt(b, 10);
      if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
      return a.localeCompare(b, undefined, { numeric: true });
    })
    .map((folderName) => {
      const folderPath = path.join(dir, folderName);
      const files = fs
        .readdirSync(folderPath)
        .filter((file) => /\.(jpe?g|png|webp|avif)$/i.test(file))
        .sort((a, b) => {
          const numA = parseInt(a.replace(/\D/g, ""), 10);
          const numB = parseInt(b.replace(/\D/g, ""), 10);
          if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
          return a.localeCompare(b, undefined, { numeric: true });
        });

      return {
        id: folderName,
        title: folderName,
        thumbnail:
          files.length > 0 ? `/projects/${folderName}/${files[0]}` : "",
        images: files.map((f) => `/projects/${folderName}/${f}`),
      };
    });
}

export function getGalleryProjectById(id: string): GalleryProject | null {
  const projects = getGalleryProjects();
  return projects.find((p) => p.id === id) || null;
}
