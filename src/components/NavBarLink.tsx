import classnames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  isActive?: boolean;
  label: string;
  path: string;
  textSize: "sm" | "base";

  onClick?: () => void;
};

const NavBarLink: React.FunctionComponent<Props> = (props) => {
  const { isActive, label, path, textSize, onClick } = props;

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
    <Link to={path} className={classes} onClick={onClick}>
      {label}
    </Link>
  );
};

export default NavBarLink;
