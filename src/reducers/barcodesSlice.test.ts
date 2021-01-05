import { Barcode } from "../types/Barcode";
import barcodesSlice, { addBarcode } from "./barcodesSlice";

describe("barcodesSlice", () => {
  test("initial state", () => {
    expect(barcodesSlice(undefined, { type: "noop" })).toEqual([]);
  });

  describe("addBarcode", () => {
    test("it adds the barcode to the list", () => {
      const barcode: Barcode = {
        id: "test-id",
        barcodeType: "qrcode",
        content: "alexandros",
      };
      const result = barcodesSlice([], addBarcode(barcode));

      expect(result).toEqual([barcode]);
    });
  });
});
