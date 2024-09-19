import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import { containerVars, elementVars } from "../../constants/animations.ts";
import { Icon } from "../Icons/index.ts";

interface NavigationProps {
  closeMenu?: () => void;
}

const navigationOptions = [
  { name: "Home", href: "/", icon: <Icon.Home /> },
  {
    name: "About",
    href: "/about",
    icon: <Icon.About />,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: <Icon.Projects />,
  },
  {
    name: "Stack",
    href: "/stack",
    icon: <Icon.Stack />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <Icon.Contact />,
  },
];

export const Navigation: React.FC<NavigationProps> = ({ closeMenu }) => {
  return (
    <nav className="xl:w-full">
      <motion.ul
        variants={containerVars}
        initial="initial"
        animate="open"
        exit="initial"
        className="flex flex-col items-center pt-small "
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
                      isActive ? "text-black font-semibold" : "text-text",
                      "flex flex-row items-center gap-extraSmall text-base p-base active:bg-activeLink active:rounded md:p-small xl:p-base xl:gap-small",
                    ].join(" ")
                  }
                >
                  {el.icon}
                  <p className="md:hidden xl:block">{el.name}</p>
                </NavLink>
              </motion.div>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
};
