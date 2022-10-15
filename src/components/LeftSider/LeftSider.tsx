import { SiderContent } from "@components/SiderContent";
import React from "react";
import styled from "styled-components";
const StyledLeftSider = styled.div`
  padding: 0 clamp(20px, 5vw, 40px);
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.main};
  width: 50%;
  min-height: 100vh;
  height: 100vh;
  top: 0;
  position: sticky;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;
const SiderTitle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    font-size: 100px;
    font-size: clamp(25px, 6vw, 100px);
    color: ${(props) => props.theme.colors.main};
  }
`;
interface LeftSiderProps {
  page: string;
}

const LeftSider = ({ page }: LeftSiderProps) => {
  return (
    <StyledLeftSider>
      <SiderContent>
        <SiderTitle>
          <p>{page}</p>
        </SiderTitle>
      </SiderContent>
    </StyledLeftSider>
  );
};

export default LeftSider;
