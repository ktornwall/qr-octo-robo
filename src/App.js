// @flow

import React, { Component } from 'react';
import Barcode from 'react-barcode';

import QrCode from './QrCode';
import './App.css';

class App extends Component {
  constructor(...props) {
    super(...props);

    let qrCodes = [];
    let displayMode = 'qrcode';

    try {
      qrCodes = JSON.parse(localStorage.qrCodes);
      displayMode = JSON.parse(localStorage.displayMode);
    } catch (err) {
      console.error(err);
    }

    this.state = {
      qrCodes,
      addQrCodeValue: '',
      displayMode,
    };
  }

  saveCodesToStorage(qrCodes){
    try {
      localStorage.setItem('qrCodes', JSON.stringify(qrCodes));
    } catch (err) {
      console.error(err);
    }
  }

  changeDisplayMode = (mode) => () => {
    this.setState({ displayMode: mode });
    try {
      localStorage.setItem('displayMode', JSON.stringify(mode));
    } catch (err) {
      console.error(err);
    }
  }

  handleAddQrCode = (evt) => {
    evt.preventDefault();

    let { qrCodes, addQrCodeValue } = this.state;

    if (addQrCodeValue !== '') {
      qrCodes = qrCodes.concat([ addQrCodeValue ]);
      this.setState({
        addQrCodeValue: '',
        qrCodes: qrCodes,
      });
      this.saveCodesToStorage(qrCodes);
    }
  }

  removeQrCode = (index) => {
    return () => {
      let qrCodes = [
        ...this.state.qrCodes.slice(0, index),
        ...this.state.qrCodes.slice(index + 1),
      ];
      this.setState({
        qrCodes
      });
      this.saveCodesToStorage(qrCodes);
    };
  }

  renderHeader() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand">QR Octo Robo</span>
          <span className="navbar-text">a library of your QR codes</span>
        </div>
      </nav>
    );
  }

  renderBody() {
    return (
      <div className="app__body container mt-4">
        <div className="row">
          <div className="col-auto">
            {this.renderBarcodeModeButtons()}
          </div>
          <div className="col">
            {this.renderAddQrCodeForm()}
          </div>
        </div>

        {this.state.qrCodes.map((qrCode, index) => this.renderQrCode(qrCode, index))}
      </div>
    );
  }

  renderFooter() {
    return (
      <footer className="footer bg-faded text-muted text-center mt-4 py-4">
        Made with &#x2764; by <a className="text-muted" href="https://twitter.com/ktornwall">@ktornwall</a>
        <strong className="mx-2">&middot;</strong>
        Thanks to <a className="text-muted" href="https://github.com/neocotic/qrious">QRious</a> for QR code generation
        <strong className="mx-2">&middot;</strong>
        <a className="text-muted" href="https://github.com/ktornwall/qr-octo-robo">Get source code</a>
      </footer>
    )
  }

  renderBarcodeModeButtons() {
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-secondary" onClick={this.changeDisplayMode("qrcode")}>QR Code</button>
        <button type="button" className="btn btn-secondary" onClick={this.changeDisplayMode("code128")}>CODE 128</button>
      </div>
    );
  }

  renderAddQrCodeForm() {
    return (
      <form onSubmit={this.handleAddQrCode}>
        <div className="input-group">
          <input
            value={this.state.addQrCodeValue}
            onChange={(evt) => this.setState({ addQrCodeValue: evt.target.value })}
            className="form-control"
            type="text"
            placeholder="Add a new QR code"
          />
          <span className="input-group-btn">
            <button className="btn btn-outline-success" type="submit">+</button>
          </span>
        </div>
      </form>
    );
  }

  renderQrCode = (qrCode, index) => {
    return (
      <div key={index} className="row justify-content-center">
        <div className="col-sm-12 col-md-6">
          <div className="qr-code-card">
            <div className="qr-code-card__heading">
              <div className="qr-code-card__label" title={qrCode}>
                {qrCode}
              </div>
              <button onClick={this.removeQrCode(index)} type="button" className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="qr-code-card__barcode d-flex justify-content-center">
              { this.state.displayMode === "qrcode" ?
                (
                  <QrCode
                    value={qrCode}
                    size={150}
                  />
                ) :
                (
                  <Barcode
                    value={qrCode}
                  />
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    )
  }
}

export default App;
