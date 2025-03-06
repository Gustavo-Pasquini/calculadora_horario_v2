import { ChangeEvent, useState } from "react";
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
}

interface PerfilProps {
  nome: string;
  isLogado: () => void;
  setMostrarResumo: (value: boolean) => void;
}

export function Perfil(props: PerfilProps) {
  const inicial = `${props.nome[0]?.toUpperCase() ?? ''}`;
  const backgroundColor = stringToColor(props.nome);
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
              Olá, {props.nome}
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


function EntradaDados(props: Props) {
  const [observacao, setObservacao] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [isLogado, setIsLogado] = useState(false);
  const [usuNome, setUsuNome] = useState('');
  const [email, setEmail] = useState('');

  const handleLoginClick = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);
  
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
  const handleExit = () => {
    setIsLogado(false);
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
      <div className="text-bg-success p-4" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", margin: "auto", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
        <div>
          {isLogado && (
            <div style={{ alignContent: "center" }}>
              <Perfil nome={usuNome} isLogado={handleExit} setMostrarResumo={props.setMostrarResumo} />
            </div>
          )}
        </div>
        <h2 style={{ padding: "20px", textAlign: "center", justifySelf: "center" }}>Calculadora de Horários:</h2>
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
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        let currentDate = new Date();
        let observacaoAdicionada = document.querySelector('#observacao') as HTMLInputElement;
        let observacao = observacaoAdicionada?.value ?? '';
        let addedDate = currentDate.toLocaleDateString();
        let addedTime = currentDate.toLocaleTimeString();
        let hora      = selectInputHour;
        let minuto    = selectInputMinute;
        let newHora = '';
        let newMinuto = '';
        { hora.length   < 2 ? newHora   = '0' + String(hora)   : newHora   = String(hora) }
        { minuto.length < 2 ? newMinuto = '0' + String(minuto) : newMinuto = String(minuto) }
        props.onButtonClick(observacao, email, addedDate, addedTime, newHora, newMinuto);
        setInputHour("");
        setInputMinute("");
        setObservacao('');
      }}>
        <div className="d-block" style={{ width: "300px", margin: "auto" }}>
          <div className="text-center input-group my-3">
            <span className="input-group-text" id="basic-addon1">Descrição:</span>
            <input 
              type="text" 
              className="form-control" 
              id="observacao" 
              placeholder="Descrição"
              value={observacao}
              onChange={handleObservacaoSubmit}
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
  );
}

export default EntradaDados;