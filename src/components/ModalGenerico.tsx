import React, { useEffect } from "react";

interface ModalProps {
  message: string;
  confirmText: string;
  title: string;
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ModalGenerico: React.FC<ModalProps> = ({ message, confirmText, onConfirm, onCancel, isOpen, title }) => {
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
          <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onCancel}
              ></button>
            </div>
            <div className="modal-body">
              <p>{message}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onCancel}>
                Cancelar
              </button>
              <button type="button" className="btn btn-primary" onClick={onConfirm}>
                {confirmText}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default ModalGenerico;