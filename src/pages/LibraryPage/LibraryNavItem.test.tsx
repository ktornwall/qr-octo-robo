import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LibraryNavItem, { Props } from "./LibraryNavItem";
import { Barcode } from "../../types/Barcode";

const defaultProps: Props = {
  barcode: {
    barcodeType: "qrcode",
    content: "this-is-a-barcode",
  },
  onClick: () => {},
  onDelete: () => {},
};

describe("LibraryNavItem", () => {
  describe("rendering the barcode", () => {
    describe("rendering the barcode type", () => {
      test("with a qrcode barcode", () => {
        const barcode: Barcode = {
          barcodeType: "qrcode",
          content: "this-is-a-barcode",
        };

        render(<LibraryNavItem {...defaultProps} barcode={barcode} />);

        const barcodeTypeEl = screen.getByText(/QR/);
        expect(barcodeTypeEl).toBeInTheDocument();
      });

      test("with a code 128 barcode", () => {
        const barcode: Barcode = {
          barcodeType: "code128",
          content: "this-is-a-barcode",
        };

        render(<LibraryNavItem {...defaultProps} barcode={barcode} />);

        const barcodeTypeEl = screen.getByText(/128/);
        expect(barcodeTypeEl).toBeInTheDocument();
      });
    });

    describe("rendering the barcode content", () => {
      test("renders the barcode content", () => {
        const barcode: Barcode = {
          barcodeType: "code128",
          content: "26895",
        };

        render(<LibraryNavItem {...defaultProps} barcode={barcode} />);

        const barcodeContentEl = screen.getByText(/26895/);
        expect(barcodeContentEl).toBeInTheDocument();
      });
    });
  });

  describe("clicking on the nav item", () => {
    test("it calls the onClick callback", () => {
      const onClick = jest.fn();

      render(<LibraryNavItem {...defaultProps} onClick={onClick} />);

      const barcodeTypeEl = screen.getByText(/this-is-a-barcode/);
      fireEvent.click(barcodeTypeEl);

      expect(onClick).toBeCalledTimes(1);
    });
  });

  describe("clicking on the delete button", () => {
    test("it calls the onDelete callback", () => {
      const onDelete = jest.fn();

      render(<LibraryNavItem {...defaultProps} onDelete={onDelete} />);

      const deleteButtonEl = screen.getByTestId("delete-barcode-btn");
      fireEvent.click(deleteButtonEl);

      expect(onDelete).toBeCalledTimes(1);
    });
  });
});
