import styled from "styled-components";

type SidebarContainerProps = {
  isOpened: boolean;
};
export const SidebarContainer = styled.aside<SidebarContainerProps>`
  background: ${(props) => props.theme.colors.greyBg};
  width: ${(props) => (props.isOpened ? "200px" : "0vw")};
  transition: width 0.5s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0px 15px 5px 15px;
  position: relative;
`;
