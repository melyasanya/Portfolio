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
  {
    icon: <FaTelegramPlane className="icons" />,
    link: "https://t.me/melyasanya",
    name: "Telegram",
  },
  {
    icon: <FaInstagram className="icons" />,
    link: "https://www.instagram.com/sanya_melnychenko/",
    name: "Instagram",
  },
  {
    icon: <FaLinkedinIn className="icons" />,
    link: "https://www.linkedin.com/in/o-melnychenko/",
    name: "Linkedin",
  },
  {
    icon: <FaGithubSquare className="icons" />,
    link: "https://github.com/melyasanya",
    name: "Github",
  },
];

interface SocialProps {
  section: string;
}

export const Socials: React.FC<SocialProps> = ({ section }) => {
  if (section === "navigation")
    return (
      <motion.ul
        variants={containerVars}
        initial="initial"
        animate="open"
        exit="initial"
        className="flex flex-row border-t justify-between text-text p-small md:flex-col md:w-full xl:flex-row xl:pt-middle xl:pb-0"
      >
        {socialLinks.map((el, id) => {
          return (
            <li
              className=" overflow-hidden flex justify-center items-center p-small"
              key={id}
            >
              <motion.div variants={elementVars}>
                <Link to={el.link} target="_blank">
                  {el.icon}
                </Link>
              </motion.div>
            </li>
          );
        })}
      </motion.ul>
    );

  if (section === "contact")
    return (
      <div className="contactsContainer">
        <h3 className="contactsHeader">Social</h3>
        <ul className="contactsList">
          {socialLinks.map((el, id) => {
            return (
              <li key={id} className="contactsItem ">
                <Link to={el.link} target="_blank" className="contactsLink">
                  {el.icon} <p>{el.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
};
