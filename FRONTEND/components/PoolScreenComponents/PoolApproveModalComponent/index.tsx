import Link from "next/link";
import { PoolApproveModalComponentContainer } from "./PoolApproveModalComponent.styles";
import CloseIcon from "../../../public/icons/close_icon.svg";
import SwapButtonItem from "../../Buttons/SwapButton";
import { CommonButtonTypes } from "../../../constants/CommonButtonTypes";
export default function PoolApproveModalComponent(props: any) {
  return (
    <PoolApproveModalComponentContainer>
      <div id="modalDiv">
        <div id="topCloseDiv">
          <h4>Roi</h4>
          <CloseIcon />
        </div>

        <table>
          <tr>
            <th>
              <span>Time Frame</span>
            </th>
            <th>
              <span>Roi</span>
            </th>
            <th>
              <span>AM per $1,000</span>
            </th>
          </tr>
          <tr>
            <td>
              <span>1d</span>
            </td>
            <td>
              <span>0.69 %</span>
            </td>
            <td>
              <span>32.5</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>7d</span>
            </td>
            <td>
              <span>0.62 %</span>
            </td>
            <td>
              <span>52.1</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>30d</span>
            </td>
            <td>
              <span>0.6 %</span>
            </td>
            <td>
              <span>85.9</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>365d (APY)</span>
            </td>
            <td>
              <span>292.4235 %</span>
            </td>
            <td>
              <span>3ewq21.5</span>
            </td>
          </tr>
        </table>
        <span>
          Calculated based on current rates. Compounding once daily. Rates are
          estimates provided for your convenience only, and by no means
          represent guaranteed returns.
        </span>
        <div className="detailsRowDiv">
          <SwapButtonItem
            action={() => {
              props.pageUpdator(3);
            }}
            title={"Get AM"}
            type={CommonButtonTypes.simple}
          />
        </div>
      </div>
    </PoolApproveModalComponentContainer>
  );
}
