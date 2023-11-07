import CardItem from "../CardContainerItem";
import { JungleCollectionContainer } from "./JungleCollectionContainer.styles";
import BalanceCardItem from "../AllCards/BalanceCard";
import EarnAMCardItem from "../AllCards/EarnAMCard";
import Logo from "../../../public/icons/logo.svg";
import JungleStartingCardItem from "../AllCards/JungleStartingCard";

export default function JungleCollectionContainerItem() {
  return (
    <>
      <JungleCollectionContainer>
        <CardItem
          childern={
            <JungleStartingCardItem
              stack="AM"
              earn="WBNB"
              amount="122.63% APR"
            />
          }
        ></CardItem>
        <CardItem
          childern={
            <JungleStartingCardItem
              stack="AM"
              earn="WBNB"
              amount="231.23% APR"
            />
          }
        ></CardItem>
        <CardItem
          childern={
            <JungleStartingCardItem
              stack="AM"
              earn="BUSD"
              amount="342.12% APR"
            />
          }
        ></CardItem>
      </JungleCollectionContainer>
    </>
  );
}
