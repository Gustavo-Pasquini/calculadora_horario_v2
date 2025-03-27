import { updateDoc, doc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../config/firestore.ts';
import { useState, useEffect } from "react";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  email: string;
}

function ConfigModal(props: Props) {
    if (!props.isOpen) return null;
  
    const configuraManterDescricao = async (checked: boolean): Promise<void> => {
  
        const email = props.email;

        try {

            const q = query(
                collection(db, "usuario"),
                where("email", "==", email)
            );

            const querySnapshot = await getDocs(q);

            await updateDoc(doc(db, "usuario", querySnapshot.docs[0].id) , {
                mantemDescricao: checked,
            });

            setMantemDescricao(checked);
        } catch (error) {
            console.error("Erro ao atualizar configuração:", error);
        }
    };

    useEffect(() => {
        if (props.isOpen) {
          verificaConfiguracoes();
        }
    }, [props.isOpen]);

    const [mantemDescricao, setMantemDescricao] = useState(false);
    const verificaConfiguracoes = async () => {

        try {

            const q = query(
              collection(db, "usuario"),
              where("email", "==", props.email)
            );
      
            const querySnapshot = await getDocs(q);
      
            setMantemDescricao(querySnapshot.docs[0].data().mantemDescricao);
      
          } catch (error) {
            console.error("Erro ao atualizar configuração:", error);
          }

    }

  return (
    <>
      <div
      className="modal show d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <form>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Configurações</h5>      
            </div>
            <div className="modal-body" style={{minHeight: "300px"}}>
                <div className="form-check form-switch mt-5">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="mantemDescricao" 
                        checked={mantemDescricao}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => configuraManterDescricao(event.target.checked)} 
                    />
                    <label className="form-check-label" htmlFor="mantemDescricao">Manter descrição ao adicionar horário</label>
                </div>
            </div>
            <div className="modal-footer">
            <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={props.onClose}>
              Fechar
            </button>
            </div>
            </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default ConfigModal;
