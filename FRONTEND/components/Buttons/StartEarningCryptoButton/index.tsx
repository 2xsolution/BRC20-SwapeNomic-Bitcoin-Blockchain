import { Menu, ChevronLeft } from "@styled-icons/material";
import { StartEarningCryptoButtonConatiner } from "./StartEarningCryptoButton.styles";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
import Link from "next/link";

type CommonButtonData = {
  type: CommonButtonTypes;
  title: string;
  url: string;
};
export default function StartEarningCryptoButtonItem({
  type,
  title,
  url,
}: CommonButtonData) {
  return (
    <StartEarningCryptoButtonConatiner btntype={type}>
      <Link href={url}>{title}</Link>
    </StartEarningCryptoButtonConatiner>
  );
}
