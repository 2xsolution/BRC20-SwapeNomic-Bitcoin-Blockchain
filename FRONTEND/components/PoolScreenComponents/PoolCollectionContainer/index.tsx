import CardItem from "../../HomeScreenComponents/CardContainerItem";
import { PoolCollectionContainer } from "./PoolCollectionContainer.styles";
import BalanceCardItem from "../../HomeScreenComponents/AllCards/BalanceCard";
import EarnAMCardItem from "../../HomeScreenComponents/AllCards/EarnAMCard";
import Logo from "../../../public/icons/logo.svg";
import PoolCardItem from "../PoolCardsComponent";

export default function PoolCollectionContainerItem(props: any) {
  return (
    <>
      <PoolCollectionContainer>
        <CardItem
          childern={
            <PoolCardItem
              Icon={Logo}
              aprpercent="12432%"
              coin="AM"
              amount="0.001241"
              isDiposited={true}
              pageUpdator={props.pageUpdator}
            />
          }
        ></CardItem>
        <CardItem
          childern={
            <PoolCardItem
              Icon={Logo}
              aprpercent="12432%"
              coin="AM"
              amount=""
              isDiposited={false}
              pageUpdator={props.pageUpdator}
            />
          }
        ></CardItem>
        <CardItem
          childern={
            <PoolCardItem
              Icon={Logo}
              aprpercent="12432%"
              coin="AM"
              amount=""
              isDiposited={false}
              pageUpdator={props.pageUpdator}
            />
          }
        ></CardItem>
      </PoolCollectionContainer>
    </>
  );
}
