import styled from "styled-components";

export const PoolCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 10px 0px 10px 0px;
  justify-content: center;
  width: 100%;
  & h5 {
    color: ${(props) => props.theme.colors.textLight};
    margin: 0px;
  }
  & h4 {
    color: ${(props) => props.theme.colors.textLight};
    margin: 0px;
    display: flex;
  }
  & h6 {
    color: ${(props) => props.theme.colors.textLight};
    margin: 0px;
    display: flex;
  }
  & h1 {
    color: ${(props) => props.theme.colors.textLight};

    display: flex;
    line-height: 10px;
    padding: 10px 0;
  }
  & .topDiv {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .bottomDiv {
    flex-direction: row;
    display: flex;
    align-items: end;
    justify-content: end;
    margin: 20px 0px 20px 0px;
  }
  & #amountField {
    color: ${(props) => props.theme.colors.primaryColorOne};
  }
  & #liquidityField {
    color: ${(props) => props.theme.colors.liquidityTextColor};
    font-size: 12px;
    margin-top: 3px;
  }
  & #topContainer {
    display: flex;
    width: 100%;
    flex-direction: row;
    font-size: 12px;
    margin-top: 3px;
    justify-content: space-between;
  }
  & #iconContainer {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    margin-top: 3px;
  }
  & #toIcon {
    margin-left: 0px;
  }
  & #hotLabel {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
  }
  & #hotLabel span {
    align-items: right;
    color: #f15223;
    justify-content: center;
    border-radius: 15px;
    padding: 5px 7px 5px 7px;
    font-size: 10px;
    background-color: rgb(241, 82, 35, 0.2);
  }
  & #coinNameDiv {
    display: flex;
    flex-direction: row;
    jusify-content: center;
    align-items: center;
  }
  & #spacer {
    padding: 5px;
  }
  & #outerDiv {
    width: 100%;
    border-radius: 10px;
    margin-top: 20px;
    align-items: start;
    justify-content: start;
    display: flex;
    flex-direction: column;
  }
  & .detailsRowDiv {
    display: flex;
    width: 100%;
    margin: 5px 0px 5px 0px;
    flex-direction: row;
    justify-content: space-between;
  }
  & .detailsRowDiv #ratesDiv {
    display: flex;
    margin: 5px 0px 5px 0px;
    flex-direction: column;
    align-items: flex-end;
  }
  & h6 {
    margin: 0px;
    font-size: 13px;
  }
  & h4,
  h5,
  h1,
  h2 {
    margin: 0px;
  }
  & span {
    font-size: 13px;
    color: ${(props) => props.theme.colors.menuButtonColor};
  }

  & #gradientText {
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primaryGradient.startingColor},
      ${(props) => props.theme.colors.primaryGradient.endColor}
    );
    background-size: 100%;
    background-clip: text;
    text-fill-color: transparent;

    /* Set the background size and repeat properties. */
    background-size: 100%;
    background-repeat: repeat;

    /* Use the text as a mask for the background. */
    /* This will show the gradient as a text color rather than element bg. */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
  & #EarnedStackedField {
    display: flex;
    flex-direction: row;
    margin: 10px 0px 10px 0px;
    font-size: 15px;
  }
  & input {
    font-family: inherit;
    width: 100%;
    margin: 0px 0px 10px 0px;
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
  & #importButton {
    width: 100%;
    margin: 20px 0px 20px 0px;
    justify-content: center;
    display: flex;
  }
  & #importButton h6 {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primaryColorOne};
  }
  & #importButton h6 {
    cursor: pointer;
    color: ${(props) => props.theme.colors.primaryColorOne};
  }
  & #amountPlusMinusDiv {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
  & #buttonsDivPlusMinus {
    display: flex;
    flex-direction: row;
  }
  & #amountMinusBtn,
  #amountPlusBtn {
    padding: 0px 15px 5px 15px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  & #amountPlusBtn {
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primaryGradient.startingColor},
      ${(props) => props.theme.colors.primaryGradient.endColor}
    );
  }
  & #amountMinusBtn {
    margin-right: 10px;
    color: ${(props) => props.theme.colors.primaryColorOne};
    border: 2px solid ${(props) => props.theme.colors.primaryColorOne};
  }
  & #amountMinusBtn h1 {
    padding: 0px;
    color: ${(props) => props.theme.colors.primaryColorOne};
  }
`;
