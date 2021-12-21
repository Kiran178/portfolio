export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  visible: {
    x: "100%",
    skew: "0deg",
    transition: { ease: "easeOut", duration: 0.8 },
  },
};
export const sliderContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: "easeOut" },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 1 },
    when: "afterChildren",
  },
};

export const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    when: "afterChildren",
    transition: { ease: "easeOut", duration: 1 },
  },
};
export const fadeDown = {
  hidden: { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // transition: { duration: 0.5, ease: "easeOut" },
  },
};
export const fadeRight = {
  hidden: { x: -500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};
export const bounceRight = {
  hidden: { x: -500, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};
