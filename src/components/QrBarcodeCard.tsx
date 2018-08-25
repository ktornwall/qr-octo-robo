import * as React from "react";
import { QRCode } from "react-qr-svg";

import Barcode from "../Barcode";

export interface IProps {
  barcode: Barcode;
  id: string;
}

class QrBarcodeCard extends React.Component<IProps> {
  public render() {
    const { barcode, id } = this.props;
    return (
      <div id={id} className="col-12 col-md-6 col-lg-4 my-3">
        <div className="card border-secondary">
          <div className="card-header py-2">{barcode.value}</div>
          <div className="card-body  d-flex justify-content-center">
            <div className="qrcode flex-fill">
              <QRCode value={barcode.value} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QrBarcodeCard;
