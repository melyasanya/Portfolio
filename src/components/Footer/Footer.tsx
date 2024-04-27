import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t md:ml-[180px] xl:ml-[320px] md:px-medium">
      <div className="px-base text-small text-accent py-[97.5px] flex flex-col gap-[10px] md:px-0 md:flex-row md:gap-medium xl:py-[49.5px]">
        <p>&copy;Copyright 2024. All rights reserved</p>
        <p>
          Made by <b>Oleksandr Melnychenko</b> with {""}
          <Link target="_blank" to="https://react.dev/">
            React
          </Link>
        </p>
      </div>
    </footer>
  );
};
