import { SidebarContainer } from "./Sidebar.styles";
import { MENU_ITEMS } from "../../constants/menu-items";
import MenuItemsList from "../MenuItemsList";
import LogoItem from "../LogoItem";
import LiveTradingItem from "../LiveTradingItem";

type SidebarProps = {
  isOpened: boolean;
};
export default function Sidebar({ isOpened }: SidebarProps) {
  return (
    <SidebarContainer isOpened={isOpened}>
      <LogoItem></LogoItem>
      <MenuItemsList options={MENU_ITEMS} />
      <LiveTradingItem></LiveTradingItem>
    </SidebarContainer>
  );
}
