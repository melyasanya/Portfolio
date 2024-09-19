import { NavLink } from "react-router-dom";

import { Icon } from "../Icons";

interface ForwardBtnProprs {
  navLink: string;
  content: string;
  className?: string;
}

export const ForwardBtn: React.FC<ForwardBtnProprs> = ({
  navLink,
  content,
  className,
}) => {
  return (
    <NavLink
      className={`flex justify-center items-center gap-[6px] text-text p-small border border-black rounded active:bg-activeLink md:px-0 ${className}`}
      to={`/${navLink}`}
    >
      <p>{content}</p>
      <Icon.Forward />
    </NavLink>
  );
};
