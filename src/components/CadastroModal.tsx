import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firestore.ts'
import bcrypt from "bcryptjs-react";
import { useState } from 'react';
import '../global.css';

interface Props {
    onClose: () => void;
    onConfirm: () => void;
  }
  
  function CadastroModal (props : Props) {
  
    const [ erroSenha, setErroSenha ] = useState(false)
    const [ emailExistente, setEmailExistente ] = useState(false)

    const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {  
      e.preventDefault();

      
      const nome = document.querySelector('#cadastro-nome') as HTMLInputElement
      const email = document.querySelector('#cadastro-email') as HTMLInputElement
      const senha = document.querySelector('#cadastro-senha') as HTMLInputElement
      const confSenha = document.querySelector('#cadastro-confSenha') as HTMLInputElement

      const q = query(collection(db, "usuario"), where("email", "==", email.value));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty){
        setEmailExistente(true);
        return;
      } else {
        setEmailExistente(false);
      }

      if (confSenha.value !== senha.value) {
        setErroSenha(true)
        return;
      } else {
        setErroSenha(false)
      }

      const saltRounds = import.meta.env.VITE_SALT_ROUNDS;

      const senhaCript = bcrypt.hashSync(senha.value, saltRounds);

      try {
        await addDoc(collection(db, "usuario"), {
          nome: nome?.value ?? '',
          email: email?.value ?? '',
          senha: senhaCript ?? '',
          mantemDescricao: false
        });
        //console.log("Foi enviado!");
        //console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.log(error);
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
        <form onSubmit={handleCadastro}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cadastro</h5>
                { erroSenha && 
                <div className="warning">
                  <img  src="/assets/warning-sign-9769.svg"/ >
                  <p style={{paddingRight: "5px", paddingLeft: "5px", display: "flex", alignContent: "center", margin: "auto"}}>Senhas diferentes!</p>
                </div>
                }
                { emailExistente && 
                <div className="warning">
                  <img  src="/assets/warning-sign-9769.svg"/ >
                  <p style={{paddingRight: "5px", paddingLeft: "5px", display: "flex", alignContent: "center", margin: "auto"}}>Email já cadastrado!</p>
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
                  <label htmlFor="Nome" className="mb-2">Digite seu Nome:</label>
                  <input id="cadastro-nome" name="nome" type="name" placeholder="Nome de Usuário" className="form-control mb-3" required minLength={3} />
                </div>
                <div style={{display: "grid"}}>
                  <label htmlFor="email" className="mb-2">Digite seu email:</label>
                  <input id="cadastro-email" name="email" type="email" placeholder="Email" className="form-control mb-3" required />
                </div>
                <div style={{display: "grid"}}>
                <label htmlFor="senha" className="mb-2">Digite sua senha:</label>
                <input id="cadastro-senha" name="senha" type="password" placeholder="Senha" className="form-control mb-3" required minLength={8}/>
                </div>
                <div style={{display: "grid"}}>
                <label htmlFor="confSenha" className="mb-2">Confirme sua senha:</label>
                <input id="cadastro-confSenha" name="confSenha" type="password" placeholder="Confirme sua Senha" className="form-control mb-3" required minLength={8}/>
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
                  Fazer Cadastro
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      </>
    )
  }
  
  export default CadastroModal;