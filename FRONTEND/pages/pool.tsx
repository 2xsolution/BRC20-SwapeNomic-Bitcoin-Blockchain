import type { NextPage } from "next";
import Container from "../components/Container";
import PoolCollectionContainerItem from "../components/PoolScreenComponents/PoolCollectionContainer";
import PoolApproveModalComponent from "../components/PoolScreenComponents/PoolApproveModalComponent";
import DepositTokenModalComponent from "../components/PoolScreenComponents/DepositTokenModalComponent";
import { SetStateAction, useState } from "react";

const PoolPage: NextPage = () => {
  const [activePage, setActivePage] = useState(1);
  const changeNavigation = (pageNo: SetStateAction<number>) => {
    console.log(pageNo);
    setActivePage(pageNo);
  };
  return (
    <Container title="Pool">
      {activePage == 1 && (
        <>
          <PoolCollectionContainerItem pageUpdator={changeNavigation} />
          <PoolCollectionContainerItem pageUpdator={changeNavigation} />
        </>
      )}
      {activePage == 2 && (
        <PoolApproveModalComponent pageUpdator={changeNavigation} />
      )}
      {activePage == 3 && (
        <DepositTokenModalComponent pageUpdator={changeNavigation} />
      )}
    </Container>
  );
};

export default PoolPage;
