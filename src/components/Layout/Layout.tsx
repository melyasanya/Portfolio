import { Outlet } from "react-router-dom";

import { Introduction } from "../Introduction/Introduction";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useMediaQuery } from "react-responsive";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <header className="border-b">
        <div className="container flex justify-between items-center py-[24px]">
          <Introduction />
          {isMobile && <BurgerMenu />}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t">
        <Footer />
      </footer>
    </>
  );
};
