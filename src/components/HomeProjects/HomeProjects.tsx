import { projectItems } from "../../utils/projectItems";
import { ForwardBtn } from "../ForwardBtn/ForwardBtn";
import { ProjectItems } from "../ProjectItems/ProjectItems";

export const HomeProjects = () => {
  const recentProjectItems = projectItems.slice(0, 2);

  return (
    <div className="py-medium flex flex-col gap-base border-b">
      <h2 className="text-large text-black font-bold">Recent Projects</h2>
      <ProjectItems projectItems={recentProjectItems} />
      <ForwardBtn navLink="projects" content="All Projects" />
    </div>
  );
};
