import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore"
import { db } from '../config/firestore.ts'
import bcrypt from "bcryptjs-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

interface Props {
  onClose: () => void;
  onConfirm: () => void;
  getUsuNome: (usuNome: string) => void;
  getEmail: (email: string) => void;
}

function LoginModal  (props : Props) {
  const [carregando, setCarregando] = useState(false);
  const [ emailInvalido, setEmailInvalido ] = useState(false)
  const [ senhaInvalida, setsenhaInvalida ] = useState(false)
  
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {  
    e.preventDefault();
    
    setCarregando(true);

    const email = document.querySelector('#login-email') as HTMLInputElement;
    const senha = document.querySelector('#login-senha') as HTMLInputElement;

    // Adicionar Verificação de existência e Senha correta
    const q = query(collection(db, "usuario"), where("email", "==", email.value));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty){
      setEmailInvalido(true);
      setCarregando(false);
      return;
    } else {
      setEmailInvalido(false);
    }

    for (const doc of querySnapshot.docs) {
      
      const validaSenha = bcrypt.compareSync(senha.value, doc.data().senha);

      if (!validaSenha) {
        setsenhaInvalida(true);
        setCarregando(false);
        return;
      } else {
        setsenhaInvalida(false);
      }

      const usuNome = doc.data().nome
      props.getUsuNome(usuNome)
      props.getEmail(email.value)
      localStorage.setItem("cachedEmail", email.value);
      localStorage.setItem("cachedUsuNome", usuNome)
    }
    
    setCarregando(false);

    props.onConfirm();
  }

  const redefinirSenha = async () => {
    if(carregando)
      return;

    setCarregando(true);

    const email = document.querySelector('#login-email') as HTMLInputElement;

    const q = query(collection(db, "usuario"), where("email", "==", email.value));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      alert("Digite um email válido no campo Email!");
      setCarregando(false);
      return;
    }

    const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "x", "y", "z", "d", "A", "B", "C", "D", "X", "Y", "Z", "@", "!", "&", "#"]
    let novaSenha = ""
    for (let i = 0; i < 10; i++) {
      const passwordChar = Math.floor(Math.random() * chars.length);
      novaSenha += chars[passwordChar];
    }

    const nome  = querySnapshot.docs[0].data().nome;

    const saltRounds = Number(import.meta.env.VITE_SALT_ROUNDS);
    const novaSenhaCript = bcrypt.hashSync(novaSenha, saltRounds);

    
    emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        novaSenha,
        email: email.value,
        nome,
      },
      import.meta.env.VITE_PUBLIC_KEY
      ).then(() => {
        alert(`Nova senha enviada para ${email.value}`);
      }).catch((err) => {
        console.error('Erro ao enviar:', err);
        setCarregando(false);
      });

      try {
        await updateDoc(doc(db, "usuario", querySnapshot.docs[0].id) , {
          senha: novaSenhaCript
      });
      } catch (error) {
        console.log(error);
        setCarregando(false);
      }

      setCarregando(false);
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
                  <img  src="/assets/warning-sign-9769.svg"/ >
                  <p style={{paddingRight: "5px", paddingLeft: "5px", display: "flex", alignContent: "center", margin: "auto"}}>Email não cadastrado!</p>
                </div>
              }
              { !(emailInvalido) && senhaInvalida && 
                <div className="warning">
                  <img  src="/assets/warning-sign-9769.svg"/ >
                  <p style={{paddingLeft: "5px", display: "flex", alignContent: "center", margin: "auto"}}>Senha incorreta!</p>
                </div>
              }              
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={props.onClose}
                disabled={carregando}
              ></button>
            </div>
              <div className="modal-body" style={{display: "grid"}}>
                <div style={{display: "grid"}}>
                  <label htmlFor="email" className="mb-2">Digite seu email:</label>
                  <input id="login-email" name="email" type="email" placeholder="Email" className="form-control mb-3" required/>
                </div>
                <div style={{display: "grid"}}>
                <label htmlFor="senha" className="mb-2">Digite sua senha:</label>
                <input id="login-senha" name="senha" type="password" placeholder="Senha" className="form-control mb-3"/>
                </div>
              </div>
              <div className="modal-footer d-flex" style={{justifyContent: "space-between"}}>
                <div>
                  <a href="#" style={{fontSize: "0.82rem"}} onClick={() => redefinirSenha()}>Esqueci minha senha!</a>
                </div>
                <div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={props.onClose}
                  disabled={carregando}
                  style={{marginRight: "1rem"}}
                  >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={carregando}
                  >
                  { carregando ? (
                    <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Logando
                      </>
                    )
                    :
                    "Fazer Login"
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default LoginModal;