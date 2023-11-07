import styled from "styled-components";

export const MenuItemContainer = styled.a<{ depth: number }>`
  display: flex;
  flex-direction: row;
  padding: 7px 15px 7px 15px;
  margin: 10px 0px 10px 0px;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.menuButtonColor};
  & span {
    margin-left: 10px;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.menuButtonBGColor};
    color: ${(props) => props.theme.colors.textLight};
    opacity: 0.8;
    cursor: pointer;
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${({ depth }) => `${depth}rem`};
  }

  &.selected {
    background-color: ${(props) => props.theme.colors.menuButtonBGColor};
    color: ${(props) => props.theme.colors.primaryColorOne};
  }
`;
