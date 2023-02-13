import React, { useState } from "react";
import Cancel from "../../assets/CancelIcon";
import HamburgerIcon from "../../assets/HamburgerIcon";
import ErrorBoundary from "../../Components/ErrorBoundry";
import headerJson from "../../Data/header.json";
import "./Header.scss";
function Header() {
  const [showMobileNavBar, setShowMobileNavBar] = useState<boolean>(false);

  return (
    <ErrorBoundary>
      <div className="header">
        <nav>
          <ul>
            {headerJson.header.map(
              (header: { name: string }, index: number) => (
                <li key={index}>{header.name}</li>
              )
            )}
          </ul>
        </nav>
        <div className="mini-navbar">
          {!showMobileNavBar ? (
            <button
              className="hamburger-button"
              onClick={() => setShowMobileNavBar(true)}
            >
              <HamburgerIcon />
            </button>
          ) : null}
          {showMobileNavBar ? (
            <div className="nav-bar-mobile-list">
              <div className="cancel-button">
                <button onClick={() => setShowMobileNavBar(false)}>
                  <Cancel />
                </button>
              </div>
              <div className="nav-list">
                <ul>
                  {headerJson.header.map((header, index) => (
                    <li key={index}>{header.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default Header;
