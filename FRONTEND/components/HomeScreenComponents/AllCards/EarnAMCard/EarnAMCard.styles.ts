import styled from "styled-components";

export const EarnAMCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px 10px 0px;

  & h5 {
    color: ${(props) => props.theme.colors.textLight};
    margin: 0px;
  }
  & h4 {
    color: ${(props) => props.theme.colors.textLight};
    margin: 0px;
  }
  & h6 {
    color: ${(props) => props.theme.colors.textLight};
    margin: 0px;
    text-align: start;
  }

  & .firstDiv {
    flex-direction: column;
    width: 50%;
    align-items: flex-start;
    justify-content: space-evenly;
    display: flex;
  }
  & .secondDiv {
    flex-direction: column;
    width: 50%;
    align-items: flex-end;
    justify-content: center;
    display: flex;
  }
  & .secondInnerDiv {
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    padding: 20px;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.05);
  }
  & .secondMostInnerDiv {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: row;
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
