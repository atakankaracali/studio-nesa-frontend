import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../styles/header.css";

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDark }) => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/logo_nesa.png" alt="StudioNesa Logo" className="logo-img" />
        <span className="logo-text">StudioNesa</span>
      </Link>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>{t("header.home")}</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>{t("header.products")}</Link>
        <Link to="/available" onClick={() => setMenuOpen(false)}>{t("header.available")}</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>{t("header.about")}</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>{t("header.contact")}</Link>
      </nav>

      <div className="header-controls">
        <div className="lang-switch">
          <button onClick={() => changeLanguage("en")}>🇬🇧</button>
          <button onClick={() => changeLanguage("ru")}>🇷🇺</button>
          <button onClick={() => changeLanguage("lv")}>🇱🇻</button>
        </div>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title="Toggle theme"
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
