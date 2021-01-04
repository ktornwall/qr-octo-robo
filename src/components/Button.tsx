import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

const COLORS = {
  default: ["border-gray-300", "bg-white", "text-gray-700", "hover:bg-gray-50"],
  red: ["border-red-300", "bg-white", "text-red-700", "hover:bg-red-50"],
  "red-minimal": [
    "border-red-100",
    "bg-red-100",
    "text-red-700",
    "hover:bg-red-200",
  ],
};

type Props = {
  icon?: IconDefinition;
  variant?: keyof typeof COLORS;
};

const Button: React.FunctionComponent<Props> = (props) => {
  const { icon, variant = "default" } = props;

  const variantClasses = COLORS[variant];

  return (
    <button
      type="button"
      className={classNames(
        "rounded-md px-2 py-1 border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500",
        variantClasses
      )}
      id="options-menu"
      aria-haspopup="true"
      aria-expanded="true"
    >
      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

export default Button;
