import classnames from "classnames";
import React from "react";

type Props = {
  isActive?: boolean;
  label: string;
  textSize: "sm" | "base";
};

const NavBarLink: React.FunctionComponent<Props> = (props) => {
  const { isActive, label, textSize } = props;

  const classes = classnames(
    isActive
      ? ["bg-gray-900", "text-white"]
      : ["text-gray-300", "hover:bg-gray-700", "hover:text-white"],
    "px-3",
    "py-2",
    "rounded-md",
    "font-medium",
    textSize === "sm" ? "text-sm" : "text-base"
  );

  return (
    <a href="#" className={classes}>
      {label}
    </a>
  );
};

export default NavBarLink;
