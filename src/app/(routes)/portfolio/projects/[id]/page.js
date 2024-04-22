import { projectsData } from "@/lib/data";
import ProjectDetailsSection from "../../components/ProjectDetailsSection";

export default function Portfolio({ params: { id } }) {
  const project = projectsData.find((project) => project.id.toString() === id);

  if (!project) return <NotFound />;

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#161513]">
      <ProjectDetailsSection project={project} />
    </main>
  );
}

const NotFound = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <h1>404 - Project Not Found</h1>
    </main>
  );
};
