import type { NextPage } from "next";
import Container from "../components/Container";
import CardItem from "../components/HomeScreenComponents/CardContainerItem";
import MasterCollectionContainerItem from "../components/HomeScreenComponents/MasterCollectionContainer";
import JungleCollectionContainerItem from "../components/HomeScreenComponents/JungleCollectionContainer";
import TopFarmsCollectionItem from "../components/HomeScreenComponents/TopFarmsCollectionContainer";

const HomePage: NextPage = () => {
  return (
    <Container title="Home">
      <MasterCollectionContainerItem />
      <JungleCollectionContainerItem />
      <h5 className="text-left flex text-red">Top Farms</h5>
      <TopFarmsCollectionItem />
    </Container>
  );
};

export default HomePage;
