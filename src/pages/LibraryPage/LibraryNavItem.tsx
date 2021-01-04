import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "../../components/Button";
import { Barcode } from "../../types/Barcode";

type Props = {
  barcode: Barcode;

  onClick: () => void;
  onDelete: () => void;
};

const LibraryNavItem: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="px-6 py-2 hover:bg-gray-100 flex flex-row items-center cursor-pointer">
      <div className="text-xs text-green-800 font-mono mr-4">QR</div>
      <div className="flex-grow">Barcode 1</div>
      <Button variant="red-minimal" icon={faTimes} />
    </div>
  );
};

export default LibraryNavItem;
