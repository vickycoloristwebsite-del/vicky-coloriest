import { notFound } from "next/navigation";
import { projectsData } from "@/lib/projects";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slugKey) => ({
    slug: slugKey.replace(/^\//, ""),
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[`/${slug}`];
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - VIKRAM KUMPATI`,
    description: project.description || `Project ${project.title} by VIKRAM KUMPATI`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData[`/${slug}`];

  if (!project) {
    notFound();
  }

  return (
    <article className="w-full max-w-[1920px] mx-auto">
      {/* Project Header */}
      {(project.title || project.description) && (
        <header className="w-full text-center py-8 px-4 max-w-[1200px] mx-auto">
          {project.title && (
            <h1 className="text-[26px] max-[932px]:text-[20px] font-light leading-[1.3] text-[#D1D5D7] uppercase tracking-[0.1em] preserve-whitespace">
              {project.title}
            </h1>
          )}
          {project.description && (
            <p className="text-[16px] max-[932px]:text-[14px] text-[#999999] mt-2 font-normal">
              {project.description}
            </p>
          )}
        </header>
      )}

      {/* Project Modules: Video Embeds, Images, Juxtapose, Text */}
      <div className="w-full space-y-4">
        {project.modules.map((mod, index) => {
          if (mod.type === "iframe" && mod.src) {
            // Check if it's Vimeo / Video vs Juxtapose slider
            const isJuxtapose = mod.src.includes("juxtapose");
            const aspectPadding = isJuxtapose ? "pb-[56.25%]" : "pb-[56.25%]";

            return (
              <div key={index} className="w-full max-w-[1920px] mx-auto my-4">
                <div className={`relative w-full ${aspectPadding} bg-[#181818]`}>
                  <iframe
                    src={mod.src}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={`${project.title} - Media ${index + 1}`}
                  />
                </div>
              </div>
            );
          }

          if (mod.type === "image" && mod.src) {
            return (
              <div key={index} className="w-full max-w-[1920px] mx-auto my-2">
                <img
                  src={mod.src}
                  alt={mod.alt || project.title}
                  className="w-full h-auto block object-cover"
                  loading="lazy"
                />
              </div>
            );
          }

          if (mod.type === "video" && mod.src) {
            return (
              <div key={index} className="w-full max-w-[1920px] mx-auto my-4">
                <video
                  src={mod.src}
                  controls
                  className="w-full h-auto block"
                  playsInline
                />
              </div>
            );
          }

          if (mod.type === "text" && mod.text) {
            return (
              <div
                key={index}
                className="w-full max-w-[900px] mx-auto px-4 py-6 text-center text-[#D1D5D7] text-[16px] leading-[1.8]"
              >
                <p>{mod.text}</p>
              </div>
            );
          }

          return null;
        })}
      </div>
    </article>
  );
}
