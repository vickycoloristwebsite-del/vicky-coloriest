import { notFound } from "next/navigation";
import Link from "next/link";
import { getGalleryProjects, getGalleryProjectById } from "@/lib/gallery";
import type { Metadata } from "next";

interface ProjectDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getGalleryProjects();
  return projects.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getGalleryProjectById(id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `Project ${project.title} - VIKRAM KUMPATI`,
    description: `Gallery for Project ${project.title} by VIKRAM KUMPATI`,
  };
}

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params;
  const project = getGalleryProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <article className="w-full max-w-[1920px] mx-auto pb-16">
      {/* Project Navigation / Return & Title */}
      <header className="w-full py-6 px-4 flex items-center justify-between border-b border-white/5 mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center space-x-2 text-[#D1D5D7] hover:text-white text-[13px] uppercase tracking-[0.15em] transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Back to Projects</span>
        </Link>

        <h1 className="text-[20px] max-[932px]:text-[16px] font-light text-[#D1D5D7] uppercase tracking-[0.2em]">
          Project {project.title}
        </h1>

        <div className="w-[120px] hidden sm:block text-right text-xs text-neutral-500 font-mono">
          {project.images.length} {project.images.length === 1 ? "Image" : "Images"}
        </div>
      </header>

      {/* Gallery Layout of all project photos */}
      <div className="w-full space-y-6">
        {project.images.map((imgSrc, index) => (
          <div
            key={index}
            className="w-full max-w-[1920px] mx-auto bg-[#141414] rounded overflow-hidden shadow-2xl"
          >
            <img
              src={imgSrc}
              alt={`Project ${project.title} - Image ${index + 1}`}
              className="w-full h-auto block object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Bottom Back Button */}
      <div className="w-full text-center mt-12 pt-8 border-t border-white/5">
        <Link
          href="/projects"
          className="inline-flex items-center space-x-2 px-6 py-3 border border-white/10 hover:border-white/30 text-[#D1D5D7] hover:text-white text-[13px] uppercase tracking-[0.15em] transition-all rounded-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Return to Projects Gallery</span>
        </Link>
      </div>
    </article>
  );
}
