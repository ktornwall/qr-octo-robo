import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBarcode } from "../reducers/barcodesSlice";
import { RootState } from "../rootReducer";
import { Barcode } from "../types/Barcode";
import LibraryContent from "./LibraryPage/LibraryContent";
import LibraryNav from "./LibraryPage/LibraryNav";

type Props = {};

const LibraryPage: React.FunctionComponent<Props> = (props) => {
  const dispatch = useDispatch();
  const barcodes = useSelector((state: RootState) => state.barcodes);

  const handleAddBarcode = (barcode: Barcode) => {
    dispatch(addBarcode(barcode));
  };

  return (
    <div className="flex flex-col sm:flex-row flex-nowrap h-full">
      <div className="sm:w-96 bg-white z-10 shadow-lg">
        <LibraryNav barcodes={barcodes} onAddBarcode={handleAddBarcode} />
      </div>
      <div className="flex-grow">
        <LibraryContent />
      </div>
    </div>
  );
};

export default LibraryPage;
