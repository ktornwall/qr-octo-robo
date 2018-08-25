import * as React from "react";
import BarcodeComponent from "react-barcode";
import Barcode from "../Barcode";

export interface IProps {
  barcode: Barcode;
  id: string;
}

class Code128BarcodeCard extends React.Component<IProps> {
  public render() {
    const { barcode, id } = this.props;
    return (
      <div id={id} className="col-12 my-3">
        <div className="card border-secondary">
          <div className="card-header py-2">{barcode.value}</div>
          <div className="card-body  d-flex justify-content-center">
            <div className="code128 flex-grow-0">
              <BarcodeComponent displayValue={false} value={barcode.value} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Code128BarcodeCard;
