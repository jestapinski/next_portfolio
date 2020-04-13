import React from "react";
import { ThemeProvider } from "emotion-theming";

interface Colors {
  primary: string;
  secondary: string;
  accent: string;
}

interface Padding {
  default: string;
}

interface Theme {
  colors: Colors;
  padding: Padding;
}

const colors: Colors = {
  primary: "#00458B",
  secondary: "#3FD2C7",
  accent: "#99DDFF",
};

const padding: Padding = {
  default: "16px",
};

const theme: Theme = {
  colors,
  padding,
};

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Layout;
