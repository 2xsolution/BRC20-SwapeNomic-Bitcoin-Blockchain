import Link from "next/link";
import { RemoveLiquidityPercentageComponentContainer } from "./RemoveLiquidityPercentageComponent.styles";
import { useRouter } from "next/router";

type ExchangeCardData = {
  amount: String;
};

export default function RemoveLiquidityPercentageComponent(
  data: ExchangeCardData
) {
  return (
    <RemoveLiquidityPercentageComponentContainer>
      <div className="cardContainer">
        <div>
          <span>{"Amount"}</span>
          <span>{"Detailed"}</span>
        </div>
        <div id="bottomDiv">
          <h2 id="percentField">{data.amount}</h2>
          <div>
            <div id="percentLabel">
              <span> 25% </span>
            </div>
            <span id="spacer"></span>
            <div id="percentLabel">
              <span> 50% </span>
            </div>
            <span id="spacer"></span>
            <div id="percentLabel">
              <span> 75% </span>
            </div>
            <span id="spacer"></span>
            <div id="selectedPercentLabel">
              <span> MAX </span>
            </div>
          </div>
        </div>
      </div>
    </RemoveLiquidityPercentageComponentContainer>
  );
}
