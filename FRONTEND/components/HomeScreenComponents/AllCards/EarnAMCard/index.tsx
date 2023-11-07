import React from "react";
import { EarnAMCardContainer } from "./EarnAMCard.styles";
import CommonButtonItem from "../../../Buttons/CommonButton";
import { CommonButtonTypes } from "../../../../constants/CommonButtonTypes";
import StartEarningCryptoButtonItem from "../../../Buttons/StartEarningCryptoButton";
type AMPercentData = {
  aprPercent: string;
  icon: any;
  title: string;
};
export default function EarnAMCardItem({
  aprPercent,
  icon: Icon,
  title,
}: AMPercentData) {
  return (
    <>
      <EarnAMCardContainer>
        {/* <Image height={48} width={48} src={logo}></Image> */}
        <div className="firstDiv">
          <h6>Stake your AM in exchange for even more tokens </h6>
          <StartEarningCryptoButtonItem
            type={CommonButtonTypes.gradient}
            url="/"
            title="Start Earning Crypto"
          ></StartEarningCryptoButtonItem>
        </div>
        <div className="secondDiv">
          <div className="secondInnerDiv">
            <div className="secondMostInnerDiv">
              <div className="iconContainer">
                <Icon></Icon>
              </div>
              <h4>{title}</h4>
            </div>
            <h4 id="amountField">{aprPercent}</h4>
          </div>
        </div>
      </EarnAMCardContainer>
    </>
  );
}
