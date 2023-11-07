import Link from "next/link";
import { SwitchButtonsComponentContainer } from "./SwitchButtonsComponent.styles";
import { useRouter } from "next/router";

export default function SwitchButtonComponent() {
  const routerManager = useRouter();

  return (
    <SwitchButtonsComponentContainer>
      <div className="buttonsContainer">
        <div
          className={
            "button" +
            (routerManager.asPath.includes("/swap") ? " selectedButton" : "")
          }
        >
          <Link href={"/dex/swap"}>
            <span>Swap</span>
          </Link>
        </div>
        <div
          className={
            "button" +
            (routerManager.asPath.includes("/liquidity")
              ? " selectedButton"
              : "")
          }
        >
          <Link href={"/dex/liquidity"}>
            <span>Add Liquidity</span>
          </Link>
        </div>
      </div>
    </SwitchButtonsComponentContainer>
  );
}
