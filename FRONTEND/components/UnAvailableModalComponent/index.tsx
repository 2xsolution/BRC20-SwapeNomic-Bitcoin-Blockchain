import Link from "next/link";
import { UnAvailableModalComponentContainer } from "./UnAvailableModalComponent.styles";
import SuccessIcon from "../../../public/icons/success_icon.svg";
import Image from "next/image";
export default function UnAvailableModalComponent() {
  return (
    <UnAvailableModalComponentContainer>
      <div>
        <Image src={"/icons/waiting.png"} height={150} width={150}></Image>
        <h4>
          This Feature is Un Available at the moment. We are working on it, will
          be avaiable soon.
        </h4>
        <span
          onClick={() => {
            console.log(123);
          }}
        >
          Update Me When Available
        </span>
      </div>
    </UnAvailableModalComponentContainer>
  );
}
