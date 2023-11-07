import styled from "styled-components";

export const TopFarmCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 10px 0px 10px 0px;
  justify-content: center;
  width: 100%;
  & h5 {
    color: ${(props) => props.theme.colors.textLight};
    margin: 0px;
  }
  & h4 {
    color: ${(props) => props.theme.colors.textLight};
    margin: 0px;
    display: flex;
  }
  & h6 {
    color: ${(props) => props.theme.colors.textLight};
    margin: 0px;
    display: flex;
  }
  & h1 {
    color: ${(props) => props.theme.colors.textLight};

    display: flex;
    line-height: 10px;
    padding: 10px 0;
  }
  & .topDiv {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .bottomDiv {
    flex-direction: row;
    display: flex;
    align-items: end;
    justify-content: end;
    margin: 20px 0px 20px 0px;
  }
  & #amountField {
    color: ${(props) => props.theme.colors.primaryColorOne};
  }
  & #liquidityField {
    color: ${(props) => props.theme.colors.liquidityTextColor};
    font-size: 12px;
    margin-top: 3px;
  }
  & #topContainer {
    display: flex;
    width: 100%;
    flex-direction: row;
    font-size: 12px;
    margin-top: 3px;
    justify-content: space-between;
  }
  & #iconContainer {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    margin-top: 3px;
  }
  & #toIcon {
    margin-left: -20px;
  }
  & #hotLabel {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
  }
  & #hotLabel span {
    align-items: right;
    color: #f15223;
    justify-content: center;
    border-radius: 15px;
    padding: 5px 7px 5px 7px;
    font-size: 10px;
    background-color: rgb(241, 82, 35, 0.2);
  }
`;
