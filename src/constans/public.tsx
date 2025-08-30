
export const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: i * 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

