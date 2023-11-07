import Link from "next/link";
import { ExchangeSuccessModalComponentContainer } from "./ExchangeSuccessModalComponent.styles";
import SuccessIcon from "../../../public/icons/success_icon.svg";
export default function ExchangeSuccessModalComponent(props: any) {
  return (
    <ExchangeSuccessModalComponentContainer>
      <div>
        <SuccessIcon />
        <h4>Transaction Submitted</h4>
        <span
          onClick={() => {
            props.pageUpdator(props.pageNo);
          }}
        >
          View Details
        </span>
      </div>
    </ExchangeSuccessModalComponentContainer>
  );
}
