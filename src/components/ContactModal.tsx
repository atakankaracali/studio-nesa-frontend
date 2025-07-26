import React, { useState } from "react";
import "../styles/contactModal.css";
import { useTranslation } from "react-i18next";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

interface ContactModalProps {
  productName: string;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ productName, onClose }) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert(t("contact.error"));
      return;
    }

    try {
      setSending(true);

      await addDoc(collection(db, "messages"), {
        name,
        email,
        message: productName
          ? `[Product: ${productName}] ${message}`
          : message,
        read: false,
        timestamp: serverTimestamp(),
      });

      setName("");
      setEmail("");
      setMessage("");
      setShowSuccessModal(true);
    } catch (err: any) {
      console.error("🔥 Firestore Error:", err);
      alert("Hata: " + (err.message || "Unknown"));
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>×</button>
          <h2>{t("contact.title")}</h2>

          {productName && (
            <p>
              <strong>{t("contact.product")}:</strong> {productName}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={t("contact.namePlaceholder")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder={t("contact.emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder={t("contact.messagePlaceholder")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              required
            />
            <button
              type="submit"
              className="submit-btn"
              disabled={sending}
            >
              {sending ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        </div>
      </div>

      {showSuccessModal && (
        <div className="modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowSuccessModal(false)}>×</button>
            <h2>{t("contact.successTitle", "Message Sent!")}</h2>
            <p>{t("contact.successMessage", "Thank you! Your message has been received.")}</p>
            <button
              className="submit-btn"
              onClick={() => {
                setShowSuccessModal(false);
                onClose();
              }}
            >
              {t("contact.okButton", "OK")}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactModal;
