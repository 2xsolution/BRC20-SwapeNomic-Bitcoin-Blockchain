import LiveTradingEntry from "./LiveTradingEntry";
import { LiveTradingItemContainer } from "./LiveTradingItem.styles";
import { LiveTradingItemWrapper } from "./LiveTradingItemWrapper.styles";
export default function LiveTradingItem() {
  return (
    <>
      <LiveTradingItemWrapper>
        <LiveTradingItemContainer>
          {/* <Image height={48} width={48} src={logo}></Image> */}
          <h6>Live Trading Deals</h6>
          <LiveTradingEntry
            sender="ABC"
            reciever="DEF"
            type="SWAP"
            amount="$ 10.00"
            time="10:01:00 AM"
          ></LiveTradingEntry>
          <LiveTradingEntry
            sender="GHQ"
            reciever="IJK"
            type="TEST"
            amount="$ 15.34"
            time="23:51:34 PM"
          ></LiveTradingEntry>
        </LiveTradingItemContainer>
      </LiveTradingItemWrapper>
    </>
  );
}
