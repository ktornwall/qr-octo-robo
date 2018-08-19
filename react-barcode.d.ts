declare module "react-barcode";

import * as React from "react";

interface IReactBarcodeProps {
  displayValue?: boolean;
  value: string;
}

export default function Barcode(
  props: IReactBarcodeProps
): React.ReactElement<{}>;
