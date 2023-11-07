import { Menu, ChevronLeft } from "@styled-icons/material";
import { CommonButtonItemConatiner } from "./CommonButtonItem";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
import Link from "next/link";

type CommonButtonData = {
  type: CommonButtonTypes;
  title: string;
  url: string;
};
export default function CommonButtonItem({
  type,
  title,
  url,
}: CommonButtonData) {
  return (
    <CommonButtonItemConatiner btntype={type}>
      <Link href={url}>{title}</Link>
    </CommonButtonItemConatiner>
  );
}
