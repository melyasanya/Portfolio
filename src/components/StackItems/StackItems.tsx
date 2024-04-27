import { stackItems } from "../../utils/stackItems";

import { StackItemShortDescr } from "../StackItemShortDescr/StackItemShortDescr";

export const StackItems = () => {
  return (
    <ul className="flex flex-col gap-base xl:grid xl:grid-cols-2">
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
            <p className="text-justify text-base font-light text-text md:text-middle">
              {el.longDescr}
            </p>
          </li>
        );
      })}
    </ul>
  );
};
