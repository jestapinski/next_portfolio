import React from "react";
import { ThemeProvider } from "emotion-theming";

interface Colors {
  primary: string;
  secondary: string;
  accent: string;
}

interface Theme {
  colors: Colors;
}

const colors: Colors = {
  primary: "#00458B",
  secondary: "#3FD2C7",
  accent: "#99DDFF",
};

const theme: Theme = {
  colors,
};

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Layout;
