"use client";

import Link from "next/link";
import { ProjectCover } from "@/lib/projects";

interface ProjectGridProps {
  projects: ProjectCover[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section className="w-full">
      <div className="flex flex-wrap">
        {projects.map((project, index) => {
          const isRight = index % 2 === 1;

          return (
            <div
              key={`${project.href}-${index}`}
              className={`w-[calc(50%-5px)] max-[932px]:w-full mb-[10px] ${
                isRight ? "ml-[10px] max-[932px]:ml-0" : ""
              }`}
            >
              <Link
                href={project.href}
                className="group relative block w-full overflow-hidden focus:outline-none"
              >
                {/* 1920x802 Aspect Ratio Container (41.6667%) */}
                <div className="relative w-full pb-[41.67%] bg-[#181818] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover select-none"
                    loading="lazy"
                  />

                  {/* Dark hover overlay matching original #111111 at 0.9 opacity */}
                  <div className="absolute inset-0 bg-[#111111] opacity-0 group-hover:opacity-90 group-focus:opacity-90 transition-opacity duration-200" />

                  {/* Title & Date Details on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center p-[8%] opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-150">
                    <div className="text-center w-full max-w-[80%] mx-auto">
                      <h3 className="text-[#D1D5D7] text-[18px] max-[932px]:text-[14px] leading-[28px] max-[932px]:leading-[22px] font-light uppercase tracking-[0.08em] select-none">
                        {project.title}
                      </h3>
                      {project.date && (
                        <div className="text-[#D1D5D7] text-[16px] max-[932px]:text-[14px] leading-[20px] font-normal pt-[5px] select-none">
                          {project.date}
                        </div>
                      )}
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
