import styled from "styled-components";

export const LiveTradingEntryContainer = styled.div`
  display: flex;
  flex-direction: row;
  bottom: 0;

  align-items: start;
  margin: 10px 0px 10px 0px;
  justify-content: space-between;
  & h6 {
    color: ${(props) => props.theme.colors.textLight};
  }
  & div {
    display: flex;
    flex-direction: column;
  }
  & .leftDiv {
    align-items: flex-start;
  }
  & .rightDiv {
    align-items: flex-end;
  }
  & #timeHeading {
    color: ${(props) => props.theme.colors.menuButtonColor};
  }
  & #amountHeading {
    color: ${(props) => props.theme.colors.greenColor};
  }
`;
