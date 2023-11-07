import React, { useEffect, useState } from "react";
import { BalanceCardContainer } from "./BalanceCard.styles";
import BalanceVisibleCard from "../../../../public/icons/balance_visible_icon.svg";
type BalanceCardData = {
  amount: string;
};
export default function BalanceCardItem(balancedata: BalanceCardData) {
  const [balance, updateBalance] = useState(balancedata.amount);
  useEffect(() => {
    function getBalance() {
      var accountBalance = window.localStorage.getItem("balance");
      console.log(accountBalance);
      if (accountBalance != "undefined" && accountBalance) {
        updateBalance(accountBalance);
      } else {
        updateBalance("N/A");
      }
      setTimeout(getBalance, 1000);
    }
    getBalance();
  }, []);
  return (
    <>
      <BalanceCardContainer>
        {/* <Image height={48} width={48} src={logo}></Image> */}
        <div className="topDiv">
          <h5 id="balanceHeading">Balance </h5>
          <span></span>
          <BalanceVisibleCard />
        </div>
        <div className="bottomDiv">
          <h1 id="amountField">{balance}</h1>
          <span></span>
          <h6>AM</h6>
        </div>
      </BalanceCardContainer>
    </>
  );
}
