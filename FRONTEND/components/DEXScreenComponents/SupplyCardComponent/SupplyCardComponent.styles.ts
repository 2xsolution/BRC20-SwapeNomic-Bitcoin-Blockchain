import styled from "styled-components";

export const SupplyCardComponentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 15px 0px 15px 0px;
  flex-direction: row;
  width: 100%;
  & .cardContainer {
    background-color: ${(props) => props.theme.colors.greyBg};
    border-radius: 5px;
    width: 100%;
    flex-direction: column;
    padding: 10px;
    display: flex;
  }
  & div {
    display: flex;
    justify-content: space-between;
  }
  & .button {
    align-items: center;
    border-radius: 5px;
    padding: 5px 0px 5px 0px;
    display: flex;
    cursor: pointer;
  }
  & .selectedButton {
    background-color: white;
    color: black;

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
  & #hotLabel {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    margin-right: 2px;
  }
  & #hotLabel span {
    align-items: right;
    color: #f15223;
    justify-content: center;
    border-radius: 5px;
    padding: 3px 5px 3px 5px;
    font-size: 10px;
    border: 0.5px solid rgb(241, 82, 35);
  }
`;
