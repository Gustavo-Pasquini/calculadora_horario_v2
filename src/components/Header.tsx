import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import CadastroModal from "./CadastroModal";
import '../global.css';
import { stringToColor } from '../utils';

interface Props {
  onButtonClick: (observacao: string, email: string, date: string, time: string, hora: string, minuto: string) => void;
  onLogin: (email: string) => void;
  onCadastro: () => void;
  getEmail: (email: string) => void;
  setTotalHoras: (horas: string) => void;
  setTotalMinutos: (minutos: string) => void;
  setMostrarResumo: (value: boolean) => void;
  setMostrarConfig: (value: boolean) => void;
}

interface PerfilProps {
  nome: string;
  isLogado: () => void;
  setMostrarResumo: (value: boolean) => void;
  setMostrarConfig: (value: boolean) => void;
}

export function Perfil(props: PerfilProps) {
  const cachedNome = localStorage.getItem("cachedUsuNome");

  const inicial = `${cachedNome?.toUpperCase().slice(0, 1) ?? props.nome[0]?.toUpperCase() ?? ''}`;
  const backgroundColor = stringToColor(cachedNome ?? props.nome);
  const [ajusteUsuario, setAjusteUsuario] = useState(false);

  const handleUserClick = () => {
    setAjusteUsuario(!ajusteUsuario);
  };


  return (
    <>
      <div className="profile-image" style={{ backgroundColor, cursor: "pointer" }} onClick={handleUserClick}> 
        {inicial}
      </div>
      {ajusteUsuario && (
        <div style={{ backgroundColor: "white", width: "200px", borderRadius: '5px', zIndex: "1", position: "absolute", border: "1px solid #333" }}>
          <div style={{ borderBottom: "2px solid #ccc", paddingBottom: "5px" }}>
            <p style={{ color: "black", paddingLeft: "12px", paddingTop: "5px", marginBottom: "0", overflow: "hidden" }}>
              Olá, {cachedNome ?? props.nome}
            </p>
          </div>
          <button 
            className="btn" 
            type="button" 
            onClick={() => props.setMostrarResumo(true)} 
            style={{ display: "flex", width: "100%", justifyContent: "space-between", color: "black", border: "none" }}
          >
            Visualizar Horários  
            <img src="/assets/clock.svg" alt="Clock"/>
          </button> 
          <button 
            className="btn" 
            type="button" 
            onClick={() => props.setMostrarConfig(true)} 
            style={{ display: "flex", width: "100%", justifyContent: "space-between", color: "black", border: "none" }}
          >
            Opções  
            <img style={{width: "20px"}} src="/assets/settings-svgrepo-com.svg" alt="Exit"/>
          </button> 
          <button 
            className="btn" 
            type="button" 
            onClick={props.isLogado} 
            style={{ display: "flex", width: "100%", justifyContent: "space-between", color: "black", border: "none" }}
          >
            Sair  
            <img src="/assets/exit-svgrepo-com.svg" alt="Exit"/>
          </button> 
        </div>
      )}
    </>
  );
}


function Header(props: Props) {

  const [showLogin, setShowLogin] = useState(false);
  const [isLogado, setIsLogado] = useState(false);
  const [usuNome, setUsuNome] = useState('');
  const [email, setEmail] = useState('');

  const handleLoginClick = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);
  
  const cachedEmail = localStorage.getItem("cachedEmail");

  useEffect(() => {
    if (cachedEmail)
      handleLogin()
  }, [cachedEmail])

  const handleLogin = () => {
    props.onLogin(email);
    setIsLogado(true);
    setShowLogin(false);
  };
  
  const [showCadastro, setShowCadastro] = useState(false);
  const handleCadastroClick = () => setShowCadastro(true);
  const handleCloseCadastro = () => setShowCadastro(false);
  const handleCadastro = () => {
    props.onCadastro();
    setShowCadastro(false);
  };  
  
  const handleExit = () => {
    setIsLogado(false);
    localStorage.removeItem("cachedEmail");
    localStorage.removeItem("cachedUsuNome");
    setEmail('');
    props.getEmail('');
    props.setTotalHoras("0");
    props.setTotalMinutos("0");
  };
  
  function handleUsuNome(usuNome: string) {
    setUsuNome(usuNome);
  }
  
  function handleEmail(email: string) {
    setEmail(email);
    props.getEmail(email);
  }

  return (

    <>
      <header className="text-bg-success p-4 mb-5" style={{display: "grid", gridTemplateColumns: "1fr auto 1fr", margin: "auto", justifyContent: "space-between", alignItems: "center", position: "relative"}}>
        <div>
          {isLogado && (
            <div style={{ alignContent: "center" }}>
              <Perfil nome={usuNome} isLogado={handleExit} setMostrarResumo={props.setMostrarResumo} setMostrarConfig={props.setMostrarConfig}/>
            </div>
          )}
        </div>
          <h2 style={{ margin: "20px", textAlign: "center", justifySelf: "center" }}>Calculadora de Horários:</h2>
        <div style={{ display: "flex", gap: "10px", alignItems: "flex-end", flexDirection: "column" }}>
          {!isLogado && 
            <button type="button" className="btn btn-light" style={{ width: "100px" }} onClick={handleLoginClick}>
              Login
            </button>
          }
          {!isLogado && 
            <button type="button" className="btn btn-primary" style={{ width: "100px" }} onClick={handleCadastroClick}>
              Cadastro
            </button>
          }
        </div>
      </header>
      {showLogin && 
        <LoginModal
          getEmail={handleEmail}
          getUsuNome={handleUsuNome}
          onClose={handleCloseLogin}
          onConfirm={handleLogin}
        />
      }
      {showCadastro && 
        <CadastroModal 
          onClose={handleCloseCadastro}
          onConfirm={handleCadastro}
        />
      }
    </>

  )


}

export default Header;