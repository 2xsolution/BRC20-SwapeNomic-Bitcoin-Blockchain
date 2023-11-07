import Link from "next/link";
import { ExchangeCardComponentContainer } from "./ExchangeCardComponent.styles";
import { useRouter } from "next/router";

type ExchangeCardData = {
  title: String;
  balance: String;
  amount: String;
  coin: String;
  isAmountEditable: Boolean;
};

export default function ExchangeCardComponent(data: ExchangeCardData) {
  return (
    <ExchangeCardComponentContainer>
      <div className="cardContainer">
        <div>
          <span>{data.title}</span>
          <span>{data.balance}</span>
        </div>
        <div id="bottomDiv">
          <input
            type="number"
            placeholder="0.00"
            value={data.amount.toString()}
            disabled={!data.isAmountEditable}
          />
          <select name="select" id="Select" value={data.coin.toString()}>
            <option value="AM">AM</option>
            <option value="BTC">BTC</option>
            <option value="ABC">ABC</option>
          </select>
        </div>
      </div>
    </ExchangeCardComponentContainer>
  );
}
