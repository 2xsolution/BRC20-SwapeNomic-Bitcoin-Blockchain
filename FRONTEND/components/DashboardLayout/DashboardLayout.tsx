import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  Container,
  Content,
  HeaderWithContent,
  PageContainer,
} from "./DashboardLayout.styles";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpened, setOpened] = useState(true);
  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  return (
    <Container>
      <Content>
        <Sidebar isOpened={isOpened} />

        <HeaderWithContent>
          <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
          <PageContainer>{children}</PageContainer>
        </HeaderWithContent>
      </Content>
      {/* <Footer /> */}
    </Container>
  );
}
