import React from "react";
import { PoolCardContainer } from "./PoolCard.styles";
import BalanceVisibleCard from "../../../../public/icons/balance_visible_icon.svg";
import CommonButtonItem from "../../Buttons/CommonButton";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
import JungleandFarmCardButtonItem from "../../Buttons/JungleandFarmCardButton";
import HarvestCompoundButtonItem from "../../Buttons/HarvestCompoundButton";
import Link from "next/link";
import SwapButtonItem from "../../Buttons/SwapButton";
type BalanceCardData = {
  coin: string;
  aprpercent: string;
  Icon: any;
  isDiposited: boolean;
  amount: string;
  pageUpdator: any;
};
export default function PoolCardItem(farmdata: BalanceCardData) {
  return (
    <>
      <PoolCardContainer>
        {/* <Image height={48} width={48} src={logo}></Image> */}
        <div id="topContainer">
          <div id="iconContainer">
            <div id="toIcon">
              <farmdata.Icon />
            </div>
          </div>
          <div id="coinNameDiv">
            <div id="hotLabel">
              <span>X10</span>
            </div>
            <span id="spacer"></span>
            <h4 id="balanceHeading">{farmdata.coin} Pool</h4>
          </div>
        </div>
        <div id="outerDiv">
          <div className="detailsRowDiv">
            <span>APR</span>
            <h6>204.80%</h6>
          </div>
          <div className="detailsRowDiv">
            <span>Earn</span>
            <h6>AM</h6>
          </div>
          <div className="detailsRowDiv">
            <span>Deposit Fee</span>
            <h6>0 %</h6>
          </div>
          <div className="detailsRowDiv">
            <span>Harvest Lookup</span>
            <h6>{"2 Hour(s)"}</h6>
          </div>
        </div>

        <div id="EarnedStackedField">
          <h4>{"AM "}</h4>
          <span id="spacer"></span>
          <h4 id="gradientText">{" Earned"}</h4>
        </div>
        <input
          type="number"
          value={farmdata.amount}
          placeholder="0"
          disabled={false}
        />
        <div className="detailsRowDiv">
          <HarvestCompoundButtonItem
            url={"/"}
            title={"Harvest"}
            type={CommonButtonTypes.simple}
          />
          <span id="spacer"></span>
          <HarvestCompoundButtonItem
            url={"/"}
            title={"Compound"}
            type={CommonButtonTypes.simple}
          />
        </div>
        <div id="EarnedStackedField">
          <h4>{"AM "}</h4>
          <span id="spacer"></span>
          <h4 id="gradientText">{" Stacked"}</h4>
        </div>
        <span></span>
        {!farmdata.isDiposited && (
          <SwapButtonItem
            action={() => {
              farmdata.pageUpdator(2);
            }}
            title={"Approve"}
            type={CommonButtonTypes.gradient}
          />
        )}
        {farmdata.isDiposited && (
          <div id="amountPlusMinusDiv">
            <div id="amountDivPlusMinus">
              <h2>220</h2>
              <span>=$2203</span>
            </div>
            <div id="buttonsDivPlusMinus">
              <div id="amountMinusBtn">
                {" "}
                <h1>-</h1>
              </div>
              <div id="amountPlusBtn">
                {" "}
                <h1>+</h1>
              </div>
            </div>
          </div>
        )}
        <div id="importButton">
          <Link href="/">
            <h6>Details</h6>
          </Link>
        </div>
      </PoolCardContainer>
    </>
  );
}
