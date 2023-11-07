import { Menu, ChevronLeft } from "@styled-icons/material";
import { JungleandFarmCardButtonItemConatiner } from "./JungleandFarmCardButton.styles";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
import Link from "next/link";
import { theme } from "../../../styles/theme";

type CommonButtonData = {
  type: CommonButtonTypes;
  title: string;
  url: string;
};
export default function JungleandFarmCardButtonItem({
  type,
  title,
  url,
}: CommonButtonData) {
  return (
    <JungleandFarmCardButtonItemConatiner
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
      <Link href={url}>{title}</Link>
    </JungleandFarmCardButtonItemConatiner>
  );
}
