import { Menu, ChevronLeft } from "@styled-icons/material";
import { HarvestCompoundButtonConatiner } from "./HarvestCompoundButton.styles";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
import Link from "next/link";

type CommonButtonData = {
  type: CommonButtonTypes;
  title: string;
  url: string;
};
export default function HarvestCompoundButtonItem({
  type,
  title,
  url,
}: CommonButtonData) {
  return (
    <HarvestCompoundButtonConatiner btntype={type}>
      <Link href={url}>{title}</Link>
    </HarvestCompoundButtonConatiner>
  );
}
