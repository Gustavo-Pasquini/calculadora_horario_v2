import { ChangeEvent, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../config/firestore.ts';

interface Props {
  onClose: () => void;
  onButtonClick: (observacao: string, email: string, hora: string, minuto: string, editado: boolean) => void;
  id: string;
}

function EditModal(props: Props) {
  const [observacao, setObservacao] = useState('');
  const [email, setEmail] = useState('');

  const cachedEmail = localStorage.getItem("cachedEmail");

  useEffect(() => {
    setEmail(cachedEmail ?? "");
  }, [])
  
  
  const [ selectInputHour, setInputHour ] = useState('');
  const [ selectInputMinute, setInputMinute ] = useState('');


  const onChangeHourInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputHour(event.target.value.replace(/[^0-9]/g, ""));
  }

  const onChangeMinuteInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputMinute(event.target.value.replace(/[6-9][0-9]|[^0-9]/g, ""));
  }

  const handleObservacaoSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    setObservacao(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      let hora      = selectInputHour;
      let minuto    = selectInputMinute;
      let newHora = '';
      let newMinuto = '';
      { hora.length   < 2 ? hora.length == 0 ? newHora = '00' : newHora   = '0' + hora   : newHora   = hora }
      { minuto.length < 2 ? minuto.length == 0 ? newMinuto = '00' : newMinuto = '0' + minuto : newMinuto = minuto }
      props.onButtonClick(observacao, cachedEmail ?? email, newHora, newMinuto, true);

      

  }

  const editarDadosHorario = async () => {
    if (props.id) {
    try {
      const q = doc(db, "horario", props.id);
      const querySnapshot = await getDoc(q);
        
        


        if (querySnapshot.exists()) {
          const data = querySnapshot.data();
          setInputHour(data.hora);
          setInputMinute(data.minuto);
          setObservacao(data.observacao);
        }
        
      } catch (error) {
        console.error("Erro ao atualizar configuração:", error);
      }
    }
  }

  useEffect(() => {
    editarDadosHorario();
  }, [])


  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={props.onClose}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="d-block" style={{ width: "300px", margin: "auto" }}>
                <div className="text-center input-group">
                  <span className="input-group-text" id="basic-addon1">Descrição:</span>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="observacao" 
                    placeholder="Descrição"
                    value={observacao}
                    onChange={handleObservacaoSubmit}
                    required={false}
                  />
                </div>
              </div>
              <div className="d-block mb-5" style={{ width: "300px", margin: "auto" }}>
                <div className="text-center input-group my-3 rounded" style={{padding: "10px", backgroundColor: "#f8f9fa", border: "solid #dee2e6", borderWidth: "1px"}}>
                  <span className="text mb-2" style={{fontWeight: "400", fontSize: "1rem"}}>Digite o tempo:</span>
                  <div className="d-flex mb-2" style={{alignItems: "center", justifyContent: "center", width: "100%"}}>
                    <input type="text" onChange={(e) => onChangeHourInput(e)} className="form-control text-center" value={selectInputHour} maxLength={2} placeholder="HH" />
                    <span className="mx-2">:</span>
                    <input type="text" onChange={(e) => onChangeMinuteInput(e)} className="form-control text-center" value={selectInputMinute} maxLength={2} placeholder="MM" />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn text-bg-primary"
                    style={{ width: "300px", margin: "auto" }}
                  >Enviar</button>
                </div>
              </div> 
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;