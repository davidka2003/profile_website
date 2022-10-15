import { ltrSmall } from "@utils/animations/ltr";
import { rtlSmall } from "@utils/animations/rtl";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
const StyledCompanies = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
const StyledSide = styled.div<{ left?: boolean }>`
  padding: 40px 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props) =>
    props.left
      ? `border-right: solid 1px ${props.theme.colors.third}`
      : `border-left: solid 1px ${props.theme.colors.third}`};
  ${(props) => (props.left ? `padding-right: 10px` : `padding-left: 10px`)};
`;
const Card = styled(motion.div)<{ left?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 150vh;
  justify-content: center;
  text-align: ${(props) => (props.left ? "left" : "right")};
  h1 {
    font-size: clamp(16px, 3.5vw, 40px);
  }
  p {
    font-size: clamp(12px, 2vw, 30px);
  }
`;
interface CompaniesProps {}

const Companies = ({}: CompaniesProps) => {
  return (
    <StyledCompanies>
      <StyledSide left>
        <Card left {...ltrSmall}>
          <h1>TEREXOV ltd</h1>
          <p>
            feb 2019 -
            <br /> dec 2021
          </p>
          <p>Fullstack react developer</p>
        </Card>
        <Card />
        <Card left {...ltrSmall}>
          <h1>Zira1</h1>
          <p>
            jun 2022 -
            <br /> oct 2022
          </p>
          <p>Backend developer</p>
        </Card>
        <Card />
        <Card left {...ltrSmall}>
          <h1>DataOnix</h1>
          <p>
            sep 2022 -
            <br /> nowadays
          </p>
          <p>Fullstack web3 developer</p>
        </Card>
      </StyledSide>
      <StyledSide>
        <Card />
        <Card {...rtlSmall}>
          <h1>The Desperate Apewives</h1>
          <p>
            apr 2022 -
            <br /> nowadays
          </p>
          <p>Fullstack web3 developer</p>
        </Card>
        <Card />
        <Card {...rtlSmall}>
          <h1>GET IN</h1>
          <p>
            sep 2022 -
            <br /> nowadays
          </p>
          <p>Fullstack web3 developer</p>
        </Card>
        <Card />
      </StyledSide>
    </StyledCompanies>
  );
};

export default Companies;
