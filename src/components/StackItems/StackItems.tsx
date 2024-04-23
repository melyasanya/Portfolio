import { stackItems } from "../../utils/stackItems";
import { StackItemShortDescr } from "../StackItemShortDescr/StackItemShortDescr";

export const StackItems = () => {
  return (
    <ul className="flex flex-col gap-base">
      {stackItems.map((el, id) => {
        return (
          <li
            key={id}
            className="bg-bgColor rounded p-base flex flex-col gap-base"
          >
            <StackItemShortDescr
              logo={el.logo}
              name={el.name}
              shortDescr={el.shortDescr}
            />
            <p className="text-justify text-base font-light text-text">
              {el.longDescr}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
