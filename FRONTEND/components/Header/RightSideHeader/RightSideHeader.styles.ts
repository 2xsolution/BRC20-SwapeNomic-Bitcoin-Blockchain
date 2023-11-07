import styled from "styled-components";

export const RightSideHeaderConatiner = styled.div`
  display: flex;
  & .divider {
    border-left: 2px solid ${(props) => props.theme.colors.buttonsBGColor};
    margin: 0px;
  }
  & span {
    margin: 3px;
  }
`;
