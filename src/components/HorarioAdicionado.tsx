import { useState } from "react";
import RemoveModal from "./RemoveModal";
import EditModal from "./EditModal";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../config/firestore.ts';

interface Props {
  observacaoAdicionada: HTMLInputElement | string;
  addedDate: string;
  addedTime: string;
  newHora: string;
  newMinuto: string;
  id: string;
  onRemove?: () => void;
  onEdit?: () => void;
}

function HorarioAdicionado(props: Props) {
  
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);

  const handleOpenEditModal = () => {
    setShowEditModal(true);
  }

  const handleCloseModal = () => setShowModal(false);

  const handleCloseEditModal = () => setShowEditModal(false);


  const handleConfirmRemove = () => {
    props.onRemove?.();
    setShowModal(false);
  };

  const handleSaveEditModal = async (observacao: string, email: string, hora: string, minuto: string, editado: boolean) => {


    if (props.id) {
    try {
      const q = doc(db, "horario", props.id);
      const querySnapshot = await getDoc(q);
        
        


        if (querySnapshot.exists()) {
          await updateDoc(q, {
            observacao,
            email,
            hora,
            minuto,
            editado
          });
        }
        
      } catch (error) {
        console.error("Erro ao atualizar configuração:", error);
      }
    }

    window.location.reload();
    
  }

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
          <p style={{ marginBottom: "0px" }}>{String(props.observacaoAdicionada).length > 0 ? `${props.observacaoAdicionada}:` : "Horário adicionado:"}</p>
          {props.onRemove && <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleOpenModal}
          />}
          {props.onEdit && 
            <button
              style={{ width: "24px", height: "24px", padding: "0", display: "flex", alignItems: "center", justifyContent: "center" }}
              className="btn"
              type="button"
              onClick={handleOpenEditModal}
            >
              <img
                src="/assets/edit.svg"
                alt="Editar"
              />
            </button>}
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
      {showEditModal && (
        <EditModal 
          onClose={handleCloseEditModal}
          onButtonClick={handleSaveEditModal}
          id={props.id}
        />
      )}
    </>
  );
}

export default HorarioAdicionado;