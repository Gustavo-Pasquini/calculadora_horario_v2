import { updateDoc, doc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../config/firestore.ts';
import bcrypt from "bcryptjs-react";
import { useState, useEffect } from "react";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  email: string;
}

interface redefinirProps {
  email: string;
  redefinirSenha: (value: boolean) => void;
}

export function RedefinirSenha(props: redefinirProps) {
  const [carregando, setCarregando] = useState(false);
  const [senhaInvalida, setSenhaInvalida] = useState(false);
  const [senhaDiferente, setSenhaDiferente] = useState(false);
  const [senhaNovaDiferente, setSenhaNovaDiferente] = useState(false);

  const cachedEmail = localStorage.getItem("cachedEmail");

  const handleRedefinirSenha = async (e: React.FormEvent<HTMLFormElement>) => {  
    e.preventDefault();
    
    setCarregando(true);

    const senha = document.querySelector('#senha-atual') as HTMLInputElement
    const novaSenha = document.querySelector('#nova-senha') as HTMLInputElement
    const confNovaSenha = document.querySelector('#conf-nova-senha') as HTMLInputElement

    const q = query(collection(db, "usuario"), where("email", "==", cachedEmail ?? props.email));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty){
      setSenhaInvalida(true);
      setCarregando(false);
      return;
    } else {
      setSenhaInvalida(false);
    }

    console.log(cachedEmail ?? props.email)

    const senhaDB = querySnapshot.docs.map(doc => {
      return doc.data().senha;
    })

    const senhaDBCorreta = bcrypt.compareSync(senha.value, String(senhaDB[0]));

    console.log(senhaDB[0])
    console.log(senhaDBCorreta)

    if (!senhaDBCorreta){
      setSenhaInvalida(true);
      setCarregando(false);
      return;
    } else {
      setSenhaInvalida(false);
    }

    if (senha.value === novaSenha.value) {
      setSenhaDiferente(true);
      setCarregando(false);
      return;
    } else {
      setSenhaDiferente(false);
    }

    if (novaSenha.value !== confNovaSenha.value) {
      setSenhaNovaDiferente(true);
      setCarregando(false);
      return;
    } else {
      setSenhaNovaDiferente(false);
    }

    const saltRounds = Number(import.meta.env.VITE_SALT_ROUNDS);
    const novaSenhaCript = bcrypt.hashSync(novaSenha.value, saltRounds);

    try {
      await updateDoc(doc(db, "usuario", querySnapshot.docs[0].id) , {
        senha: novaSenhaCript
    });
      //console.log("Foi enviado!");
      //console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
    }

    setCarregando(false);
    alert("Senha Redefinida com sucesso!")
        
    props.redefinirSenha(false);
  }


  return (
    <>
      <div
        className="modal show d-block"
        tabIndex={-1}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
        <form onSubmit={handleRedefinirSenha}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                { senhaInvalida && 
                  <div className="warning">
                    <img  src="/assets/warning-sign-9769.svg"/ >
                    <p style={{paddingLeft: "5px", display: "flex", alignContent: "center", margin: "auto"}}>Senha atual incorreta!</p>
                  </div>
                }   
                { senhaDiferente && 
                  <div className="warning">
                    <img  src="/assets/warning-sign-9769.svg"/ >
                    <p style={{paddingLeft: "5px", display: "flex", alignContent: "center", margin: "auto"}}>Nova senha deve ser diferente da atual!</p>
                  </div>
                } 
                { senhaNovaDiferente && 
                  <div className="warning">
                    <img  src="/assets/warning-sign-9769.svg"/ >
                    <p style={{paddingLeft: "5px", display: "flex", alignContent: "center", margin: "auto"}}>Novas senhas diferentes!</p>
                  </div>
                }                    
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => props.redefinirSenha(false)}
                  disabled={carregando}
                ></button>
              </div>
              <div className="modal-body" style={{display: "grid"}}>
                <div style={{display: "grid"}}>
                  <label htmlFor="senhaAtual" className="mb-2">Digite sua senha atual:</label>
                  <input id="senha-atual" name="senhaAtual" type="password" placeholder="Senha Atual" className="form-control mb-3" required/>
                </div>
                <div style={{display: "grid"}}>
                <label htmlFor="novaSenha" className="mb-2">Digite sua nova senha:</label>
                <input id="nova-senha" name="novaSenha" type="password" placeholder="Nova Senha" className="form-control mb-3" required minLength={8}/>
                </div>
                <div style={{display: "grid"}}>
                <label htmlFor="confNovaSenha" className="mb-2">Confirme sua nova senha:</label>
                <input id="conf-nova-senha" name="confNovaSenha" type="password" placeholder="Confirme sua Senha" className="form-control mb-3" required minLength={8}/>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => props.redefinirSenha(false)}
                  disabled={carregando}
                  >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn btn-danger"
                  disabled={carregando}
                  >
                    {carregando ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Redefinindo...
                      </>
                    ) : (
                      "Redefinir Senha"
                    )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

function ConfigModal(props: Props) {
    if (!props.isOpen) return null;

    const cachedEmail = localStorage.getItem("cachedEmail")
  
    const configuraDados = async (descricaoObrigatoriaChecked: boolean, descricaoChecked: boolean, informaHorariosChecked: boolean): Promise<void> => {
  
        const email = cachedEmail ?? props.email;

        try {

            const q = query(
                collection(db, "usuario"),
                where("email", "==", email)
            );

            const querySnapshot = await getDocs(q);

            await updateDoc(doc(db, "usuario", querySnapshot.docs[0].id) , {
                descricaoObrigatoria: descricaoObrigatoriaChecked,
                mantemDescricao: descricaoChecked,
                informaHorariosCalculo: informaHorariosChecked,
            });

            setDescricaoObrigatoria(descricaoObrigatoriaChecked);
            setMantemDescricao(descricaoChecked);
            setInformaHorariosCalculo(informaHorariosChecked);

        } catch (error) {
            console.error("Erro ao atualizar configuração:", error);
        }
    };

    useEffect(() => {
        if (props.isOpen) {
          verificaConfiguracoes();
        }
    }, [props.isOpen]);

    const [descricaoObrigatoria, setDescricaoObrigatoria] = useState(false);
    const [mantemDescricao, setMantemDescricao] = useState(false);
    const [informaHorariosCalculo, setInformaHorariosCalculo] = useState(false);
    const verificaConfiguracoes = async () => {

        try {

            const q = query(
              collection(db, "usuario"),
              where("email", "==", cachedEmail ?? props.email)
            );
      
            const querySnapshot = await getDocs(q);
      
            setDescricaoObrigatoria(querySnapshot.docs[0].data().descricaoObrigatoria)
            setMantemDescricao(querySnapshot.docs[0].data().mantemDescricao);
            setInformaHorariosCalculo(querySnapshot.docs[0].data().informaHorariosCalculo)
          } catch (error) {
            console.error("Erro ao atualizar configuração:", error);
          }

    }

    const [redefinirSenha, setRedefinirSenha] = useState(false)

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
            <div className="modal-header" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h5 className="modal-title">Configurações</h5>  
                <div>
                  <span style={{fontSize: "10px", color: "#dd0000"}}>(recarregue a página para atualizar)</span>
                </div>    
            </div>
            <div className="modal-body" style={{minHeight: "300px"}}>
                <div className="form-check form-switch mt-5">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="descricaoObrigatoria" 
                        checked={descricaoObrigatoria}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => configuraDados(event.target.checked, mantemDescricao, informaHorariosCalculo)} 
                    />
                    <label className="form-check-label" htmlFor="mantemDescricao">Tornar obrigatório informar a descrição</label>
                </div>
                <div className="form-check form-switch mt-5">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="mantemDescricao" 
                        checked={mantemDescricao}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => configuraDados(descricaoObrigatoria, event.target.checked, informaHorariosCalculo)} 
                    />
                    <label className="form-check-label" htmlFor="mantemDescricao">Manter descrição ao adicionar horário</label>
                </div>
                <div className="form-check form-switch mt-5">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="informaHorariosCalculo" 
                        checked={informaHorariosCalculo}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => configuraDados(descricaoObrigatoria ,mantemDescricao, event.target.checked)} 
                    />
                    <label className="form-check-label" htmlFor="mantemDescricao">Informar horários para calcular hora</label>
                </div>
            </div>
            <div className="modal-footer">
            <button 
                type="button" 
                className="btn btn-danger" 
                onClick={() => setRedefinirSenha(true)}>
              Redefinir Senha
            </button>  
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
    { redefinirSenha && (
      <RedefinirSenha
        email={props.email}
        redefinirSenha={setRedefinirSenha}
      />
    )}
    </>
  )
}

export default ConfigModal;
