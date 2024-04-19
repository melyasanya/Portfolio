import { stackItems } from "../../utils/stackItems";

export const StackItems = () => {
  return (
    <ul className="flex flex-col gap-[24px]">
      {stackItems.map((el) => {
        return (
          <div className="bg-bgColor rounded p-[24px] flex flex-col gap-[24px]">
            <div className="flex gap-[12px] items-center">
              <img src={el.logo} alt="logo" className="w-[44px] h-[44px]" />
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
