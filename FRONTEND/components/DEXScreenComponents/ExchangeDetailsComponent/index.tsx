import Link from "next/link";
import { ExchangeDetailsComponentContainer } from "./ExchangeDetailsComponent.styles";
import ContractIcon from "../../../public/icons/contract_icon.svg";
import SwapButtonItem from "../../Buttons/SwapButton";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
export default function ExchangeDetailsComponent(props: any) {
  return (
    <ExchangeDetailsComponentContainer>
      <div id="outerDiv">
        <h2>Outgoing Transaction</h2>
        <ContractIcon />
        <h4>20 BNB</h4>
        <span>$58684.76</span>
        <hr />
        <div id="innerDiv">
          <h5>Recepient</h5>
          <span>0xge43heirhg85h3fKHHdiehfsfjo4t34</span>
          <span id="spacer"></span>
          <h5>Network Fee</h5>
          <span>{"0.0235233($34)"}</span>
          <span id="spacer"></span>
          <h5>Nonce</h5>
          <span>{"46"}</span>
        </div>
        <span id="spacer"></span>
        <SwapButtonItem
          action={() => {
            props.pageUpdator(1);
          }}
          title={"View on BSCScan"}
          type={CommonButtonTypes.simple}
        ></SwapButtonItem>
      </div>
    </ExchangeDetailsComponentContainer>
  );
}
