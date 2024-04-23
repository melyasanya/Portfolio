import { projectItems } from "../../utils/projectItems";
import { ProjectItemsLinks } from "../ProjectItemsLinks/ProjectItemsLinks";

export const ProjectItems = () => {
  return (
    <ul className="flex flex-col gap-base">
      {projectItems.map((el, id) => {
        return (
          <li key={id} className="p-small bg-bgColor flex flex-col gap-small">
            <img src={el.image} alt={`${el.name} image`} />
            <div className="flex flex-col gap-[6px]">
              <div className="flex justify-between">
                <div>
                  <p className="text-base text-text font-light uppercase">
                    {el.status}
                  </p>
                  <p className="text-medium text-blackSecondary font-bold">
                    {el.name}
                  </p>
                </div>
                <p className="text-base text-text font-bold">
                  {el.technologies}
                </p>
              </div>
              <p className="text-text text-base font-light text-justify">
                {el.descr}
              </p>
              <ProjectItemsLinks links={el.links} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
