import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { Barcode } from "../../types/Barcode";
import LibraryNavItem from "./LibraryNavItem";

type Props = {
  barcodes: Array<Barcode>;

  onAddBarcode: (barcode: Barcode) => void;
};

const LibraryNav: React.FunctionComponent<Props> = (props) => {
  const { barcodes, onAddBarcode } = props;

  const handleAddBarcode = () => {
    onAddBarcode({ id: nanoid(), barcodeType: "qrcode", content: "test" });
  };

  return (
    <div className="flex flex-col flex-nowrap h-full">
      <div className="px-6 py-4 border-b border-gray-300">
        <div className="relative flex flex-row shadow-sm">
          <select className="p-2 text-sm text-gray-500 border border-gray-300 rounded-l-md focus:ring-indigo-500 focus:border-indigo-500">
            <option>QR Code</option>
            <option>Code 39</option>
            <option>Code 128</option>
          </select>
          <input
            type="text"
            placeholder="Add barcode"
            className="flex-grow p-2 text-sm border-t border-b border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button
            className="p-2 text-sm text-gray-500 border border-gray-300 rounded-r-md focus:ring-indigo-500 focus:border-indigo-500"
            onClick={handleAddBarcode}
          >
            Add
          </button>
        </div>
      </div>

      <div className="flex-grow hidden sm:block">
        <div className="h-full overflow-y-auto">
          {barcodes.map((barcode) => (
            <LibraryNavItem
              key={barcode.id}
              barcode={barcode}
              onClick={() => {}}
              onDelete={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibraryNav;
