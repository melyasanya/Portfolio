import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { containerVars, elementVars } from "../../constants/animations.ts";
import { GoBriefcase, GoHome, GoPerson, GoRead, GoStack } from "react-icons/go";

interface NavigationProps {
  closeMenu: () => void;
}

const navigationOptions = [
  { name: "Home", href: "/", icon: <GoHome className="icons" /> },
  {
    name: "About",
    href: "/about",
    icon: <GoPerson className="icons" />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <GoBriefcase className="icons" />,
  },
  {
    name: "Stack",
    href: "/stack",
    icon: <GoStack className="icons" />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <GoRead className="icons" />,
  },
];

export const Navigation: React.FC<NavigationProps> = ({ closeMenu }) => {
  return (
    <nav>
      <motion.ul
        variants={containerVars}
        initial="initial"
        animate="open"
        exit="initial"
        className="flex flex-col items-center pt-[12px]"
      >
        {navigationOptions.map((el, id) => {
          return (
            <li className="overflow-hidden w-full text-left" key={id}>
              <motion.div variants={elementVars}>
                <NavLink
                  to={el.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      isActive
                        ? "text-black fill-black font-semibold"
                        : "text-text",
                      "flex flex-row justify-star items-center gap-[8px] text-base p-[24px] active:bg-activeLink active:rounded",
                    ].join(" ")
                  }
                >
                  {el.icon}
                  {el.name}
                </NavLink>
              </motion.div>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};
