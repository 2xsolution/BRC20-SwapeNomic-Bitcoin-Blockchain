import Link from "next/link";
import { LiquidityDetailsComponentContainer } from "./LiquidityDetailsComponent.styles";
import CloseIcon from "../../../public/icons/close_icon.svg";
import SwapButtonItem from "../../Buttons/SwapButton";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
export default function LiquidityDetailsComponent(props: any) {
  return (
    <LiquidityDetailsComponentContainer>
      <h2>Liquidity Details</h2>
      <div id="outerDiv">
        <h3>AM/BTC</h3>
        <div className="detailsRowDiv">
          <span>Pooled BTC</span>
          <h6>20</h6>
        </div>
        <div className="detailsRowDiv">
          <span>Pooled AM</span>
          <h6>436.54</h6>
        </div>
        <div className="detailsRowDiv">
          <span>Your Pool Tokens</span>
          <h6>23</h6>
        </div>
        <div className="detailsRowDiv">
          <span>Your Pool Share</span>
          <h6>0.03%</h6>
        </div>
        <div className="detailsRowDiv">
          <SwapButtonItem
            action={() => {}}
            title={"Remove"}
            type={CommonButtonTypes.simple}
          />
          <span id="spacer"></span>
          <SwapButtonItem
            action={() => {
              props.pageUpdator(7);
            }}
            title={"Approve"}
            type={CommonButtonTypes.gradient}
          />
        </div>
      </div>
    </LiquidityDetailsComponentContainer>
  );
}
