import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/footer.css";
import { FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-text">
        <span>{t("hero.extra")}</span>
        <span className="dot">·</span>
        <span>© 2025 Studio Nesa</span>
        <span className="dot">·</span>
        <a
          href="https://www.instagram.com/nesa_studio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="insta-icon" />
          <span>@nesa_studio</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
