import React from "react";
import { TopFarmCardContainer } from "./TopFarmCard.styles";
import BalanceVisibleCard from "../../../../public/icons/balance_visible_icon.svg";
import CommonButtonItem from "../../../Buttons/CommonButton";
import { CommonButtonTypes } from "../../../../constants/CommonButtonTypes";
import JungleandFarmCardButtonItem from "../../../Buttons/JungleandFarmCardButton";
type BalanceCardData = {
  liquidity: string;
  from: string;
  to: string;
  aprpercent: string;
  FromIcon: any;
  ToIcon: any;
};
export default function TopFarmCardItem(farmdata: BalanceCardData) {
  return (
    <>
      <TopFarmCardContainer>
        {/* <Image height={48} width={48} src={logo}></Image> */}
        <div id="topContainer">
          <div id="iconContainer">
            <farmdata.FromIcon />
            <div id="toIcon">
              <farmdata.ToIcon />
            </div>
          </div>
          <div id="hotLabel">
            <span>HOT</span>
          </div>
        </div>
        <h4 id="balanceHeading">
          {farmdata.from} - {farmdata.to}
        </h4>
        <span id="liquidityField"> Liquidity {farmdata.liquidity}</span>
        <h3 id="amountField">{farmdata.aprpercent}</h3>
        <span></span>
        <JungleandFarmCardButtonItem
          title="Farm"
          url="/start_jungle"
          type={CommonButtonTypes.gradient}
        ></JungleandFarmCardButtonItem>
      </TopFarmCardContainer>
    </>
  );
}
