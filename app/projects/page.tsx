import GalleryGrid from "@/components/GalleryGrid";
import { getGalleryProjects } from "@/lib/gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - VIKRAM KUMPATI",
  description: "Projects Gallery by VIKRAM KUMPATI",
};

export default function ProjectsPage() {
  const projects = getGalleryProjects();

  return <GalleryGrid projects={projects} />;
}
