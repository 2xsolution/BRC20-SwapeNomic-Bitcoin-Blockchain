import styled from "styled-components";

export const LiquidityDetailsComponentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px 0px 5px;
  flex-direction: column;

  & #outerDiv {
    width: 50%;
    border-radius: 10px;
    padding: 15px;
    align-items: start;
    justify-content: start;
    display: flex;
    flex-direction: column;
  }
  & .detailsRowDiv {
    display: flex;
    width: 100%;
    margin: 7px 0px 7px 0px;
    flex-direction: row;
    justify-content: space-between;
  }
  & .detailsRowDiv #ratesDiv {
    display: flex;
    margin: 7px 0px 7px 0px;
    flex-direction: column;
    align-items: flex-end;
  }
  & h4,
  h6 {
    margin: 0px;
    font-size: 13px;
  }
  & span {
    font-size: 13px;
    color: ${(props) => props.theme.colors.menuButtonColor};
  }
  & #spacer {
    padding: 10px;
  }

  & #amountField {
    margin: 5px 0px 10px 0px;
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
