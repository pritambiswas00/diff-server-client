import React, { useState } from "react";
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
              <button onClick={()=>setShowMobileNavBar(false)}>Close</button>
                <ul>
                  {headerJson.header.map((header, index) => (
                    <li key={index}>{header.name}</li>
                  ))}
                </ul>
            </div>
          ) : null}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default Header;
