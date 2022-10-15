import { rtl } from "@utils/animations/rtl";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
const StyledAboutMe = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  justify-content: space-between;
  p {
    font-size: clamp(20px, 5vw, 40px);
  }
`;
const StyledParagraph = styled.div`
  min-height: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
interface AboutMeProps {}

const AboutMe = ({}: AboutMeProps) => {
  return (
    <StyledAboutMe>
      <StyledParagraph>
        <motion.p {...rtl}>Hi, my name is David.</motion.p>
      </StyledParagraph>
      <StyledParagraph>
        <motion.p {...rtl}>I am 19 years old middle fullstack web developer.</motion.p>
      </StyledParagraph>
      <StyledParagraph>
        <motion.p {...rtl}>I moved a year ago from Saint Petesburg to Israel.</motion.p>
      </StyledParagraph>
      <StyledParagraph>
        <motion.p {...rtl}>
          My native language is Russian, but I am quite fluent in English and speak a little bit Hebrew as well.
        </motion.p>
      </StyledParagraph>
    </StyledAboutMe>
  );
};

export default AboutMe;
