import * as React from "react";
import { BarcodeType } from "../App";
import RadioButtonGroup, { IRadioButtonGroupOption } from "./RadioButtonGroup";

export interface IProps {
  barcodeType: BarcodeType;
  onBarcodeTypeChange: (type: BarcodeType) => any;
}

type RadioButtonOption = IRadioButtonGroupOption<BarcodeType>;

const barcodeTypeOptions: RadioButtonOption[] = [
  {
    id: "qrcode",
    label: "QR Code"
  },
  {
    id: "code128",
    label: "Code 128"
  }
];

class Header extends React.Component<IProps> {
  public handleBarcodeTypeChange = (barcodeTypeOption: RadioButtonOption) =>
    this.props.onBarcodeTypeChange(barcodeTypeOption.id);

  public render() {
    const { barcodeType } = this.props;

    return (
      <header className="navbar navbar-dark bg-dark">
        <span className="navbar-brand">QR Octo Robo</span>

        <RadioButtonGroup
          activeClass="btn-light"
          buttonColor="secondary"
          buttonSize="sm"
          options={barcodeTypeOptions}
          onChange={this.handleBarcodeTypeChange}
          value={barcodeType}
        />
      </header>
    );
  }
}

export default Header;
