export type BarcodeType = "code128" | "qrcode";

export type Barcode = {
  id: string;
  barcodeType: BarcodeType;
  content: string;
};
