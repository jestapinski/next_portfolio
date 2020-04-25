import React from "react";
import styled from "@emotion/styled";
import Github from "./icons/github.tsx";
import Linkedin from "./icons/linkedin.tsx";
import { H3 } from "./text.tsx";

const Name = styled(H3)`
  margin: 0;
`;

const SocialLinks = styled("div")``;

const StyledNav = styled("div")`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  height: 70px;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.padding.default};
`;

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <Name light>Jordan Stapinski</Name>
      <SocialLinks>
        <a href="https://linkedin.com/in/jordanstapinski" target="_blank">
          <Linkedin height="44px" width="44px" />
        </a>
        <a href="https://github.com/jestapinski" target="_blank">
          <Github height="44px" width="44px" />
        </a>
      </SocialLinks>
    </StyledNav>
  );
};

export default Nav;
