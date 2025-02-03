//import { collection, getDocs } from "firebase/firestore";
//import { db } from '../config/firestore.ts'
//import { useEffect, useState } from "react";

interface Props {
  onClose: () => void;
  onConfirm: () => void;
}

function LoginModal  (props : Props) {

  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {  
    props.onConfirm();
    
    e.preventDefault();
    
    // Adicionar Verificação de existência e Senha correta
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