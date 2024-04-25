import { ProjectItems } from "../../components/ProjectItems/ProjectItems";
import { Reveal } from "../../components/Reveal/Reaveal";
import { projectItems } from "../../utils/projectItems";

export const Projects = () => {
  return (
    <section>
      <Reveal>
        <div className="pb-base flex flex-col gap-base">
          <h1 className="text-extraLarge text-black font-bold leading-none">
            Projects: Showcasing <br />
            My Journey
          </h1>
          <ProjectItems projectItems={projectItems} />
        </div>
      </Reveal>
    </section>
  );
};
