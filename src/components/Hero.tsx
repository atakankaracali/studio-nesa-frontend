import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/hero.css";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero-section">
            <div className="hero-glow" />
            <div className="hero-content">
                <h1 className="hero-title neon-text">{t("hero.title")}</h1>
                <p className="hero-subtitle">{t("hero.subtitle")}</p>
                <a href="/products" className="hero-button">
                    {t("hero.button")}
                </a>
                <p className="hero-extra"> {t("hero.extra")}</p>
            </div>
        </section>
    );
};

export default Hero;
