import type { NextPage } from "next";
import Container from "../../../components/Container";
import SwitchButtonComponent from "../../../components/DEXScreenComponents/SwitchButtonComponent";
import YourLiquidityComponent from "../../../components/DEXScreenComponents/YourLiquidityComponent";
import AddLiquidityComponent from "../../../components/DEXScreenComponents/AddLiquidityComponent";
import SupplyLiquidityComponent from "../../../components/DEXScreenComponents/SupplyLiquidityComponent";
import LiquidityDetailsModalComponent from "../../../components/DEXScreenComponents/LiquidityDetailsModalComponent";
import ExchangeSuccessModalComponent from "../../../components/DEXScreenComponents/ExchangeSuccessModalComponent";
import LiquidityDetailsComponent from "../../../components/DEXScreenComponents/LiquidityDetailsComponent";
import RemoveLiquidityComponent from "../../../components/DEXScreenComponents/RemoveLiquidityComponent";
import { SetStateAction, useState } from "react";

const DEXPage: NextPage = () => {
  const [activePage, setActivePage] = useState(1);
  const changeNavigation = (pageNo: SetStateAction<number>) => {
    console.log(pageNo);
    setActivePage(pageNo);
  };
  return (
    <Container title="Liquidity">
      {activePage == 1 && (
        <>
          <SwitchButtonComponent></SwitchButtonComponent>
          <YourLiquidityComponent pageUpdator={changeNavigation} />
        </>
      )}
      {activePage == 2 && (
        <AddLiquidityComponent pageUpdator={changeNavigation} />
      )}
      {activePage == 3 && (
        <SupplyLiquidityComponent pageUpdator={changeNavigation} />
      )}
      {activePage == 4 && (
        <LiquidityDetailsModalComponent pageUpdator={changeNavigation} />
      )}
      {activePage == 5 && (
        <ExchangeSuccessModalComponent
          pageUpdator={changeNavigation}
          pageNo={6}
        />
      )}
      {activePage == 6 && (
        <LiquidityDetailsComponent pageUpdator={changeNavigation} />
      )}
      {activePage == 7 && (
        <RemoveLiquidityComponent pageUpdator={changeNavigation} />
      )}
    </Container>
  );
};

export default DEXPage;
