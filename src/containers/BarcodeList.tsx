import * as React from "react";
import { BarcodeEncoding } from "../App";
import Barcode from "../Barcode";
import Code128BarcodeCard from "../components/Code128BarcodeCard";
import QrBarcodeCard from "../components/QrBarcodeCard";

export interface IProps {
  barcodes: Barcode[];
  barcodeEncoding: BarcodeEncoding;
}

class BarcodeList extends React.Component<IProps> {
  public render() {
    const { barcodes, barcodeEncoding } = this.props;

    let BarcodeRenderer = Code128BarcodeCard;
    if (barcodeEncoding === "qrcode") {
      BarcodeRenderer = QrBarcodeCard;
    }

    return (
      <div className="row">
        {barcodes.map(barcode => (
          <BarcodeRenderer key={barcode.id} barcode={barcode} />
        ))}
      </div>
    );
  }
}

export default BarcodeList;
