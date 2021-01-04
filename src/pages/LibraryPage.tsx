import React from "react";
import LibraryNav from "./LibraryPage/LibraryNav";

type Props = {};

const LibraryPage: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="flex flex-col sm:flex-row flex-nowrap h-full">
      <div className="sm:w-96 bg-white z-10 shadow-lg">
        <LibraryNav />
      </div>
      <div className="flex-grow">Barcode grid</div>
    </div>
  );
};

export default LibraryPage;
