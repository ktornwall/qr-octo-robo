import * as React from "react";
import Barcode from "./Barcode";
import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";

export type BarcodeEncoding = "qrcode" | "code128";

const initialState = {
  barcodeType: "qrcode" as BarcodeEncoding,
  barcodes: [] as Barcode[]
};
type State = Readonly<typeof initialState>;

class App extends React.Component<{}, State> {
  public readonly state: State = initialState;

  public updateBarcodeType = (type: BarcodeEncoding) =>
    this.setState({ barcodeType: type });

  public addBarcode = (barcode: string) => {
    this.setState({
      barcodes: [...this.state.barcodes, new Barcode(barcode)]
    });
  };

  public render() {
    const { barcodeType, barcodes } = this.state;
    return (
      <React.Fragment>
        <Header
          barcodeType={barcodeType}
          onBarcodeTypeChange={this.updateBarcodeType}
        />

        <div className="container-fluid  d-flex flex-fill flex-column">
          <div className="row flex-fill align-items-stretch">
            <div className="col-12 col-md-4 col-xl-3  border-right  d-flex flex-column">
              <Sidebar barcodes={barcodes} onAddBarcode={this.addBarcode} />
            </div>

            <div className="content-wrapper col-12 col-md-8 col-xl-9 pl-md-5">
              <div className="row">
                {barcodes.map(barcode => (
                  <div
                    key={barcode.id}
                    className="col-12 col-md-6 col-xl-4 my-3"
                  >
                    <div className="card">
                      <div className="card-header d-flex align-items-baseline">
                        <span className="flex-fill">{barcode.value}</span>
                        <button className="btn btn-sm btn-outline-danger">
                          &times;
                        </button>
                      </div>
                      <div className="card-body">THIS IS A QR CODE</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="d-none d-md-flex navbar navbar-light bg-light  justify-content-center align-items-center flex-shrink-0">
          <div>
            Made with &#x2764; by{" "}
            <a className="text-muted" href="https://twitter.com/derkatzenbar">
              @DerKatzenbar
            </a>
            <strong className="mx-2">&middot;</strong>
            Thanks to{" "}
            <a className="text-muted" href="https://github.com/neocotic/qrious">
              QRious
            </a>{" "}
            for QR code generation
            <strong className="mx-2">&middot;</strong>
            <a
              className="text-muted"
              href="https://github.com/katzenbar/qr-octo-robo"
            >
              Get source code
            </a>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
