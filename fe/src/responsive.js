import { css } from "styled-components";

export const moblie = (props) => {
  return css`
    @media screen and (max-width: 380px) {
      ${props}
    }
  `;
};
