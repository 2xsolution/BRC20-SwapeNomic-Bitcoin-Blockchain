import Link from "next/link";
import { RemoveLiquidityComponentContainer } from "./RemoveLiquidityComponent.styles";
import DownArrowIcon from "../../../public/icons/down_arrow_icon.svg";
import SwapButtonItem from "../../Buttons/SwapButton";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
import RemoveLiquidityPercentageComponent from "../RemoveLiquidityPercentageComponent";
import RemoveLiquidityAmountComponent from "../RemoveLiquidityAmountComponent";
export default function RemoveLiquidityComponent(props: any) {
  return (
    <RemoveLiquidityComponentContainer>
      <h2>Remove Liquidity</h2>
      <div id="outerDiv">
        <RemoveLiquidityPercentageComponent amount={"100%"} />
        <div id="iconDiv">
          <DownArrowIcon />
        </div>
        <RemoveLiquidityAmountComponent
          fromCoin={"BTC"}
          fromAmount={"0.02"}
          toCoin={"AM"}
          toAmount={"235"}
        />
        <div className="detailsRowDiv">
          <span>Prices</span>
          <div id="ratesDiv">
            <h6>1 BTC = 123.9</h6>
            <h6>1 AM = 0.02</h6>
          </div>
        </div>
        <h5>LP tokens in your wallet</h5>
        <div className="detailsRowDiv">
          <h6>AM/BTC</h6>
          <h6>149.05</h6>
        </div>
        <div className="detailsRowDiv">
          <h6>AM</h6>
          <h6>436.54</h6>
        </div>
        <div className="detailsRowDiv">
          <h6>BTC</h6>
          <h6>23</h6>
        </div>
        <div className="detailsRowDiv">
          <SwapButtonItem
            action={() => {
              props.pageUpdator(1);
            }}
            title={"Approve"}
            type={CommonButtonTypes.gradient}
          />
          <span id="spacer"></span>
          <SwapButtonItem
            action={() => {}}
            title={"Remove"}
            type={CommonButtonTypes.simple}
          />
        </div>
      </div>
    </RemoveLiquidityComponentContainer>
  );
}
