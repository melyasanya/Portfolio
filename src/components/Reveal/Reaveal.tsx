import { motion } from "framer-motion";

interface RevealProps {
  children: JSX.Element;
}

export const Reveal: React.FC<RevealProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden w-fit">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
