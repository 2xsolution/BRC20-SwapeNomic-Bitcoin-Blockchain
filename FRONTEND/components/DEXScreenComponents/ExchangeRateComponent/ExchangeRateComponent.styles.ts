import styled from "styled-components";

export const ExchangeRateComponentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px 0px 5px;
  & span {
    width: 100%;
    color: ${(props) => props.theme.colors.menuButtonColor};
  }
`;
