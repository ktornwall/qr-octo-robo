import * as React from "react";

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <header className="navbar navbar-dark bg-dark">
          <span className="navbar-brand">QR Octo Robo</span>

          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Barcode Type"
          >
            <button type="button" className="btn btn-light">
              QR Code
            </button>
            <button type="button" className="btn btn-secondary">
              Code 128
            </button>
          </div>
        </header>

        <div className="container-fluid  d-flex flex-fill flex-column">
          <div className="row flex-fill align-items-stretch">
            <div className="col-12 col-md-4 col-xl-3  d-flex flex-column">
              <form className="py-3 border-bottom">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Add New Barcode"
                    aria-label="Add New Barcode"
                    aria-describedby="add-button"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      id="add-button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </form>

              <div className="flex-fill py-3">
                <nav>
                  <div className="py-2 pl-3">18CIN001-001</div>
                  <div className="py-2 pl-3">18CIN001-002</div>
                </nav>
              </div>
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
