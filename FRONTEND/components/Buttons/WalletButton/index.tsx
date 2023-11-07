import { Menu, ChevronLeft } from "@styled-icons/material";
import { WalletButtonItemConatiner } from "./WalletButton.styles";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
import Link from "next/link";
import { theme } from "../../../styles/theme";

type CommonButtonData = {
  type: CommonButtonTypes;
  title: String;
  action: any;
};
export default function WalletButtonItem({
  type,
  title,
  action,
}: CommonButtonData) {
  return (
    <WalletButtonItemConatiner
      bgcolor={
        type == CommonButtonTypes.gradient
          ? `background-image: linear-gradient(
        to right,
        ${theme.colors.primaryGradient.startingColor},
        ${theme.colors.primaryGradient.endColor}
      );`
          : `background-color: ${theme.colors.buttonsBGColor};`
      }
      fontcolor={
        type == CommonButtonTypes.gradient
          ? theme.colors.textLight
          : theme.colors.primaryColorOne
      }
    >
      <div onClick={action}>{title}</div>
    </WalletButtonItemConatiner>
  );
}
