import React from "react";
import "../styles/imageGalleryModal.css";

interface Props {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageGalleryModal: React.FC<Props> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex]}
          alt={`Product ${currentIndex + 1}`}
          className="gallery-image"
        />

        {images.length > 1 && (
          <>
            <button className="gallery-nav prev" onClick={onPrev}>
              ‹
            </button>
            <button className="gallery-nav next" onClick={onNext}>
              ›
            </button>
          </>
        )}

        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default ImageGalleryModal;
