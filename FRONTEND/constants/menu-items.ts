import React from "react";
import home_icon from "../public/icons/home_icon.svg";
import wallet_icon from "../public/icons/wallet_icon.svg";
import dex_icon from "../public/icons/dex_icon.svg";
import pool_icon from "../public/icons/pool_icon.svg";
import farm_icon from "../public/icons/farm_icon.svg";
import jungle_icon from "../public/icons/jungle_icon.svg";
import ipo_icon from "../public/icons/ipo_icon.svg";
import home_icon_selected from "../public/icons/home_icon_selected.svg";
import wallet_icon_selected from "../public/icons/wallet_icon_selected.svg";
import dex_icon_selected from "../public/icons/dex_icon_selected.svg";
import pool_icon_selected from "../public/icons/pool_icon_selected.svg";
import farm_icon_selected from "../public/icons/farm_icon_selected.svg";
import jungle_icon_selected from "../public/icons/jungle_icon_selected.svg";
import ipo_icon_selected from "../public/icons/ipo_icon_selected.svg";

// const MENU_OPTIONS: MenuOption[] = [
//   {
//     name: "Dashboard",
//     icon: Dashboard,
//     url: "/",
//   },
//   {
//     name: "Orders",
//     icon: ShoppingCart,
//     url: "/orders",
//     subItems: [
//       {
//         name: "New",
//         icon: AddShoppingCart,
//         url: "/new-orders",
//       },
//       {
//         name: "Completed",
//         icon: Done,
//         url: "/completed-orders",
//       },
//     ],
//   },
//   {
//     name: "Customers",
//     icon: People,
//     url: "/customers",
//     subItems: [
//       {
//         name: "Corporate",
//         icon: Business,
//         url: "/corporate",
//       },
//       {
//         name: "SMB",
//         icon: HomeWork,
//         url: "/smb",
//         subItems: [
//           {
//             name: "Retail",
//             icon: Person,
//             url: "/retail",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Inventory",
//     icon: AttachMoney,
//     url: "/inventory",
//   },
// ];
const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Home",
    icon: home_icon,
    iconSelected: home_icon_selected,
    url: "/",
  },
  {
    name: "Wallet",
    icon: wallet_icon,
    iconSelected: wallet_icon_selected,
    url: "/wallet",
  },
  {
    name: "DEX",
    icon: dex_icon,
    iconSelected: dex_icon_selected,
    url: "/dex",
  },
  {
    name: "Pool",
    icon: pool_icon,
    iconSelected: pool_icon_selected,
    url: "/pool",
  },
  {
    name: "Farm",
    icon: farm_icon,
    iconSelected: farm_icon_selected,
    url: "/farm",
  },
  {
    name: "Jungle",
    icon: jungle_icon,
    iconSelected: jungle_icon_selected,
    url: "/jungle",
  },
  {
    name: "IPO",
    icon: ipo_icon,
    iconSelected: ipo_icon_selected,
    url: "/ipo",
  },
];
export type MenuItem = {
  name: string;
  icon: any;
  iconSelected: any;
  url: string;
  id: string;
  depth: number;
  subItems?: MenuItem[];
};

type MenuOption = {
  name: string;
  icon: React.ComponentType;
  iconSelected: React.ComponentType;
  url: string;
  subItems?: MenuOption[];
};

function makeMenuLevel(options: MenuOption[], depth = 0): MenuItem[] {
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);
