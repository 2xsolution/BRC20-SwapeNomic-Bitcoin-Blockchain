import styled from "styled-components";

export const LogoItemContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & h5 {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 700;
  }
  & Image {
    height: 48px;
    width: 48px;
  }
`;
