import { stackItems } from "../../utils/stackItems";
import { ForwardBtn } from "../ForwardBtn/ForwardBtn";
import { StackItemShortDescr } from "../StackItemShortDescr/StackItemShortDescr";
import { useDisplayStack } from "../../hooks/useDisplayStack";

export const HomeStack = () => {
  const topStackItems = useDisplayStack(stackItems);

  return (
    <div className="flex flex-col gap-base py-medium">
      <h2>Stack</h2>
      <ul className="flex flex-col gap-base md:grid md:auto-rows-min md:grid-cols-2 xl:grid-cols-3">
        {topStackItems.map((el, id) => {
          return (
            <li
              key={id}
              className="bg-bgColor rounded p-base flex flex-col justify-center gap-base md:w-full"
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
      <ForwardBtn navLink="stack" content="All Stack" className="w-[152px]" />
    </div>
  );
};
