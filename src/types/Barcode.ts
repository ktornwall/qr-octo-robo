export type BarcodeType = "code128" | "qrcode";

export type Barcode = {
  barcodeType: BarcodeType;
  content: string;
};
