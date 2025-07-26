import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import "../styles/contactPage.css";
import ContactModal from "../components/ContactModal";
import Divider from "../components/Divider";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="contact-page">
      <Helmet>
        <title>{t("contactPage.title", "Contact | Studio Nesa")}</title>
        <meta
          name="description"
          content={t(
            "contactPage.description",
            "Reach out to Studio Nesa for custom handmade orders or business inquiries."
          )}
        />
      </Helmet>

      <h1 className="contact-heading">{t("contactPage.heading")}</h1>
      <Divider icon="" text="🌿V🌿" />

      <p className="contact-text">{t("contactPage.text")}</p>
      <Divider icon="" text="🌿V🌿" />

      <div className="social-section">
        <p className="social-label">{t("contactPage.social")}</p>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/nesa_studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="Instagram"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://www.tiktok.com/@nesa.studio7"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="TikTok"
          >
            <FaTiktok className="social-icon" />
          </a>
        </div>
      </div>

      <button className="contact-page-button" onClick={() => setIsModalOpen(true)}>
        {t("contactPage.contactButton")}
      </button>

      {isModalOpen && (
        <ContactModal
          productName=""
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Contact;
