import styled from "styled-components";

export const LiveTradingItemWrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  & h6 {
    color: ${(props) => props.theme.colors.textLight};
    margin: 1px;
  }
`;
