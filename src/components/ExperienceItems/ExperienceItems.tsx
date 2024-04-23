import { experienceItems } from "../../utils/experienceItems";

export const ExperienceItems = () => {
  return (
    <ul className="flex flex-col gap-base">
      {experienceItems.map((el, id) => {
        return (
          <li
            key={id}
            className="p-base bg-bgColor rounded flex flex-col gap-small"
          >
            <div className="flex flex-col gap-[2px]">
              <h3 className="text-medium text-black font-semibold">
                {el.position}
              </h3>
              <p className="experienceText">{el.companyName}</p>
              <p className="experienceText">{el.timeLine}</p>
            </div>
            <p className="experienceText text-justify">{el.descr}</p>
          </li>
        );
      })}
    </ul>
  );
};
