import { faTimes } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "./Button";

type Props = {};

const BarcodeCard: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="p-4 pb-3 border-b border-gray-300">
        Barcode || | ||| |
      </div>
      <div className="p-4 pt-3 flex flex-row flex-nowrap items-center">
        <div className="flex-grow font-mono">Barcode name</div>
        <Button variant="red-minimal" icon={faTimes} />
      </div>
    </div>
  );
};

export default BarcodeCard;
