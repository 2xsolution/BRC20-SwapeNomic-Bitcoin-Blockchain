import Link from "next/link";
import { DepositTokenCardComponentContainer } from "./DepositTokenCardComponent.styles";
import { useRouter } from "next/router";

type ExchangeCardData = {
  balance: String;
  amount: String;
  coin: String;
  isAmountEditable: Boolean;
};

export default function DepositTokenCardComponent(data: ExchangeCardData) {
  return (
    <DepositTokenCardComponentContainer>
      <div className="cardContainer">
        <div>
          <span>{}</span>
          <span>{"Available: " + data.balance + " " + data.coin}</span>
        </div>
        <div id="bottomDiv">
          <input
            type="number"
            placeholder="0.00"
            value={data.amount.toString()}
            disabled={!data.isAmountEditable}
          />
          <div>
            <div id="hotLabel">
              <span> MAX </span>
            </div>
          </div>
        </div>
      </div>
    </DepositTokenCardComponentContainer>
  );
}
