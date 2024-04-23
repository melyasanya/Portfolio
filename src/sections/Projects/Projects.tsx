import { ProjectItems } from "../../components/ProjectItems/ProjectItems";
import { projectItems } from "../../utils/projectItems";

export const Projects = () => {
  return (
    <section>
      <div className="pb-base flex flex-col gap-base">
        <h1 className="text-extraLarge text-black font-bold leading-none">
          Projects: Showcasing <br />
          My Journey
        </h1>
        <ProjectItems projectItems={projectItems} />
      </div>
    </section>
  );
};
