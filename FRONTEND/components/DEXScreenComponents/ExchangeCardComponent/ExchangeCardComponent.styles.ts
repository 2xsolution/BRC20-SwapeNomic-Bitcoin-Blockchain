import styled from "styled-components";

export const ExchangeCardComponentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px 0px 5px;
  margin: 15px 0px 15px 0px;
  flex-direction: row;
  width: 100%;
  & .cardContainer {
    background-color: ${(props) => props.theme.colors.greyBg};
    border-radius: 5px;
    width: 50%;
    flex-direction: column;
    padding: 10px;
  }
  & div {
    display: flex;
    justify-content: space-between;
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
  & input {
    font-family: inherit;
  }
  & input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & input[type="number"] {
    -moz-appearance: textfield;
  }
  & select,
  input {
    font-family: inherit;
    background-color: inherit;
    font-size: inherit;
    color: ${(props) => props.theme.colors.textLight};
    border: none;
    outline: none;
  }
  & select option {
    background-color: ${(props) => props.theme.colors.greyBg};
  }
  & span {
    color: ${(props) => props.theme.colors.menuButtonColor};
    font-size: 13.5px;
  }
  & #bottomDiv {
    margin-top: 5px;
  }
`;
