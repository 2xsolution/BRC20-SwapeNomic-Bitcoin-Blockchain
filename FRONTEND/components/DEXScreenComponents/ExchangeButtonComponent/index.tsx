import Link from "next/link";
import { ExchangeButtonComponentContainer } from "./ExchangeButtonComponent.styles";
import JungleandFarmCardButtonItem from "../../Buttons/JungleandFarmCardButton";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
import SwapButtonItem from "../../Buttons/SwapButton";

export default function ExchangeButtonComponent(props: any) {
  return (
    <ExchangeButtonComponentContainer>
      <div>
        <SwapButtonItem
          title="Swap"
          type={CommonButtonTypes.gradient}
          action={() => {
            props.pageUpdator(2);
          }}
        ></SwapButtonItem>
      </div>
    </ExchangeButtonComponentContainer>
  );
}
