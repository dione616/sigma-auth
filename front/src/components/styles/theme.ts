import { css, DefaultTheme } from "styled-components";

export const templates = {
  centerContent: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
};
export const fonts = {
  font1: css`
    font-family: "Reggae One", cursive;
  `,
};

export const theme: DefaultTheme = {
  /* colors, */
  templates,
  fonts,
  /* dimensions */
};
