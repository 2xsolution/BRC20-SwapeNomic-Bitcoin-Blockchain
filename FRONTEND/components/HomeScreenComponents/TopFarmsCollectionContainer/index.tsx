import { TopFarmsCollectionContainer } from "./TopFarmsCollectionContainer.styles";

import Logo from "../../../public/icons/logo.svg";

import TopFarmCardItem from "../AllCards/TopFarmCard";
import TopFramCardContainerItem from "../TopFramCardContainer";

export default function TopFarmsCollectionItem() {
  return (
    <>
      <TopFarmsCollectionContainer>
        <TopFramCardContainerItem
          childern={
            <TopFarmCardItem
              from="AM"
              to="WBNB"
              aprpercent="122.63% APR"
              liquidity="$1203124.00"
              FromIcon={Logo}
              ToIcon={Logo}
            />
          }
        ></TopFramCardContainerItem>
        <TopFramCardContainerItem
          childern={
            <TopFarmCardItem
              from="AM"
              to="WBNB"
              aprpercent="122.63% APR"
              liquidity="$1203124.00"
              FromIcon={Logo}
              ToIcon={Logo}
            />
          }
        ></TopFramCardContainerItem>
        <TopFramCardContainerItem
          childern={
            <TopFarmCardItem
              from="AM"
              to="WBNB"
              aprpercent="122.63% APR"
              liquidity="$1203124.00"
              FromIcon={Logo}
              ToIcon={Logo}
            />
          }
        ></TopFramCardContainerItem>
        <TopFramCardContainerItem
          childern={
            <TopFarmCardItem
              from="AM"
              to="WBNB"
              aprpercent="122.63% APR"
              liquidity="$1203124.00"
              FromIcon={Logo}
              ToIcon={Logo}
            />
          }
        ></TopFramCardContainerItem>
      </TopFarmsCollectionContainer>
    </>
  );
}
