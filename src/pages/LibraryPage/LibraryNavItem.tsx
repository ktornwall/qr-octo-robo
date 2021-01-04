import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "../../components/Button";
import { Barcode, BarcodeType } from "../../types/Barcode";

const barcodeTypeEl = (barcodeType: BarcodeType): React.ReactNode => {
  switch (barcodeType) {
    case "code128":
      return <div className="text-xs text-blue-800 font-mono mr-4">128</div>;
    case "qrcode":
      return <div className="text-xs text-green-800 font-mono mr-4">QR</div>;
  }
};

export type Props = {
  barcode: Barcode;

  onClick: () => void;
  onDelete: () => void;
};

const LibraryNavItem: React.FunctionComponent<Props> = (props) => {
  const { barcode, onClick, onDelete } = props;

  return (
    <div
      className="px-6 py-2 hover:bg-gray-100 flex flex-row items-center cursor-pointer"
      onClick={onClick}
    >
      {barcodeTypeEl(barcode.barcodeType)}
      <div className="flex-grow">{barcode.content}</div>
      <Button
        variant="red-minimal"
        icon={faTimes}
        data-testid="delete-barcode-btn"
        onClick={onDelete}
      />
    </div>
  );
};

export default LibraryNavItem;
