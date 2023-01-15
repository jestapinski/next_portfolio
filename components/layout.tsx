import { ReactNode } from "react";
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Head from "next/head";
import LightTheme from "../theme/light";
import Nav from "./nav";

const Main = styled("main")`
  padding: 16px;
  color: ${({ theme }) => theme.text.default};
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="A personal portfolio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <ThemeProvider theme={LightTheme}>
      <Main>{children}</Main>
    </ThemeProvider>
  </>
);

export default Layout;
