import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from '../config/firestore.ts'
import { useState } from "react";

interface Props {
  onClose: () => void;
  onConfirm: () => void;
  getUsuNome: (usuNome: string) => void;
  getEmail: (email: string) => void;
}

function LoginModal  (props : Props) {

  const [ emailInvalido, setEmailInvalido ] = useState(false)
  const [ senhaInvalida, setsenhaInvalida ] = useState(false)
  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {  
    e.preventDefault();
    
    const email = document.querySelector('#login-email') as HTMLInputElement;
    const senha = document.querySelector('#login-senha') as HTMLInputElement;

    // Adicionar Verificação de existência e Senha correta
    const q = query(collection(db, "usuario"), where("email", "==", email.value));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty){
      setEmailInvalido(true);
      return;
    } else {
      setEmailInvalido(false);
    }

    for (const doc of querySnapshot.docs) {
      
      if (doc.data().senha !== senha.value) {
        setsenhaInvalida(true);
        return;
      } else {
        setsenhaInvalida(false);
      }

      const usuNome = doc.data().nome
      props.getUsuNome(usuNome)
      props.getEmail(email.value)
    }
    

    props.onConfirm();
  }


  return (
    <>
      <div
      className="modal show d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <form onSubmit={handleLogin}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              { emailInvalido && 
                <div className="warning">
                  <img  src="src/assets/warning-sign-9769.svg"/ >
                  <p style={{paddingRight: "5px", paddingLeft: "5px", display: "flex", alignContent: "center", margin: "auto"}}>Email não cadastrado!</p>
                </div>
              }
              { !(emailInvalido) && senhaInvalida && 
                <div className="warning">
                  <img  src="src/assets/warning-sign-9769.svg"/ >
                  <p style={{paddingLeft: "5px", display: "flex", alignContent: "center", margin: "auto"}}>Senha incorreta!</p>
                </div>
              }              
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
            <div className="modal-body" style={{display: "grid"}}>
              <div style={{display: "grid"}}>
                <label htmlFor="email" className="mb-2">Digite seu email:</label>
                <input id="login-email" name="email" type="email" placeholder="Email" className="form-control mb-3" required/>
              </div>
              <div style={{display: "grid"}}>
              <label htmlFor="senha" className="mb-2">Digite sua senha:</label>
              <input id="login-senha" name="senha" type="password" placeholder="Senha" className="form-control mb-3" required/>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={props.onClose}
                >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                >
                Fazer Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default LoginModal;