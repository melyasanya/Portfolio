import { motion } from "framer-motion";
import { useState } from "react";

export const BurgerMenu = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => setActive(!active);

  return (
    <div>
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
          className="w-5 h-[2px] bg-black block"
        ></motion.span>
        <motion.span
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          className="w-5 h-[2px] bg-black block"
        ></motion.span>
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -6 },
          }}
          className="w-5 h-[2px] bg-black block"
        ></motion.span>
      </motion.button>
    </div>
  );
};
