import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <h1>Magitai Project</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li> {/* Contactリンクを追加 */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
