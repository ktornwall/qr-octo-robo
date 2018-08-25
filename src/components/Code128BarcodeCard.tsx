import * as React from "react";
import BarcodeComponent from "react-barcode";
import Barcode from "../Barcode";

export interface IProps {
  barcode: Barcode;
  className?: string;
  id: string;
}

class Code128BarcodeCard extends React.Component<IProps> {
  public render() {
    const { barcode, id } = this.props;
    const classes = ["card border-secondary"];
    if (barcode.isSelected) {
      classes.push("is-selected");
    }

    return (
      <div id={id} className="col-12 my-3">
        <div className={classes.join(" ")}>
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
