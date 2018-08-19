import * as React from "react";
import Barcode from "../Barcode";
import QrBarcodeCard from "../components/QrBarcodeCard";

export interface IProps {
  barcodes: Barcode[];
}

class BarcodeList extends React.Component<IProps> {
  public render() {
    const { barcodes } = this.props;

    return (
      <div className="row">
        {barcodes.map(barcode => (
          <QrBarcodeCard key={barcode.id} barcode={barcode} />
        ))}
      </div>
    );
  }
}

export default BarcodeList;
