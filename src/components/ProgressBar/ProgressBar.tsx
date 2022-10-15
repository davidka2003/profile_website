import { motion, MotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
const StyledProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: ${(props) => props.theme.colors.third};
  transform-origin: 0%;
  z-index: 1;
`;
interface ProgressBarProps {}

const ProgressBar = ({}: ProgressBarProps) => {
  const scaleX = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  console.log(scaleX.get());
  useEffect(() => {
    const getScale = () => {
      const scale = window.scrollY / (document.documentElement.offsetHeight - window.innerHeight);
      scaleX.set(scale);
    };
    window.addEventListener("scroll", getScale);
    return () => window.removeEventListener("scroll", getScale);
  }, []);

  return <StyledProgressBar style={{ scaleX }}></StyledProgressBar>;
};

export default ProgressBar;
