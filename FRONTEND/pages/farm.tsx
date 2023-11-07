import type { NextPage } from "next";
import Container from "../components/Container";
import UnAvailableModalComponent from "../components/UnAvailableModalComponent";

const FarmPage: NextPage = () => {
  return (
    <Container title="Farm">
      <UnAvailableModalComponent />
    </Container>
  );
};

export default FarmPage;
