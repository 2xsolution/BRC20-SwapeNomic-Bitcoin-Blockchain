import { LiveTradingEntryContainer } from "./LiveTradingEntry.styles";
type LiveTradingEntryData = {
  type: string;
  sender: string;
  reciever: string;
  time: string;
  amount: string;
};

export default function LiveTradingEntry(entrydata: LiveTradingEntryData) {
  return (
    <>
      <LiveTradingEntryContainer>
        {/* <Image height={48} width={48} src={logo}></Image> */}
        <div className="leftDiv">
          <h6 id="tpeHeading">{entrydata.type}</h6>
          <h6 id="fromHeading">
            {entrydata.sender}/{entrydata.reciever}
          </h6>
        </div>
        <div className="rightDiv">
          <h6 id="timeHeading">{entrydata.time}</h6>
          <h6 id="amountHeading">{entrydata.amount}</h6>
        </div>
      </LiveTradingEntryContainer>
    </>
  );
}
