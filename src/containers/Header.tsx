import * as React from "react";
import { BarcodeEncoding } from "../App";
import RadioButtonGroup, {
  IRadioButtonGroupOption
} from "../components/RadioButtonGroup";

import HeaderIcon from "./HeaderIcon.png";

export interface IProps {
  barcodeEncoding: BarcodeEncoding;
  onBarcodeTypeChange: (type: BarcodeEncoding) => any;
}

type RadioButtonOption = IRadioButtonGroupOption<BarcodeEncoding>;

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
    const { barcodeEncoding } = this.props;

    return (
      <header className="navbar navbar-dark bg-dark  flex-shrink-0 align-items-center">
        <span className="navbar-brand  d-flex align-items-center">
          <img src={HeaderIcon} height={30} width={30} className="mr-3" />
          QR Octo Robo
        </span>

        <RadioButtonGroup
          activeClass="btn-primary"
          buttonColor="light"
          buttonSize="sm"
          options={barcodeTypeOptions}
          onChange={this.handleBarcodeTypeChange}
          value={barcodeEncoding}
        />
      </header>
    );
  }
}

export default Header;
