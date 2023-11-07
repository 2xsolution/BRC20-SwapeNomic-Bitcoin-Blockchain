import styled from "styled-components";

export const SwitchButtonsComponentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15vh 5px 0px 5px;

  & .buttonsContainer {
    background-color: ${(props) => props.theme.colors.greyBg};
    border-radius: 5px;
    width: 30%;
    flex-direction: row;
    display: flex;
  }
  & .button {
    width: 50%;
    align-items: center;
    border-radius: 5px;
    padding: 5px 0px 5px 0px;
    display: flex;
    cursor: pointer;
  }
  & .selectedButton {
    background-color: white;
    color: black;
    width: 50%;
    align-items: center;
    color: ${(props) => props.theme.colors.textDark};
  }
  & span {
    width: 100%;
  }
`;
