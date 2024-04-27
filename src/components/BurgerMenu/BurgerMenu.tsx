import { AnimatePresence, motion } from "framer-motion";
import { Navigation } from "../Navigation/Navigation";
import { useState } from "react";
import { Socials } from "../Socials/Socials";

export const BurgerMenu = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
    document.body.style.overflow = active ? "auto" : "hidden";
  };

  return (
    <>
      <div className="z-10">
        <motion.button
          onClick={toggleMenu}
          animate={active ? "open" : "closed"}
          className="flex flex-col space-y-1"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6 },
            }}
            className="w-5 h-[2px] bg-text block"
          ></motion.span>
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="w-5 h-[2px] bg-text block"
          ></motion.span>
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -6 },
            }}
            className="w-5 h-[2px] bg-text block"
          ></motion.span>
        </motion.button>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: 1,
              transition: {
                duration: 0.2,
                ease: [0.12, 0, 0.39, 0],
              },
            }}
            exit={{
              scaleY: 0,
              transition: {
                delay: 0.25,
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="bg-white absolute left-0 top-[97px] w-full origin-top z-50 border-b h-[calc(100vh-97px)] px-base"
          >
            <div className="flex flex-col justify-between h-[calc(100vh-97px)]">
              <Navigation closeMenu={toggleMenu} />
              <Socials section={"navigation"} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
