import { ReactNode } from "react";
import { CardItemContainer } from "./CardItem.styles";
type CardChildernType = {
  childern: ReactNode;
};
export default function CardItem({ childern }: CardChildernType) {
  return (
    <>
      <CardItemContainer>{childern}</CardItemContainer>
    </>
  );
}
