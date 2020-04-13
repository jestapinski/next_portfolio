import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const lightFont = css`
  font-weight: 200;
`;

export const H1 = styled("h1")``;
export const H2 = styled("h2")``;
export const H3 = styled("h3")`
  ${({ light }) => light && lightFont};
`;
export const H4 = styled("h4")``;
export const H5 = styled("h5")``;
export const P = styled("p")``;
