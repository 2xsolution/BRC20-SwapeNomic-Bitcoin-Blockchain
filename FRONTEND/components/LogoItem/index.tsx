import Link from "next/link";
import { useRouter } from "next/router";
import { MenuItem as MenuItemType } from "../../constants/menu-items";
import { LogoItemContainer } from "./LogoItem.styles";
import MenuItemsList from "../MenuItemsList";
import ExpandIcon from "../ExpandIcon";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../public/icons/logo.svg";
export default function LogoItem() {
  return (
    <>
      <LogoItemContainer>
        {/* <Image height={48} width={48} src={logo}></Image> */}
        <div>
          <Logo />
        </div>
        <h5>SWAPNomic</h5>
      </LogoItemContainer>
    </>
  );
}
