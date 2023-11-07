import { Menu, ChevronLeft } from "@styled-icons/material";
import { RightSideHeaderConatiner } from "./RightSideHeader.styles";
import { LeftSideHeaderIconItem } from "../../../constants/leftSideMenuHeaderItems";
import IconicButtonItem from "../IconicButtonItem";
import notification_icon from "../../../public/icons/notification_button_icon.svg";
import FlagUKIcon from "../../../public/icons/flag_uk_icon.svg";
import VerticalDivider from "../../../public/icons/vertical_divider.svg";
import CommonButtonItem from "../../Buttons/CommonButton";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
import ThemeButtonItem from "./ThemeButtonItem";
import { backgroundColor } from "../../../constants/colors";
import WalletButtonItem from "../../Buttons/WalletButton";
import { useEffect, useRef, useState } from "react";
type LeftSideItemsList = {
  items: LeftSideHeaderIconItem[];
};
export default function RightSideHeader({ items }: LeftSideItemsList) {
  const [unisatInstalled, setUnisatInstalled] = useState(false);
  const [connected, setConnected] = useState(false);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [publicKey, setPublicKey] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState({
    confirmed: 0,
    unconfirmed: 0,
    total: null,
  });
  const [network, setNetwork] = useState("testnet");

  const getBasicInfo = async () => {
    const unisat = (window as any).unisat;
    const [address] = await unisat.getAccounts();
    setAddress(address);

    const publicKey = await unisat.getPublicKey();
    setPublicKey(publicKey);

    const balance = await unisat.getBalance();
    setBalance(balance);

    const network = await unisat.getNetwork();
    setNetwork(network);
  };

  const selfRef = useRef<{ accounts: string[] }>({
    accounts: [],
  });
  const self = selfRef.current;
  const handleAccountsChanged = (_accounts: string[]) => {
    if (self.accounts[0] === _accounts[0]) {
      // prevent from triggering twice
      return;
    }
    self.accounts = _accounts;
    if (_accounts.length > 0) {
      setAccounts(_accounts);
      setConnected(true);

      setAddress(_accounts[0]);

      getBasicInfo();
    } else {
      setConnected(false);
    }
  };

  const handleNetworkChanged = (network: string) => {
    setNetwork(network);
    getBasicInfo();
  };
  useEffect(() => {
    if (connected)
      window.localStorage.setItem("balance", balance.total?.toFixed(3));
    else window.localStorage.removeItem("balance");
  }, [balance, connected]);
  useEffect(() => {
    async function checkUnisat() {
      let unisat = (window as any).unisat;

      for (let i = 1; i < 10 && !unisat; i += 1) {
        await new Promise((resolve) => setTimeout(resolve, 100 * i));
        unisat = (window as any).unisat;
      }

      if (unisat) {
        setUnisatInstalled(true);
      } else if (!unisat) return;

      unisat.getAccounts().then((accounts: string[]) => {
        handleAccountsChanged(accounts);
      });

      unisat.on("accountsChanged", handleAccountsChanged);
      unisat.on("networkChanged", handleNetworkChanged);

      return () => {
        unisat.removeListener("accountsChanged", handleAccountsChanged);
        unisat.removeListener("networkChanged", handleNetworkChanged);
      };
    }

    checkUnisat().then();
  }, []);
  console.log(
    unisatInstalled,
    connected,
    accounts,
    publicKey,
    address,
    balance
  );
  return (
    <RightSideHeaderConatiner>
      {/* <IconContainer onClick={toggleDrawer}>
        {isOpened ? <ChevronLeft /> : <Menu />}
      </IconContainer> */}
      {/* <TitleContainer>Header Will Go Here</TitleContainer> */}
      <IconicButtonItem
        icon={notification_icon}
        url={"/notifications"}
      ></IconicButtonItem>
      <span></span>
      <WalletButtonItem
        type={
          !connected ? CommonButtonTypes.gradient : CommonButtonTypes.simple
        }
        action={async () => {
          //const unisat = (window as any).unisat;
          const result = await unisat.requestAccounts();
          handleAccountsChanged(result);
        }}
        title={
          address !== "" && connected
            ? address.slice(0, 4) + " . . . " + address.slice(-4)
            : "Connect Wallet"
        }
      ></WalletButtonItem>
      <span></span>
      <span className="divider"> </span>
      <span></span>
      <ThemeButtonItem />
      <span></span>
      <IconicButtonItem
        icon={FlagUKIcon}
        url={"/localization"}
      ></IconicButtonItem>
      {/* <FlagUKIcon></FlagUKIcon> */}
    </RightSideHeaderConatiner>
  );
}
