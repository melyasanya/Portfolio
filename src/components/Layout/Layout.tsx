import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="absolute xl:relative">Layout</div>
      <Outlet />
    </>
  );
};
