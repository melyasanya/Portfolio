import { Link } from "react-router-dom";
import { GoDownload } from "react-icons/go";

export const DownloadBtn = () => {
  return (
    <Link
      to="../../../public/files/Oleksandr_Melnychenko_CV.pdf"
      target="_blank"
      download
      className="flex justify-center items-center gap-[6px] text-text py-small border border-black rounded active:bg-activeLink md:w-[200px]"
    >
      <p>Download CV</p>
      <GoDownload className="icons" />
    </Link>
  );
};
