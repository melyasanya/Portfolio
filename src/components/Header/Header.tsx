import { useMediaQuery } from "react-responsive";

import { Navigation } from "../Navigation/Navigation";
import { Socials } from "../Socials/Socials";
import { Introduction } from "../Introduction/Introduction";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useScrollDirection } from "../../hooks/useScrollDirection";

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const scrollDirection = useScrollDirection();

  return (
    <header
      className={
        isMobile
          ? `header sticky ${
              scrollDirection === "down" ? "top-[-96px]" : "top-0"
            } transition-all duration-200 z-50 bg-white`
          : "header"
      }
    >
      <div className="flex justify-between items-center p-base md:flex-col md:px-base md:pt-base md:pb-small md:h-full md:justify-normal xl:pb-[36px] xl:pt-medium">
        <Introduction />
        {!isMobile && (
          <div className="flex flex-col justify-between items-center h-full w-full">
            <Navigation />
            <Socials section="navigation" />
          </div>
        )}

        {isMobile && <BurgerMenu />}
      </div>
    </header>
  );
};
