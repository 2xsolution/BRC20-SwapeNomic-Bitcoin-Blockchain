import styled from "styled-components";

export const JungleandFarmCardButtonItemConatiner = styled.a<{
  bgcolor: String;
  fontcolor: String;
}>`
  cursor: pointer;
  padding: 0px 10px 0px 10px;
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: ${({ fontcolor }) => `${fontcolor}`};
  border-radius: 10px;
  ${({ bgcolor }) => `${bgcolor}`}

  &:hover {
    background-color: ${(props) => props.theme.colors.menuButtonBGColor};
  }
`;
