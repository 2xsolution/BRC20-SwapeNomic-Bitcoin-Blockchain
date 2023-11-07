import Link from "next/link";
import { DepositTokenModalComponentContainer } from "./DepositTokenModalComponent.styles";
import CloseIcon from "../../../public/icons/close_icon.svg";
import SwapButtonItem from "../../Buttons/SwapButton";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
import DepositTokenCardComponent from "../DepositTokenCardComponent";
export default function DepositTokenModalComponent(props: any) {
  return (
    <DepositTokenModalComponentContainer>
      <div id="modalDiv">
        <div id="topCloseDiv">
          <h4>Deposit AM Token</h4>
          <CloseIcon />
        </div>
        <DepositTokenCardComponent
          amount={""}
          balance={"1000000"}
          coin={"AM"}
          isAmountEditable={true}
        />
        <div className="detailsRowDiv">
          <SwapButtonItem
            action={() => {
              props.pageUpdator(1);
            }}
            title={"Confirm"}
            type={CommonButtonTypes.gradient}
          />
        </div>
      </div>
    </DepositTokenModalComponentContainer>
  );
}
