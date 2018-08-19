import * as React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export type BarcodeType = "qrcode" | "code128";

const initialState = {
  barcodeType: "qrcode" as BarcodeType,
  barcodes: [] as string[]
};
type State = Readonly<typeof initialState>;

class App extends React.Component<{}, State> {
  public readonly state: State = initialState;

  public updateBarcodeType = (type: BarcodeType) =>
    this.setState({ barcodeType: type });

  public render() {
    const { barcodeType } = this.state;
    return (
      <React.Fragment>
        <Header
          barcodeType={barcodeType}
          onBarcodeTypeChange={this.updateBarcodeType}
        />

        <div className="container-fluid  d-flex flex-fill flex-column">
          <div className="row flex-fill align-items-stretch">
            <div className="col-12 col-md-4 col-xl-3  d-flex flex-column">
              <Sidebar />
            </div>

            <div className="col-12 col-md-8 col-xl-9 pl-md-5 align-self-stretch">
              <div className="row">
                <div className="col-12 col-md-6 col-xl-4 my-3">
                  <div className="card">
                    <div className="card-header d-flex align-items-baseline">
                      <span className="flex-fill">18CIN001-001</span>
                      <button className="btn btn-sm btn-outline-danger">
                        &times;
                      </button>
                    </div>
                    <div className="card-body">THIS IS A QR CODE</div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-xl-4 my-3">
                  <div className="card">
                    <div className="card-header d-flex align-items-baseline">
                      <span className="flex-fill">18CIN001-001</span>
                      <button className="btn btn-sm btn-outline-danger">
                        &times;
                      </button>
                    </div>
                    <div className="card-body">THIS IS A QR CODE</div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-xl-4 my-3">
                  <div className="card">
                    <div className="card-header d-flex align-items-baseline">
                      <span className="flex-fill">18CIN001-001</span>
                      <button className="btn btn-sm btn-outline-danger">
                        &times;
                      </button>
                    </div>
                    <div className="card-body">THIS IS A QR CODE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="navbar fixed-bottom navbar-light bg-light justify-content-center align-items-center">
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
