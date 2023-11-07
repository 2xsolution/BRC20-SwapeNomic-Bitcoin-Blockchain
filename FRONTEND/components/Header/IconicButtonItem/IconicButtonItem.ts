import styled from "styled-components";

export const IconicButtonItemConatiner = styled.a`
  cursor: pointer;
  padding: 0px 4px 0px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) => props.theme.colors.menuButtonBGColor};
  }
`;
