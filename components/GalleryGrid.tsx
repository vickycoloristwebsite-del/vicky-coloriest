"use client";

import Link from "next/link";
import { GalleryProject } from "@/lib/gallery";

interface GalleryGridProps {
  projects: GalleryProject[];
}

export default function GalleryGrid({ projects }: GalleryGridProps) {
  return (
    <section className="w-full">
      <div className="flex flex-wrap">
        {projects.map((project, index) => {
          const isRight = index % 2 === 1;

          return (
            <div
              key={project.id}
              className={`w-[calc(50%-5px)] max-[932px]:w-full mb-[10px] ${
                isRight ? "ml-[10px] max-[932px]:ml-0" : ""
              }`}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group relative block w-full overflow-hidden focus:outline-none"
              >
                {/* 16:9 Aspect Ratio Container (56.25%) matching project image aspect ratio */}
                <div className="relative w-full pb-[56.25%] bg-[#181818] overflow-hidden">
                  {project.thumbnail && (
                    <img
                      src={project.thumbnail}
                      alt={`Project ${project.title}`}
                      className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}

                  {/* Dark hover overlay matching existing #111111 at 0.85 opacity */}
                  <div className="absolute inset-0 bg-[#111111] opacity-0 group-hover:opacity-85 group-focus:opacity-85 transition-opacity duration-200" />

                  {/* Title Sequential Number on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center p-[8%] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-150">
                    <div className="text-center w-full max-w-[80%] mx-auto">
                      <h3 className="text-[#D1D5D7] text-[28px] max-[932px]:text-[22px] font-light uppercase tracking-[0.15em] select-none">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
