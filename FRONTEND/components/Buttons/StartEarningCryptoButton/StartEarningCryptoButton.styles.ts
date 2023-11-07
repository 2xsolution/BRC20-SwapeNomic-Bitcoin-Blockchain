import styled from "styled-components";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";

export const StartEarningCryptoButtonConatiner = styled.a<{
  btntype: CommonButtonTypes;
}>`
  cursor: pointer;
  padding: 0px 10px 0px 10px;
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 12px;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primaryGradient.startingColor},
    ${(props) => props.theme.colors.primaryGradient.endColor}
  );
  &:hover {
    background-color: ${(props) => props.theme.colors.menuButtonBGColor};
  }
`;
