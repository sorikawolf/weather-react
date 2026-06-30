import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      This project was coded by{" "}
      <a href="https://github.com/sorikawolf" target="_blank" rel="noreferrer">
        Sorika Wolf
      </a>{" "}
      and is open-sourced on{" "}
      <a
        href="https://github.com/sorikawolf/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </footer>
  );
}
