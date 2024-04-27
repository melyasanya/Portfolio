import { Outlet } from "react-router-dom";

import { Footer } from "../Footer/Footer";
import { WorkStatus } from "../WorkStatus/WorkStatus";
import { Header } from "../Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="px-base pt-base md:ml-[180px] md:px-medium md:pt-base xl:ml-[320px] xl:pt-medium">
        <WorkStatus />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
