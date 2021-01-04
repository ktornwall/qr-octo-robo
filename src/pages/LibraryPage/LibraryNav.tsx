import React from "react";
import LibraryNavItem from "./LibraryNavItem";

const LibraryNav: React.FunctionComponent = () => {
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
          <button className="p-2 text-sm text-gray-500 border border-gray-300 rounded-r-md focus:ring-indigo-500 focus:border-indigo-500">
            Add
          </button>
        </div>
      </div>

      <div className="flex-grow hidden sm:block">
        <div className="h-full overflow-y-auto">
          <LibraryNavItem
            barcode={{ barcodeType: "qrcode", content: "test1" }}
            onClick={() => {}}
            onDelete={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default LibraryNav;
