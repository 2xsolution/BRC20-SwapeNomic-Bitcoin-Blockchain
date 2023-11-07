import { ReactNode } from "react";
import { TopFramCardItemContainer } from "./TopFramCardContainer.styles";
type CardChildernType = {
  childern: ReactNode;
};
export default function TopFramCardContainerItem({
  childern,
}: CardChildernType) {
  return (
    <>
      <TopFramCardItemContainer>{childern}</TopFramCardItemContainer>
    </>
  );
}
