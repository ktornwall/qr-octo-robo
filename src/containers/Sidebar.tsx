import * as React from "react";

export interface IProps {
  barcodes: string[];
  onAddBarcode: (barcode: string) => any;
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
    this.props.onAddBarcode(this.state.barcodeInput);
    this.setState({ barcodeInput: "" });
  };

  public render() {
    const { barcodes } = this.props;

    return (
      <React.Fragment>
        {this.renderNewBarcodeForm()}

        <div className="flex-fill py-3 u-scroll-vertical-overflow">
          <nav>
            {barcodes.map(barcode => (
              <div key={barcode} className="py-2 pl-3">
                {barcode}
              </div>
            ))}
          </nav>
        </div>
      </React.Fragment>
    );
  }

  private renderNewBarcodeForm = () => {
    const { barcodeInput } = this.state;

    return (
      <form className="py-3 border-bottom" onSubmit={this.handleAddBarcode}>
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
            <button
              className="btn btn-outline-success"
              type="buitton"
              id="add-button"
            >
              +
            </button>
          </div>
        </div>
      </form>
    );
  };
}

export default Sidebar;
