import React from "react";
import { JungleStartingCardContainer } from "./JungleStartingCard.styles";
import BalanceVisibleCard from "../../../../public/icons/balance_visible_icon.svg";
import CommonButtonItem from "../../../Buttons/CommonButton";
import { CommonButtonTypes } from "../../../../constants/CommonButtonTypes";
import JungleandFarmCardButtonItem from "../../../Buttons/JungleandFarmCardButton";
type BalanceCardData = {
  amount: string;
  stack: string;
  earn: string;
};
export default function JungleStartingCardItem(jungledata: BalanceCardData) {
  return (
    <>
      <JungleStartingCardContainer>
        {/* <Image height={48} width={48} src={logo}></Image> */}

        <h5 id="balanceHeading">
          Stack {jungledata.stack} to Earn {jungledata.earn}
        </h5>

        <h1 id="amountField">{jungledata.amount}</h1>
        <span></span>
        <JungleandFarmCardButtonItem
          title="Start Jungle"
          url="/start_jungle"
          type={CommonButtonTypes.simple}
        ></JungleandFarmCardButtonItem>
      </JungleStartingCardContainer>
    </>
  );
}
