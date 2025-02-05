import React from "react";

interface Resumo {
  key: string;
  month: string;
  year: string;
  totalHoras: string;
  totalMinutos: string;
}

interface ResumoModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumos: Resumo[];
}

const ResumoModal: React.FC<ResumoModalProps> = ({ isOpen, onClose, resumos }) => {
  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Resumo de Horários por Mês</h5>
          </div>
          <div className="modal-body">
            {resumos.length > 0 ? (
              resumos.map((resumo) => (
                <div key={resumo.key} style={{ padding: "5px 0", borderBottom: "1px solid #ddd" }}>
                  <strong>{resumo.month} de {resumo.year}</strong> | {resumo.totalHoras}:{resumo.totalMinutos.padStart(2, "0")} horas
                </div>
              ))
            ) : (
              <p>Nenhum resumo encontrado.</p>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumoModal;
