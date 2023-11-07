import { Menu, ChevronLeft } from "@styled-icons/material";
import { IconicButtonItemConatiner } from "./IconicButtonItem";
import Link from "next/link";
import { LeftSideHeaderIconItem } from "../../../constants/leftSideMenuHeaderItems";

export default function IconicButtonItem({
  icon: Icon,
  url,
}: LeftSideHeaderIconItem) {
  return (
    <IconicButtonItemConatiner>
      {/* <IconContainer onClick={toggleDrawer}>
        {isOpened ? <ChevronLeft /> : <Menu />}
      </IconContainer> */}
      {/* <TitleContainer>Header Will Go Here</TitleContainer> */}
      <Link href={url}>
        <Icon />
      </Link>
    </IconicButtonItemConatiner>
  );
}
