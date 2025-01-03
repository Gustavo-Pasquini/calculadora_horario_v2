import { useState } from "react";
import RemoveModal from "./RemoveModal";

interface Props {
  addedDate: string;
  addedTime: string;
  newHora: string;
  newMinuto: string;
  onRemove: () => void;
}

function HorarioAdicionado(props: Props) {
  
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);

  const handleCloseModal = () => setShowModal(false);

  const handleConfirmRemove = () => {
    props.onRemove();
    setShowModal(false);
  };

  return (
    <>
      <div
        className="rounded d-block"
        style={{ width: "300px", margin: "auto", marginBottom: "20px" }}
      >
        <div
          className="rounded-top p-2 d-flex text-bg-primary justify-content-between"
          style={{ width: "300px", margin: "auto" }}
        >
          <p style={{ marginBottom: "0px" }}>Horário adicionado:</p>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleOpenModal}
          />
        </div>
        <div className="px-2  rounded-bottom border border-primary">
          <span>
            {props.newHora}:{props.newMinuto}
          </span>
          <p style={{ fontSize: "12px", marginBottom: "2px" }}>
            Data: {props.addedDate}
          </p>
          <p style={{ fontSize: "12px", marginBottom: "2px" }}>
            Hora: {props.addedTime}
          </p>
        </div>
      </div>

      {showModal && (
        <RemoveModal
          onClose={handleCloseModal}
          onConfirm={handleConfirmRemove}
        />
      )}
    </>
  );
}

export default HorarioAdicionado;