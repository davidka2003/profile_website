import { LeftSider } from "@components/LeftSider";
import { RightSider } from "@components/RightSider";
import React, { ReactNode } from "react";
import styled from "styled-components";
const StyledSiderContainer = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
`;
interface SiderContainerProps {
  page: string;
  children: ReactNode;
}

const SiderContainer = ({ page, children }: SiderContainerProps) => {
  return (
    <StyledSiderContainer>
      <LeftSider page={page} />
      <RightSider children={children} />
    </StyledSiderContainer>
  );
};

export default SiderContainer;
