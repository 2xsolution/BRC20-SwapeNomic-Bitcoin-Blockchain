import styled from "styled-components";

export const RemoveLiquidityPercentageComponentContainer = styled.div`
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
  & h2 {
    margin: 0px;
  }
  & #bottomDiv {
    margin-top: 5px;
  }
  & #spacer {
    padding: 5px;
  }

  & #percentLabel span {
    align-items: right;
    justify-content: center;
    border-radius: 15px;
    padding: 5.5px 5px 3px 5px;
    font-size: 13px;
    cursor: pointer;
    border: 0.5px solid ${(props) => props.theme.colors.menuButtonBGColor};
    background-color: rgba(31, 31, 31, 0.9);
  }
  & #selectedPercentLabel span {
    align-items: right;
    color: #f15223;
    justify-content: center;
    border-radius: 15px;
    padding: 5.5px 5px 3px 5px;
    font-size: 13px;
    cursor: pointer;
    background-color: rgba(241, 82, 35, 0.2);
    border: 0.5px solid rgb(241, 82, 35);
  }
  & #percentField {
    margin: 0px;
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
`;
