import { Link } from "react-router-dom";
import { Icon } from "../Icons";

export const DownloadBtn = () => {
  return (
    <Link
      to="/files/Oleksandr_Melnychenko_CV.pdf"
      target="_blank"
      download
      className="flex justify-center items-center gap-[6px] text-text p-small border border-black rounded active:bg-activeLink md:w-[200px] md:px-0"
    >
      <p>Download CV</p>
      <Icon.Download />
    </Link>
  );
};
