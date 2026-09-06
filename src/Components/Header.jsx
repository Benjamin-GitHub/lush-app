import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-box">
          <img
            alt="LUSH"
            src="https://res.cloudinary.com/lush/image/upload/f_auto,q_auto/lush_com/site_assets/commerce-site-logo.gif"
            className="App-logo"
            width="240"
            height="108"
          ></img>
        </div>
      </header>
    </div>
  );
}
