import styled from "styled-components";

export const ExchangeDetailsComponentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 5px 0px 5px;
  & #outerDiv {
    width: 50%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.main};
    padding: 20px;
  }
  & #innerDiv {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
  }
  & #spacer {
    padding: 8px;
  }
  & h5,
  h4 {
    margin: 5px 0px 5px 0px;
    color: ${(props) => props.theme.colors.textLight};
  }
  & span {
    font-size: 12px;
    color: ${(props) => props.theme.colors.menuButtonColor};
  }
`;
