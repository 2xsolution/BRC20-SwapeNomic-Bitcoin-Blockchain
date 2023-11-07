import CardItem from "../CardContainerItem";
import { MasterCollectionContainer } from "./MasterCollectionContainer.styles";
import BalanceCardItem from "../AllCards/BalanceCard";
import EarnAMCardItem from "../AllCards/EarnAMCard";
import Logo from "../../../public/icons/logo.svg";

export default function MasterCollectionContainerItem() {
  return (
    <>
      <MasterCollectionContainer>
        <CardItem childern={<BalanceCardItem amount="N/A" />}></CardItem>
        <CardItem
          childern={
            <EarnAMCardItem
              aprPercent="396.44% APR"
              icon={Logo}
              title="Earn AM"
            />
          }
        ></CardItem>
        <CardItem
          childern={
            <EarnAMCardItem
              aprPercent="396.44% APR"
              icon={Logo}
              title="Earn AM"
            />
          }
        ></CardItem>
      </MasterCollectionContainer>
    </>
  );
}
