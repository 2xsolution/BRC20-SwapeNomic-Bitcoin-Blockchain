import styled from "styled-components";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";

export const HarvestCompoundButtonConatiner = styled.a<{
  btntype: CommonButtonTypes;
}>`
  cursor: pointer;
  padding: 0px 10px 0px 10px;
  display: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 49%;
  font-size: 14px;
  background-color: ${(props) => props.theme.colors.buttonsBGColor};
  &:hover {
    background-color: ${(props) => props.theme.colors.menuButtonBGColor};
  }
`;
