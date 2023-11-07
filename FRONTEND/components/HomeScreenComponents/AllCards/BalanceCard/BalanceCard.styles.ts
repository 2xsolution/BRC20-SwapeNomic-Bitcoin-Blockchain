import styled from "styled-components";

export const BalanceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 10px 0px 10px 0px;
  justify-content: center;
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
    margin: 0px;
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
  & span {
    margin: 3px;
  }
  & #timeHeading {
    color: ${(props) => props.theme.colors.menuButtonColor};
  }
  & #amountHeading {
    color: ${(props) => props.theme.colors.greenColor};
  }
  & #amountField {
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
