import React from "react";
import BarcodeCard from "../../components/BarcodeCard";

type Props = {};

const LibraryContent: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {/* TODO: Replace with folder name */}
          Library
        </h3>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <BarcodeCard />
        <BarcodeCard />
      </div>
    </div>
  );
};

export default LibraryContent;
