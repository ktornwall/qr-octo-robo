import * as React from "react";
import Barcode from "../Barcode";

export interface IProps {
  barcodes: Barcode[];
  onAddBarcode: (barcode: Barcode) => any;
  onDeleteBarcode: (barcode: Barcode) => any;
  onDeleteAllBarcodes: () => any;
}

const initialState = {
  barcodeInput: ""
};
type State = Readonly<typeof initialState>;

class Sidebar extends React.Component<IProps, State> {
  public readonly state = initialState;

  public handleBarcodeInputChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    this.setState({ barcodeInput: event.currentTarget.value });
  };

  public handleAddBarcode = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onAddBarcode(new Barcode(this.state.barcodeInput));
    this.setState({ barcodeInput: "" });
  };

  public handleDeleteBarcode = (barcode: Barcode) => () => {
    this.props.onDeleteBarcode(barcode);
  };

  public render() {
    const { barcodes } = this.props;

    return (
      <React.Fragment>
        <div className="border-bottom">
          {this.renderNewBarcodeForm()}
          <button
            type="button"
            className="btn btn-block btn-outline-danger mb-3"
            onClick={this.props.onDeleteAllBarcodes}
          >
            &times; Clear All
          </button>
        </div>

        <div className="flex-fill py-3 nav-wrapper">
          <ul className="nav flex-column">
            {barcodes.map(this.renderNavigationBarcode)}
          </ul>
        </div>
      </React.Fragment>
    );
  }

  private renderNewBarcodeForm = () => {
    const { barcodeInput } = this.state;

    return (
      <form className="py-3" onSubmit={this.handleAddBarcode}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add New Barcode"
            aria-label="Add New Barcode"
            aria-describedby="add-button"
            value={barcodeInput}
            onChange={this.handleBarcodeInputChange}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary" id="add-button">
              +
            </button>
          </div>
        </div>
      </form>
    );
  };

  private renderNavigationBarcode = (barcode: Barcode) => (
    <li
      key={barcode.id}
      className="nav-item py-2 pl-3 d-flex align-items-baseline"
    >
      <span className="flex-fill">{barcode.value}</span>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={this.handleDeleteBarcode(barcode)}
      >
        &times;
      </button>
    </li>
  );
}

export default Sidebar;
