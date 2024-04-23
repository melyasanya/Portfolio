import { stackItems } from "../../utils/stackItems";
import { ForwardBtn } from "../ForwardBtn/ForwardBtn";
import { StackItemShortDescr } from "../StackItemShortDescr/StackItemShortDescr";

export const HomeStack = () => {
  const topStack = ["Javascript", "React", "Node.js"];

  const topStackItems = stackItems.filter((el) => topStack.includes(el.name));

  return (
    <div className="flex flex-col gap-base py-medium">
      <h2 className="text-large text-black font-bold">Stack</h2>
      <ul className="flex flex-col gap-base">
        {topStackItems.map((el, id) => {
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
            </li>
          );
        })}
      </ul>
      <ForwardBtn navLink="stack" content="All Stack" />
    </div>
  );
};
