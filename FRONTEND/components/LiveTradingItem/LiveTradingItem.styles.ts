import styled from "styled-components";

export const LiveTradingItemContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 10px;
  bottom: 0;
  padding: 10px;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.colors.menuButtonBGColor};
  & h6 {
    color: ${(props) => props.theme.colors.textLight};
    text-align: left;
  }
`;
