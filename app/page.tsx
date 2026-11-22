import ProjectGrid from "@/components/ProjectGrid";
import { dpProjects } from "@/lib/projects";

export default function HomePage() {
  return <ProjectGrid projects={dpProjects} />;
}
