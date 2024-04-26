import { useMediaQuery } from "react-responsive";
import { projectItems } from "../../utils/projectItems";
import { ForwardBtn } from "../ForwardBtn/ForwardBtn";
import { ProjectItems } from "../ProjectItems/ProjectItems";

export const HomeProjects = () => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  const recentProjectItems = !isDesktop
    ? projectItems.slice(0, 2)
    : projectItems.slice(0, 3);

  return (
    <div className="py-medium flex flex-col gap-base border-b w-full m-0">
      <h2 className="text-large text-black font-bold md:text-[28px] xl:text-[36px]">
        Recent Projects
      </h2>
      <ProjectItems projectItems={recentProjectItems} />
      <ForwardBtn
        navLink="projects"
        content="All Projects"
        className="w-[172px]"
      />
    </div>
  );
};
