import React, { ReactNode } from "react";
import styled from "styled-components";
const StyledRightSider = styled.div`
  padding: clamp(20px, 5vw, 40px);
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.secondary};
  width: 50%;
  min-height: 300vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
`;
interface RightSiderProps {
  children: ReactNode;
}

const RightSider = ({ children }: RightSiderProps) => {
  return <StyledRightSider>{children}</StyledRightSider>;
};

export default RightSider;
