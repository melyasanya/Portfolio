import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

interface AboutBtnProprs {
  navLink: string;
  content: string;
}

export const AboutBtn: React.FC<AboutBtnProprs> = ({ navLink, content }) => {
  return (
    <NavLink
      className="flex justify-center items-center gap-[6px] text-text py-small border border-black rounded active:bg-activeLink"
      to={`/${navLink}`}
    >
      <p>{content}</p>
      <IoIosArrowRoundForward className="icons" />
    </NavLink>
  );
};
