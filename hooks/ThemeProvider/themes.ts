import { createGlobalStyle } from "styled-components";
interface Theme {
  colors: {
    main: string;
    secondary: string;
    third: string;
  };
}
export const lightTheme = {
  colors: {
    main: "#fff",
    third: "#232323",
    secondary: "#000",
  },
};
export const darkTheme = {
  colors: {
    main: "#000",
    third: "#232323",
    secondary: "#fff",
  },
};
export const GlobalStyle = createGlobalStyle`
body{
    background-color:${(props) => props.theme.colors.main};
    color:${(props) => props.theme.colors.secondary};
}
`;
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
