import { ProjectItemsLinks } from "../ProjectItemsLinks/ProjectItemsLinks";

interface ProjectItemsProps {
  projectItems: {
    name: string;
    descr: string;
    technologies: string;
    image: string;
    links: {
      linkDescr: string;
      link: string;
    }[];
    status: string;
  }[];
}

export const ProjectItems: React.FC<ProjectItemsProps> = ({ projectItems }) => {
  return (
    <ul className="flex flex-col gap-base md:flex-row md:w-full">
      {projectItems.map((el, id) => {
        return (
          <li
            key={id}
            className="rounded p-small bg-bgColor flex flex-col gap-small md:w-full"
          >
            <img src={el.image} alt={`${el.name} image`} />
            <div className="flex flex-col gap-[6px] md:h-full">
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
              <p className="text-text text-base font-light text-justify md:mb-auto">
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
