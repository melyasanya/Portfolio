import { Outlet } from "react-router-dom";

import { Introduction } from "../Introduction/Introduction";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useMediaQuery } from "react-responsive";
import { Footer } from "../Footer/Footer";
import { WorkStatus } from "../WorkStatus/WorkStatus";
import { Navigation } from "../Navigation/Navigation";
import { Socials } from "../Socials/Socials";

export const Layout = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <header className="border-b md:w-[180px] md:h-full md:fixed md:top-0 md:left-0 md:overflow-x-hidden md:border-r">
        <div className="container flex justify-between items-center py-base md:flex-col md:px-base md:pt-base md:pb-small md:h-full md:justify-normal">
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
      <main className="container pt-base md:ml-[180px]">
        <WorkStatus />
        <Outlet />
      </main>
      <footer className="border-t md:ml-[180px]">
        <Footer />
      </footer>
    </>
  );
};
