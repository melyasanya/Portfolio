import { useMediaQuery } from "react-responsive";
import { stackItems } from "../../utils/stackItems";
import { ForwardBtn } from "../ForwardBtn/ForwardBtn";
import { StackItemShortDescr } from "../StackItemShortDescr/StackItemShortDescr";

export const HomeStack = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  const topStack = [
    "Javascript",
    "React",
    "Node.js",
    "Typescript",
    "HTML5",
    "CSS3",
  ];

  let displayedStack = [...topStack];

  if (isMobile) {
    displayedStack = topStack.slice(0, 3); // Вирізаємо перші три елементи для мобільного екрану
  } else if (isTablet) {
    displayedStack = topStack.slice(0, 4); // Вирізаємо перші чотири елементи для планшетного екрану
  } else if (isDesktop) {
    displayedStack = [...topStack];
  }

  const topStackItems = stackItems.filter((el) =>
    displayedStack.includes(el.name)
  );

  return (
    <div className="flex flex-col gap-base py-medium">
      <h2 className="text-large text-black font-bold">Stack</h2>
      <ul className="flex flex-col gap-base md:grid md:auto-rows-min md:grid-cols-2">
        {topStackItems.map((el, id) => {
          return (
            <li
              key={id}
              className="bg-bgColor rounded p-base flex flex-col gap-base md:w-full"
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
