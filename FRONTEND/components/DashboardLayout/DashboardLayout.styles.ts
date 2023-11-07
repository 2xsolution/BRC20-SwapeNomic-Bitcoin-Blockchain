import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.textLight};
  background-color: ${(props) => props.theme.colors.main};
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;
export const HeaderWithContent = styled.div`
  display: block;
  flex: 1;
`;

export const PageContainer = styled.div`
  padding: 10px;
  width: 100%;
`;
