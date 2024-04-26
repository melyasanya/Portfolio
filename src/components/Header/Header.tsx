import { useMediaQuery } from "react-responsive";

import { Navigation } from "../Navigation/Navigation";
import { Socials } from "../Socials/Socials";
import { Introduction } from "../Introduction/Introduction";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <header className="border-b md:w-[180px] md:h-full md:fixed md:top-0 md:left-0 md:overflow-x-hidden md:border-r xl:w-[320px]">
      <div className="flex justify-between items-center p-base md:flex-col md:px-base md:pt-base md:pb-small md:h-full md:justify-normal xl:pb-[36px]">
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
