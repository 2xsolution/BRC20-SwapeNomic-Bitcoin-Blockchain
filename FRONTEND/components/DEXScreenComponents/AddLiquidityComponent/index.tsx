import Link from "next/link";
import { AddLiquidityComponentContainer } from "./AddLiquidityComponent.styles";
import { useRouter } from "next/router";
import SettingsIcon from "../../../public/icons/liquidity_settings_icon.svg";
import ClockIcon from "../../../public/icons/liquidity_clock_icon.svg";
import PlusIcon from "../../../public/icons/plus_icon.svg";
import SwapButtonItem from "../../Buttons/SwapButton";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";

export default function AddLiquidityComponent(props: any) {
  return (
    <AddLiquidityComponentContainer>
      <div className="cardContainer">
        <h3>Add Liquidity</h3>
        <div className="innerCardContainer">
          <select name="select" id="Select">
            <option value="AM">AM</option>
            <option value="BTC">BTC</option>
            <option value="ABC">ABC</option>
          </select>
        </div>
        <PlusIcon />
        <div className="innerCardContainer">
          <select name="select" id="Select">
            <option value="" disabled selected>
              Select a Token{" "}
            </option>
            <option value="BTC">BTC</option>
            <option value="ABC">ABC</option>
          </select>
        </div>
        <span>
          <h6>Add liquidity to receive AM-LP tokens</h6>
        </span>
        <SwapButtonItem
          action={() => {
            props.pageUpdator(3);
          }}
          title={"Add Liquidity"}
          type={CommonButtonTypes.gradient}
        ></SwapButtonItem>
      </div>
    </AddLiquidityComponentContainer>
  );
}
