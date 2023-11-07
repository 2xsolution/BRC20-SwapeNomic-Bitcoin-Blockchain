import styled from "styled-components";

export const AddLiquidityComponentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px 0px 5px;
  margin: 15px 0px 15px 0px;
  flex-direction: row;
  & .innerCardContainer {
    background-color: ${(props) => props.theme.colors.greyBg};
    border-radius: 5px;
    width: 100%;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    justify-content: center;
    margin: 20px 0px 20px 0px;
  }
  & .cardContainer {
    width: 50%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    color: ${(props) => props.theme.colors.primaryColorOne};
    border: none;
    outline: none;
  }
  & select option {
    width: 100%;
    color: ${(props) => props.theme.colors.textLight};
    background-color: ${(props) => props.theme.colors.greyBg};
  }
  & span {
    color: ${(props) => props.theme.colors.menuButtonColor};
  }

  & h3 {
    margin: 0px;
  }
  & h6 {
  }
  & #bottomDiv {
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }
`;
