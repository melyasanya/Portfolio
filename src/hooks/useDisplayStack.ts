import { useMediaQuery } from "react-responsive";

interface StackItem {
  name: string;
  logo: string;
  shortDescr: string;
  longDescr: string;
}

export const useDisplayStack = (stackItems: StackItem[]) => {
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
    displayedStack = topStack.slice(0, 3);
  } else if (isTablet) {
    displayedStack = topStack.slice(0, 4);
  } else if (isDesktop) {
    displayedStack = [...topStack];
  }

  const topStackItems = stackItems.filter((el) =>
    displayedStack.includes(el.name)
  );

  return topStackItems;
};
