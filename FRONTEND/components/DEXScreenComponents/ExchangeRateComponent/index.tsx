import Link from "next/link";
import { ExchangeRateComponentContainer } from "./ExchangeRateComponent.styles";
type ExchangeRateData = {
  fromCoin: String;
  fromAmount: String;
  toCoin: String;
  toAmount: String;
};
export default function ExchangeRateComponent(data: ExchangeRateData) {
  return (
    <ExchangeRateComponentContainer>
      <span>
        {data.fromAmount} {data.fromCoin} ≈ {data.toAmount} {data.toCoin}
      </span>
    </ExchangeRateComponentContainer>
  );
}
