import { getProjects } from "@/actions/projects";
import ProjectCard from "./ProjectCard";

export default async function ProjectCards() {
  const projects = await getProjects([
    {
      repo: "reciparse",
      name: "🍽️ Reciparse",
    },
    {
      repo: "tacotok",
      name: "🌮 TacoTok",
    },
    {
      repo: "socket-shopping-list",
      name: "🛒 Sync Shop",
    },
    {
      repo: "restaurant-matcher",
      name: "🍔 Restaurant Match",
    },
    {
      repo: "timelapse",
      name: "📸 Timelapse",
    },
    {
      name: "🔮 Will it Taco?",
      repo: "will-it-taco",
    },
  ]);

  return (
    <div className="relative w-full grid md:grid-cols-3 gap-10 px-4 lg:px-0">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          href={project.href}
          source={project.source}
          description={project.description}
          tags={project.tags}
        />
      ))}
    </div>
  );
}
