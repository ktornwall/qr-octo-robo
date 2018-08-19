import * as React from "react";
import Barcode from "./Barcode";
import BarcodeList from "./containers/BarcodeList";
import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";

export type BarcodeEncoding = "qrcode" | "code128";

const initialState = {
  barcodeEncoding: "qrcode" as BarcodeEncoding,
  barcodes: [] as Barcode[]
};
type State = Readonly<typeof initialState>;

class App extends React.Component<{}, State> {
  public state: State = initialState;

  constructor(props: {}) {
    super(props);

    let savedBarcodes = [] as string[];
    let barcodeEncoding = "qrcode";

    try {
      savedBarcodes =
        JSON.parse(localStorage.getItem("qrCodes") || "null") || [];
      barcodeEncoding =
        JSON.parse(localStorage.getItem("displayMode") || "null") || "qrcode";
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.error(err);
    }

    const barcodes = savedBarcodes.map(b => new Barcode(b));

    this.state = {
      barcodeEncoding: barcodeEncoding as BarcodeEncoding,
      barcodes
    };
  }

  public saveStateToStorage = () => {
    try {
      localStorage.setItem(
        "qrCodes",
        JSON.stringify(this.state.barcodes.map(b => b.value))
      );
      localStorage.setItem(
        "displayMode",
        JSON.stringify(this.state.barcodeEncoding)
      );
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.error(err);
    }
  };

  public updateBarcodeType = (type: BarcodeEncoding) =>
    this.setState({ barcodeEncoding: type }, this.saveStateToStorage);

  public addBarcode = (barcode: Barcode) => {
    this.setState(
      {
        barcodes: [...this.state.barcodes, barcode]
      },
      this.saveStateToStorage
    );
  };

  public deleteBarcode = (barcode: Barcode) => {
    this.setState(
      {
        barcodes: this.state.barcodes.filter(b => b !== barcode)
      },
      this.saveStateToStorage
    );
  };

  public deleteAllBarcodes = () => {
    this.setState(
      {
        barcodes: []
      },
      this.saveStateToStorage
    );
  };

  public render() {
    const { barcodeEncoding, barcodes } = this.state;
    return (
      <React.Fragment>
        <Header
          barcodeEncoding={barcodeEncoding}
          onBarcodeTypeChange={this.updateBarcodeType}
        />

        <div className="container-fluid  d-flex flex-fill flex-column">
          <div className="row flex-fill align-items-stretch">
            <div className="col-12 col-md-4 col-xl-3  border-right  d-flex flex-column">
              <Sidebar
                barcodes={barcodes}
                onAddBarcode={this.addBarcode}
                onDeleteBarcode={this.deleteBarcode}
                onDeleteAllBarcodes={this.deleteAllBarcodes}
              />
            </div>

            <div className="content-wrapper col-12 col-md-8 col-xl-9 pl-md-5">
              <BarcodeList
                barcodes={barcodes}
                barcodeEncoding={barcodeEncoding}
              />
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
