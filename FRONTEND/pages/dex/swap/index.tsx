import type { NextPage } from "next";
import Container from "../../../components/Container";
import SwitchButtonComponent from "../../../components/DEXScreenComponents/SwitchButtonComponent";
import ExchangeCardComponent from "../../../components/DEXScreenComponents/ExchangeCardComponent";
import ExchangeIcon from "../../../public/icons/exchange_icon.svg";
import ExchangeRateComponent from "../../../components/DEXScreenComponents/ExchangeRateComponent";
import ExchangeButtonComponent from "../../../components/DEXScreenComponents/ExchangeButtonComponent";
import ExchangeSuccessModalComponent from "../../../components/DEXScreenComponents/ExchangeSuccessModalComponent";
import ExchangeDetailsComponent from "../../../components/DEXScreenComponents/ExchangeDetailsComponent";
import { SetStateAction, useState } from "react";

const DEXPage: NextPage = () => {
  const [activePage, setActivePage] = useState(1);
  const changeNavigation = (pageNo: SetStateAction<number>) => {
    console.log(pageNo);
    setActivePage(pageNo);
  };
  return (
    <Container title="Swap Tokens">
      {activePage == 1 && (
        <>
          <SwitchButtonComponent></SwitchButtonComponent>
          <ExchangeCardComponent
            amount={""}
            balance={"Balance 108.78"}
            coin={"AM"}
            title={"You Pay"}
            isAmountEditable={true}
          ></ExchangeCardComponent>
          <ExchangeIcon></ExchangeIcon>
          <ExchangeCardComponent
            amount={"123"}
            balance={"Balance 100000.78"}
            coin={"BTC"}
            title={"You Get"}
            isAmountEditable={false}
          ></ExchangeCardComponent>
          <ExchangeRateComponent
            fromAmount={"1"}
            fromCoin={"AM"}
            toAmount={"123"}
            toCoin={"BTC"}
          ></ExchangeRateComponent>
          <ExchangeButtonComponent
            pageUpdator={changeNavigation}
          ></ExchangeButtonComponent>
        </>
      )}
      {activePage == 2 && (
        <>
          <ExchangeSuccessModalComponent
            pageUpdator={changeNavigation}
            pageNo={3}
          />
        </>
      )}
      {activePage == 3 && (
        <>
          <ExchangeDetailsComponent
            pageUpdator={changeNavigation}
          ></ExchangeDetailsComponent>
        </>
      )}
    </Container>
  );
};

export default DEXPage;
