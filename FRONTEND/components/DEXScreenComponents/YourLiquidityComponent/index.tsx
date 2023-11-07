import Link from "next/link";
import { YourLiquidityComponentContainer } from "./YourLiquidityComponent.styles";
import { useRouter } from "next/router";
import SettingsIcon from "../../../public/icons/liquidity_settings_icon.svg";
import ClockIcon from "../../../public/icons/liquidity_clock_icon.svg";
import SwapButtonItem from "../../Buttons/SwapButton";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";

export default function YourLiquidityComponent(props: any) {
  return (
    <YourLiquidityComponentContainer>
      <div className="cardContainer">
        <div id="topDiv">
          <h3>Liquidity</h3>
          <div>
            <SettingsIcon />
            <span></span> <ClockIcon />
          </div>
        </div>
        <h5>Your Liquidity</h5>
        <div id="yourLiquidityContainer">
          <span>No Liquidity Found</span>
        </div>
        <div>
          <h6>Don't see a pool to join?</h6>{" "}
          <Link href="/">
            <h6 id="importButton">Import It</h6>
          </Link>
        </div>
        <h6>
          Or, if you staked your AM-LP tokens in a farm, unstake them to see
          them here.
        </h6>
        <div id="bottomDiv">
          <span>
            <h6>Add liquidity to receive AM-LP tokens</h6>
          </span>
        </div>
        <SwapButtonItem
          action={() => {
            props.pageUpdator(2);
          }}
          title={"Add Liquidity"}
          type={CommonButtonTypes.gradient}
        ></SwapButtonItem>
      </div>
    </YourLiquidityComponentContainer>
  );
}
