import styled from "styled-components";

export const ExchangeSuccessModalComponentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px 0px 5px;
  width: 100%;
  height: 90vh;
  background: rgba(255, 255, 255, 0.2);
  & div {
    width: 20%;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.main};
    padding: 20px;
  }
  & h4 {
    color: ${(props) => props.theme.colors.textLight};
  }
  & span {
    margin-bottom: 10px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primaryColorOne};
  }
`;
