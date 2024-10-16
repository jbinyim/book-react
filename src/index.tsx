import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
