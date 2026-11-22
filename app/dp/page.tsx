import ProjectGrid from "@/components/ProjectGrid";
import { dpProjects } from "@/lib/projects";

export default function DpPage() {
  return <ProjectGrid projects={dpProjects} />;
}
