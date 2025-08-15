"use client";

import {useState} from "react";
import {personalProjects} from "@/components/Data/data";
import Link from "next/link";
import Image from "next/image";
import {ExternalLink, Github} from "lucide-react";

const ProjectsPage = () => {
  const [filter, setFilter] = useState<string>("all");

  // Define project categories
  const categories = [
    {id: "all", name: "All", count: personalProjects.length},
    {
      id: "fullstack",
      name: "Full Stack",
      count: personalProjects.filter((p) => p.category === "fullstack").length,
    },

    {
      id: "frontend",
      name: "Frontend",
      count: personalProjects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "ai",
      name: "AI",
      count: personalProjects.filter((p) => p.category === "ai").length,
    },
    {
      id: "plugins",
      name: "Plugins",
      count: personalProjects.filter((p) => p.category === "plugins").length,
    },
  ];

  // Filter projects based on category
  const getFilteredProjects = () => {
    if (filter === "all") return personalProjects;
    return personalProjects.filter((project) => project.category === filter);
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-5 py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <Link
          href="/"
          className="text-[#ffdb70] hover:opacity-80 transition-opacity mb-6 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-4">Proof-of-Work</h1>
        <p className="text-xl text-[#ffdb70] mb-2">
          &quot;Code is like humor. When you have to explain it, it&apos;s
          bad.&quot;
        </p>
        <p className="text-zinc-400">
          Here&apos;s a collection of projects I&apos;ve built with passion and
          curiosity.
        </p>
      </div>

      {/* Category Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                filter === category.id
                  ? "bg-[#ffdb70] text-black shadow-md"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300 border border-zinc-700"
              }`}
            >
              {category.name}
              <span
                className={`ml-1.5 ${
                  filter === category.id ? "text-black/70" : "text-zinc-500"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid - 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden hover:border-[#ffdb70] transition-all duration-300 group"
          >
            {/* Project Image */}
            <div className="h-48 relative overflow-hidden bg-zinc-800">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Project Content */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-[#ffdb70] transition-colors">
                  {project.title}
                </h3>
                <span className="px-2 py-1 bg-zinc-800 text-[#ffdb70] rounded text-xs font-medium border border-zinc-600">
                  {project.category === "webapp"
                    ? "Web App"
                    : project.category === "fullstack"
                    ? "Full Stack"
                    : project.category === "frontend"
                    ? "Frontend"
                    : project.category === "ai"
                    ? "AI"
                    : project.category === "plugins"
                    ? "Plugins"
                    : project.category}
                </span>
              </div>

              <p className="text-zinc-400 text-sm mb-3 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              {project.techStack && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-zinc-800 text-[#ffdb70] rounded text-xs border border-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 bg-zinc-800 text-zinc-400 rounded text-xs">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-zinc-600"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#ffdb70] hover:bg-[#ffdb70]/90 text-black px-3 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl font-semibold text-zinc-400 mb-2">
            No projects found in this category
          </h3>
          <p className="text-zinc-500">
            Try selecting a different category to explore more projects.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
