interface TransitionConfig {
  transition: {
    staggerChildren: number;
    staggerDirection: number;
    delayChildren?: number;
  };
}

interface ElementTransition {
  y: string | number;
  transition: {
    duration: number;
    ease: [number, number, number, number];
  };
}

export const containerVars: {
  initial: TransitionConfig;
  open: TransitionConfig;
} = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

export const elementVars: {
  initial: ElementTransition;
  open: ElementTransition;
} = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};
