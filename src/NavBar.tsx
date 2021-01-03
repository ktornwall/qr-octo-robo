import React, { useState } from "react";
import classnames from "classnames";

import { ReactComponent as LogoSvg } from "../logo.svg";
import NavBarLink from "./NavBarLink";

const navItems = [{ label: "Library" }, { label: "Settings" }];

const NavBar: React.FunctionComponent<{}> = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  const mobileMenuClassNames = classnames(
    {
      hidden: !navExpanded,
    },
    "sm:hidden"
  );

  const handleToggleMenuClicked = () => {
    setNavExpanded(!navExpanded);
  };

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <LogoSvg className="h-6 w-6 fill-current text-white" />
              <div className="font-mono font-semibold	 text-white text-lg ml-4">
                QR Octo Robo
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={navExpanded}
              onClick={handleToggleMenuClicked}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden={!navExpanded}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden={!navExpanded}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navItems.map((item) => (
                  <NavBarLink textSize="sm" key={item.label} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={mobileMenuClassNames}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <NavBarLink textSize="base" key={item.label} {...item} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
