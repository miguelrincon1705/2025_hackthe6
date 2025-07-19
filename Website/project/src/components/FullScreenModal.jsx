import React, { useEffect } from 'react';
import '../FullScreenModal.css'; // We'll create this CSS file

const FullScreenModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  // Optional: Close on Escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="full-screen-modal-overlay" onClick={onClose}>
      <div className="full-screen-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="full-screen-modal-close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default FullScreenModal;