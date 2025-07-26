import React from "react";
import { Helmet } from "react-helmet-async";
import "../styles/about.css";
import { useTranslation } from "react-i18next";
import Divider from "../components/Divider";

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="about-container">
            <h1 className="about-title">{t("about.title", "About Vanesa")}</h1>

            <Helmet>
                <title>{t("about.title")} | Studio Nesa</title>
                <meta name="description" content={t("about.desc")} />
            </Helmet>
            <Divider icon="" text="🌿V🌿" />
            <img
                src="/products/my-love.jpg"
                alt="Vanesa"
                className="about-image"
            />
            <Divider icon="" text="🌿V🌿" />

            <p className="about-text">{t("about.bio")}</p>
            <Divider icon="" text="🌿V🌿" />
            <p className="about-text">
                {t("about.instagram")}{" "}
                <a href="https://www.instagram.com/nesa_studio/" target="_blank" rel="noopener noreferrer">
                    @nesa_studio
                </a>
            </p>
            <p className="about-note">{t("about.note")}</p>
            <Divider icon="" text="🌿V🌿" />
        </div>
    );
};

export default About;
