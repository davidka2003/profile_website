import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { ThemeProvider as ThemeProviderSC } from "styled-components";
import { darkTheme, lightTheme } from "./themes";
export interface ThemeProviderContextI {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<ThemeProviderContextI["theme"]>> | null;
}
const initialState: ThemeProviderContextI = {
  theme: "light",
  setTheme: null,
};
export const ThemeProviderContext = createContext<ThemeProviderContextI>(initialState);
interface ThemeProviderI {
  children: ReactNode;
  defaultTheme?: ThemeProviderContextI["theme"];
}
const ThemeProvider = ({ children, defaultTheme = "light" }: ThemeProviderI) => {
  const [theme, setTheme] = useState<ThemeProviderContextI["theme"]>(defaultTheme);
  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      <ThemeProviderSC theme={theme === "light" ? lightTheme : darkTheme}>{children}</ThemeProviderSC>
    </ThemeProviderContext.Provider>
  );
};
export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeProviderContext);
  return { theme, setTheme: setTheme! };
};
export default ThemeProvider;
