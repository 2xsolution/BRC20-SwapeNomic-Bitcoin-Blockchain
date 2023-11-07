import styled from "styled-components";

export const CardItemContainer = styled.div`
  display: flex;

  padding: 7px 15px 7px 15px;
  margin: 10px 0px 10px 0px;
  align-items: center;
  justify-content: space-between;
  width: 32%;
  height: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.cardsBGColor};
`;
