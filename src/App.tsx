import { LeftSider } from "@components/LeftSider";
import { ProgressBar } from "@components/ProgressBar";
import { RightSider } from "@components/RightSider";
import { SiderContainer } from "@components/SiderContainer";
import { content } from "@utils/constants/content";
import { motion, useScroll } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
const StyledAppLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
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

function App() {
  return (
    <>
      <ProgressBar />
      <StyledAppLayout>
        {content.map((cont) => (
          <SiderContainer key={cont.page} page={cont.page} children={<cont.component />} />
        ))}
        <ToastContainer position={"top-right"} />
      </StyledAppLayout>
    </>
  );
}
export default App;
