import { css } from "styled-components";

const colors = {
  mainBlue: "#33AFE8",
  textBlue: "#0f4e8a",
};

const theme = {
  colors,
};

export default theme;

export type Theme = typeof theme;
