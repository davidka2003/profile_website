import { motion, Variants } from "framer-motion";
import React, { ReactNode } from "react";
import styled from "styled-components";
const StyledSiderContent = styled(motion.div)`
  width: 100%;
  height: 100%;
`;
const ContentVariants: Variants = {
  offscreen: {
    x: "-40vw",
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 2,
      delay: 0.15,
    },
  },
};
interface SiderContentProps {
  children: ReactNode;
}

const SiderContent = ({ children }: SiderContentProps) => {
  return (
    <StyledSiderContent
      variants={ContentVariants}
      initial="offscreen"
      viewport={{ once: false, amount: "some" }}
      whileInView="onscreen"
    >
      {children}
    </StyledSiderContent>
  );
};

export default SiderContent;
