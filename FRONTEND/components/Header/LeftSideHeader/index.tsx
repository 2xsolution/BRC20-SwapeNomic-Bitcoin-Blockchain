import { Menu, ChevronLeft } from "@styled-icons/material";
import { LeftSideHeaderConatiner } from "./LeftSideHeader.styles";
import { LeftSideHeaderIconItem } from "../../../constants/leftSideMenuHeaderItems";
import IconicButtonItem from "../IconicButtonItem";
type LeftSideItemsList = {
  items: LeftSideHeaderIconItem[];
};
export default function LeftSideHeader({ items }: LeftSideItemsList) {
  return (
    <LeftSideHeaderConatiner>
      {/* <IconContainer onClick={toggleDrawer}>
        {isOpened ? <ChevronLeft /> : <Menu />}
      </IconContainer> */}
      {/* <TitleContainer>Header Will Go Here</TitleContainer> */}
      {items.map((item) => {
        console.log(items);
        return (
          <IconicButtonItem icon={item.icon} url={item.url}></IconicButtonItem>
        );
      })}
    </LeftSideHeaderConatiner>
  );
}
