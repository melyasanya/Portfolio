import { stackItems } from "../../utils/stackItems";

export const StackItems = () => {
  return (
    <ul className="flex flex-col gap-base">
      {stackItems.map((el) => {
        return (
          <div className="bg-bgColor rounded p-base flex flex-col gap-base">
            <div className="flex gap-small items-center">
              <img
                src={el.logo}
                alt={`${el.name} logo`}
                className="w-[44px] h-[44px]"
              />
              <div>
                <p className="text-medium font-semibold text-black">
                  {el.name}
                </p>
                <p className="text-base font-light text-text">
                  {el.shortDescr}
                </p>
              </div>
            </div>
            <p className="text-justify text-base font-light text-text">
              {el.longDescr}
            </p>
          </div>
        );
      })}
    </ul>
  );
};
