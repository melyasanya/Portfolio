import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="container text-[12px] text-accent py-[76px] flex flex-col gap-[10px]">
      <p>&copy;Copyright 2024. All rights reserved</p>
      <p>
        Made by <b>Oleksandr Melnychenko</b> with <Link to="/">React</Link>
      </p>
    </div>
  );
};