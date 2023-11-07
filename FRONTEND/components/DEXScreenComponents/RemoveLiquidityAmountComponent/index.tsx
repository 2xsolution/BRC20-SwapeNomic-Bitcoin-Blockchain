import Link from "next/link";
import { RemoveLiquidityAmountComponentContainer } from "./RemoveLiquidityAmountComponent.styles";

type ExchangeCardData = {
  fromCoin: String;
  fromAmount: String;
  toCoin: String;
  toAmount: String;
};

export default function RemoveLiquidityAmountComponent(data: ExchangeCardData) {
  return (
    <RemoveLiquidityAmountComponentContainer>
      <div className="cardContainer">
        <div>
          <span>{data.fromCoin}</span>
          <h6>{data.fromAmount}</h6>
        </div>
        <div id="bottomDiv">
          <span>{data.toCoin}</span>
          <h6>{data.toAmount}</h6>
        </div>
      </div>
    </RemoveLiquidityAmountComponentContainer>
  );
}
