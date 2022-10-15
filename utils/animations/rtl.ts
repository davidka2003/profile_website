export const rtl = {
  variants: {
    offscreen: {
      x: "40vw",
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
        delay: 0.15,
      },
    },
  },
  initial: "offscreen",
  viewport: { once: false, amount: "some" as number | "all" | "some" | undefined },
  whileInView: "onscreen",
};
export const rtlSmall = {
  variants: {
    offscreen: {
      x: "20vw",
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
        delay: 0.15,
      },
    },
  },
  initial: "offscreen",
  viewport: { once: false, amount: "some" as number | "all" | "some" | undefined },
  whileInView: "onscreen",
};
