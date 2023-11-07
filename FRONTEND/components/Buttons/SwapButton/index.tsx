import { Menu, ChevronLeft } from "@styled-icons/material";
import { SwapButtonItemConatiner } from "./SwapButton.styles";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
import Link from "next/link";
import { theme } from "../../../styles/theme";

type CommonButtonData = {
  type: CommonButtonTypes;
  title: String;
  action: any;
};
export default function SwapButtonItem({
  type,
  title,
  action,
}: CommonButtonData) {
  return (
    <SwapButtonItemConatiner
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
    </SwapButtonItemConatiner>
  );
}
