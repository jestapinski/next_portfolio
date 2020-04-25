import React from "react";
import { ThemeProvider } from "emotion-theming";

interface Colors {
  primary: string;
  secondary: string;
  accentWarm: string;
  accentCool: string;
}

interface Padding {
  default: string;
}

interface Theme {
  colors: Colors;
  padding: Padding;
}

const colors: Colors = {
  primary: "#38618C",
  secondary: "#FFE066",
  accentWarm: "#FF5964",
  accentCool: "#35A7FF",
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
