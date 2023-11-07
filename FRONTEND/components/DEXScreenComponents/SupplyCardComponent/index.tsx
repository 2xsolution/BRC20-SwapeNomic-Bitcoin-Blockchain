import Link from "next/link";
import { SupplyCardComponentContainer } from "./SupplyCardComponent.styles";
import { useRouter } from "next/router";

type ExchangeCardData = {
  title: String;
  balance: String;
  amount: String;
  coin: String;
  isAmountEditable: Boolean;
};

export default function SupplyCardComponent(data: ExchangeCardData) {
  return (
    <SupplyCardComponentContainer>
      <div className="cardContainer">
        <div>
          <span>{data.title}</span>
          <span>{"Balance: " + data.balance}</span>
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
            <select name="select" id="Select" value={data.coin.toString()}>
              <option value="AM">AM</option>
              <option value="BTC">BTC</option>
              <option value="ABC">ABC</option>
            </select>
          </div>
        </div>
      </div>
    </SupplyCardComponentContainer>
  );
}
