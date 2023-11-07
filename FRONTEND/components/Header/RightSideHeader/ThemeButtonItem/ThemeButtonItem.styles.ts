import styled from "styled-components";

export const ThemeButtonItemConatiner = styled.a`
  cursor: pointer;
  padding: 0px 10px 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.buttonsBGColor};
  &:hover {
    background-color: ${(props) => props.theme.colors.menuButtonBGColor};
  }
`;
