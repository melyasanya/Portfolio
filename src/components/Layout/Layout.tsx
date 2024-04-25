import { Outlet } from "react-router-dom";

import { Footer } from "../Footer/Footer";
import { WorkStatus } from "../WorkStatus/WorkStatus";
import { Header } from "../Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="px-base pt-base md:ml-[180px] md:px-[48px]">
        <WorkStatus />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
