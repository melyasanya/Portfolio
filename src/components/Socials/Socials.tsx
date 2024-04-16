import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

import { containerVars, elementVars } from "../../constants/animations.ts";

const socialLinks = [
  { icon: <FaTelegramPlane className="icons" />, link: "/" },
  { icon: <FaInstagram className="icons" />, link: "/" },
  { icon: <FaLinkedinIn className="icons" />, link: "/" },
  { icon: <FaGithubSquare className="icons" />, link: "/" },
];

export const Socials = () => {
  return (
    <motion.ul
      variants={containerVars}
      initial="initial"
      animate="open"
      exit="initial"
      className="flex flex-row border-t justify-between text-accent p-[12px]"
    >
      {socialLinks.map((el, id) => {
        return (
          <li
            className=" overflow-hidden flex justify-center items-center p-[12px]"
            key={id}
          >
            <motion.div variants={elementVars}>
              <Link to={el.link}>{el.icon}</Link>
            </motion.div>
          </li>
        );
      })}
    </motion.ul>
  );
};
