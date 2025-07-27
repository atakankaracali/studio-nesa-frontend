import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import productsData from "../assets/productsData";
import "../styles/products.css";
import ImageGalleryModal from "../components/ImageGalleryModal";
import ContactModal from "../components/ContactModal";
import Divider from "../components/Divider";

const PRODUCTS_PER_PAGE = 20;

const Products: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const lang = i18n.language as "en" | "ru" | "lv";
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const currentProducts = productsData.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
    const totalPages = Math.ceil(productsData.length / PRODUCTS_PER_PAGE);

    return (
        <div className="products-container">
            <h2 className="products-title">{t("products.title")}</h2>
            <Divider icon="" text="🌿V🌿" />

            <div className="products-grid">
                {currentProducts.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img
                            src={product.images[0]}
                            alt={product.name[lang]}
                            className="product-image"
                            loading="lazy"
                            onClick={() => {
                                setSelectedProduct(product);
                                setGalleryIndex(0);
                                setIsGalleryOpen(true);
                            }}
                        />
                        <h3 className="product-name">{product.name[lang]}</h3>
                        <p>{product.description[lang]}</p>
                        <button
                            className="note-button"
                            onClick={() => {
                                setSelectedProduct(product);
                                setIsContactOpen(true);
                            }}
                        >
                            {t("products.contact")}
                        </button>
                    </div>
                ))}
            </div>

            {isGalleryOpen && selectedProduct && (
                <ImageGalleryModal
                    images={selectedProduct.images}
                    currentIndex={galleryIndex}
                    onClose={() => setIsGalleryOpen(false)}
                    onNext={() => setGalleryIndex((prev) => (prev + 1) % selectedProduct.images.length)}
                    onPrev={() => setGalleryIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length)}
                />
            )}

            {isContactOpen && selectedProduct && (
                <ContactModal
                    productName={selectedProduct.name[lang]}
                    onClose={() => setIsContactOpen(false)}
                />
            )}
            <Divider icon="" text="🌿V🌿" />

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        className={currentPage === i + 1 ? "active-page" : ""}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Products;
