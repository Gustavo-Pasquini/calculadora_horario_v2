interface Props {
  onClose: () => void;
  onConfirm: () => void;
}

function RemoveModal(props: Props) {
  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirma Exclusão?</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={props.onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>Certeza que quer excluir este horário?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={props.onClose}
            >
              Fechar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.onConfirm}
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemoveModal;