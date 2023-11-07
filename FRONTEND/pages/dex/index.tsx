import type { NextPage } from "next";
import Container from "../../components/Container";
import SwitchButtonComponent from "../../components/DEXScreenComponents/SwitchButtonComponent";

const DEXPage: NextPage = () => {
  return (
    <Container title="DEX">
      <div>DEX Page</div>
      <SwitchButtonComponent></SwitchButtonComponent>
    </Container>
  );
};

export default DEXPage;
