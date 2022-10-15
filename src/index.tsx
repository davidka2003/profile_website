import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { WalletProvider } from "@hooks/WalletProvider";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "@store/store";
import ThemeProvider from "@hooks/ThemeProvider/ThemeProvider";
import { GlobalStyle } from "@hooks/ThemeProvider/themes";
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Router>
    <WalletProvider>
      <Provider store={store}>
        <ThemeProvider defaultTheme={"dark"}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </WalletProvider>
  </Router>
);
