import Link from "next/link";
import { LiquidityDetailsModalComponentContainer } from "./RemoveLiquidityComponent.styles";
import CloseIcon from "../../../public/icons/close_icon.svg";
import SwapButtonItem from "../../Buttons/SwapButton";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
export default function LiquidityDetailsModalComponent(props: any) {
  return (
    <LiquidityDetailsModalComponentContainer>
      <div id="modalDiv">
        <div id="topCloseDiv">
          <h4>You Will Recieve</h4>
          <CloseIcon />
        </div>
        <h1 id="amountField">682.53</h1>
        <h6>AM/BTC Pool Tokens</h6>
        <span>
          Output is estimated. If the price changes by more than 6.5% your
          transaction will revert.
        </span>
        <div className="detailsRowDiv">
          <h6>BTC Deposited</h6>
          <h6>20</h6>
        </div>
        <div className="detailsRowDiv">
          <h6>AM Deposited</h6>
          <h6>436.54</h6>
        </div>
        <div className="detailsRowDiv">
          <h6>Rates</h6>
          <div id="ratesDiv">
            <h6>1 BTC = 123.9</h6>
            <h6>1 AM = 0.02</h6>
          </div>
        </div>
        <div className="detailsRowDiv">
          <h6>Shares of Pool</h6>
          <h6>0.0000023423%</h6>
        </div>
        <div className="detailsRowDiv">
          <SwapButtonItem
            action={() => {
              props.pageUpdator(5);
            }}
            title={"Confirm"}
            type={CommonButtonTypes.gradient}
          />
        </div>
      </div>
    </LiquidityDetailsModalComponentContainer>
  );
}
