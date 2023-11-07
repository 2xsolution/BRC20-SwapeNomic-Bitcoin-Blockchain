import Link from "next/link";
import { useRouter } from "next/router";
import { MenuItem as MenuItemType } from "../../constants/menu-items";
import { MenuItemContainer } from "./MenuItem.styles";
import MenuItemsList from "../MenuItemsList";
import ExpandIcon from "../ExpandIcon";
import { useState } from "react";
import Image from "next/image";
import { theme } from "../../styles/theme";

type MenuItemProps = {
  menuItem: MenuItemType;
};

export default function MenuItem({
  menuItem: {
    name,
    icon: Icon,
    iconSelected: IconSelected,
    url,
    depth,
    subItems,
  },
}: MenuItemProps) {
  const [isExpanded, toggleExpanded] = useState(false);

  const router = useRouter();
  console.log(router);
  //const selected = router.asPath.includes(url);
  const brokenPath = router.asPath.split("/");
  const string_to_match =
    brokenPath.length > 2 ? "/" + brokenPath[1] : router.asPath;

  const selected: boolean = string_to_match == url;
  console.log(selected, brokenPath, string_to_match);
  const isNested = subItems && subItems?.length > 0;

  const onClick = () => {
    toggleExpanded((prev) => !prev);
  };

  return (
    <>
      <MenuItemContainer className={selected ? "selected" : ""} depth={depth}>
        <Link href={url} passHref>
          <div className="menu-item">
            {/* <Image height={24} width={24} src={Icon}></Image> */}
            {!selected && <Icon />}
            {selected && <IconSelected />}

            <span>{name}</span>
          </div>
        </Link>
        {isNested ? (
          <ExpandIcon isExpanded={isExpanded} handleClick={onClick} />
        ) : null}
      </MenuItemContainer>
      {isExpanded && isNested ? <MenuItemsList options={subItems} /> : null}
    </>
  );
}
