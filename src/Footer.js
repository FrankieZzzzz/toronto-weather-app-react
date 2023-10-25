import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p id="button-sign">
        Loosely designed in <span>Figma</span> and coded in{" "}
        <span>Visual Studio Code</span>. Open sourced on{" "}
        <a href="https://github.com/FrankieZzzzz/weather-react-app" >GitHub</a> and deployed with <span>Netlify</span>
      </p>
    </footer>
  );
}
