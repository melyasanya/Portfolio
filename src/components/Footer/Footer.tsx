import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t md:ml-[180px]">
      <div className="px-base text-small text-accent py-[76px] flex flex-col gap-[10px] md:flex-row md:gap-medium">
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
