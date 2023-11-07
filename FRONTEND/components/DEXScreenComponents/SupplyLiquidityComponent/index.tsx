import Link from "next/link";
import { SupplyLiquidityComponentContainer } from "./SupplyLiquidityComponent.styles";
import { useRouter } from "next/router";
import SettingsIcon from "../../../public/icons/liquidity_settings_icon.svg";
import ClockIcon from "../../../public/icons/liquidity_clock_icon.svg";
import PlusIcon from "../../../public/icons/plus_icon.svg";
import SwapButtonItem from "../../Buttons/SwapButton";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
import ExchangeCardComponent from "../ExchangeCardComponent";
import SupplyCardComponent from "../SupplyCardComponent";

export default function SupplyLiquidityComponent(props: any) {
  return (
    <SupplyLiquidityComponentContainer>
      <div className="supplyCardContainer">
        <h3>Add Liquidity</h3>

        <SupplyCardComponent
          amount={""}
          balance={"109.02"}
          coin={"BTC"}
          isAmountEditable={true}
          title={"Amount"}
        />
        <PlusIcon />
        <SupplyCardComponent
          amount={"78.036"}
          balance={"100000"}
          coin={"AM"}
          isAmountEditable={true}
          title={"Amount"}
        />
        <div id="labels_div">Prices and Pool Share</div>
        <div className="innerCardContainer">
          <div>
            <h4>167.01</h4>
            <span>
              <h6>AM per BTC</h6>
            </span>
          </div>
          <div>
            <h4>0.00000756</h4>
            <span>
              <h6>BTC per AM</h6>
            </span>
          </div>
          <div>
            <h4>{"<0.01%"}</h4>
            <span>
              <h6>Share of Pool</h6>
            </span>
          </div>
        </div>

        <SwapButtonItem
          action={() => {
            props.pageUpdator(4);
          }}
          title={"Supply"}
          type={CommonButtonTypes.gradient}
        ></SwapButtonItem>
      </div>
    </SupplyLiquidityComponentContainer>
  );
}
