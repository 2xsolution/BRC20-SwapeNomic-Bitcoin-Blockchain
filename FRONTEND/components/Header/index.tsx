import { Menu, ChevronLeft } from "@styled-icons/material";
import { HeaderContainer } from "./Header.styles";
import LeftSideHeader from "./LeftSideHeader";
import { LeftSideHeaderIcons } from "../../constants/leftSideMenuHeaderItems";
import RightSideHeader from "./RightSideHeader";

type HeaderProps = {
  isOpened: boolean;
  toggleDrawer: () => void;
};

export default function Header({ isOpened, toggleDrawer }: HeaderProps) {
  return (
    <HeaderContainer>
      {/* <IconContainer onClick={toggleDrawer}>
        {isOpened ? <ChevronLeft /> : <Menu />}
      </IconContainer> */}
      {/* <TitleContainer>Header Will Go Here</TitleContainer> */}
      <LeftSideHeader items={LeftSideHeaderIcons}></LeftSideHeader>
      <RightSideHeader items={LeftSideHeaderIcons}></RightSideHeader>
    </HeaderContainer>
  );
}
