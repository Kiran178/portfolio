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
