import { ChangeEvent, useState } from "react";
import LoginModal from "./LoginModal";
import CadastroModal from "./CadastroModal";
import '../global.css';
import { stringToColor } from '../utils';

interface Props {
  onButtonClick: (date: string, time: string, hora: string, minuto: string) => void;
  onLogin: () => void;
  onCadastro: () => void;
}

interface PerfilProps {
  nome: string;
  isLogado: () => void;
}

export function Perfil(props: PerfilProps) {
    const inicial = `${props.nome[0]?.toUpperCase() ?? ''}`;

    const backgroundColor = stringToColor(props.nome);

    const handleUserClick = () => {
      setAjusteUsuario(!(ajusteUsuario))
    }

    let [ ajusteUsuario, setAjusteUsuario ] = useState(false)

  
  return (
    <>
      <div className="profile-image" style={{ backgroundColor }} onClick={handleUserClick}> 
        {inicial}
      </div>

    { ajusteUsuario &&
      <div style={{backgroundColor: "white", width: "200px", borderRadius: '5px', zIndex: "1", position: "absolute", border: "1px solid #333"}}>
        <div style={{borderBottom: "2px solid #ccc", paddingBottom: "5px"}}>
        <p style={{color: "black", paddingLeft: "12px", paddingTop: "5px", marginBottom: "0", overflow: "hidden"}}>Olá, {props.nome}</p>
        </div>
        <button className="btn" type="button" onClick={props.isLogado} style={{display: "flex", width: "100%", justifyContent: "space-between", color: "black", border: "none"}}>
            Sair  
            <img src="src/assets/exit-svgrepo-com.svg"/>
        </button> 
      </div>
    }
    </>
  )
}


function EntradaDados(props: Props) {

  let [ selectInputTime, setInputTime ] = useState('00:00')

  let [ showLogin, setShowLogin ] = useState(false)

  const handleLoginClick = () => setShowLogin(true);

  const handleCloseLogin = () => setShowLogin(false);

  let [ isLogado, setIsLogado ] = useState(false)

  let [ usuNome, setUsuNome ] = useState('');

  const handleLogin = () => {
    setUsuNome(() => {
      const nomeUsuario = document.querySelector('#login-email') as HTMLInputElement //---Ajustar depois para pegar o Nome do cadastro !!!
      return nomeUsuario?.value ?? '';
    })
    props.onLogin();
    setIsLogado(true);
    setShowLogin(false);
  };
  

  let [ showCadastro, setShowCadastro ] = useState(false);

  const handleCadastroClick = () => setShowCadastro(true);

  const handleCloseCadastro = () => setShowCadastro(false);

  const handleCadastro = () => {
    props.onCadastro();
    setShowCadastro(false);
  };  

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTime(event.target.value);
  };

  const handleExit = () => {
    setIsLogado(false)
  }


  return (
    <>
      <div className="text-bg-success p-4" style={{display: "grid", gridTemplateColumns: "1fr auto 1fr", margin: "auto", justifyContent: "space-between", alignItems: "center", position: "relative"}}>
        <div>
        {isLogado &&
          <div style={{alignContent: "center"}}>
          <Perfil nome={usuNome} isLogado={handleExit}/>
          </div>
        }
        </div>
        <h2 style={{padding: "20px", textAlign: "center", justifySelf: "center"}}>Calculadora de Horários:</h2>
        <div style={{display: "flex", gap: "10px", alignItems: "flex-end", flexDirection: "column"}}>
        {!isLogado && 
          <button type="button" className="btn btn-light" style={{width: "100px"}} onClick={handleLoginClick}>
            Login
          </button>
        }
        {!isLogado && 
          <button type="button" className="btn btn-primary" style={{width: "100px"}} onClick={handleCadastroClick}>
            Cadastro
          </button>
        }
        </div>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
        
        let currentDate = new Date();

        let addedDate = currentDate.toLocaleDateString();
        let addedTime = currentDate.toLocaleTimeString();
        let hora      = parseInt(selectInputTime.slice(0, selectInputTime.indexOf(':')));
        let minuto    = parseInt(selectInputTime.slice(selectInputTime.indexOf(':') + 1));

        let newHora   = ''
        let newMinuto = ''

        { hora   < 10 ? newHora   = '0' + String(hora)   : newHora   = String(hora) }
        { minuto < 10 ? newMinuto = '0' + String(minuto) : newMinuto = String(minuto) }

        props.onButtonClick(addedDate, addedTime, newHora, newMinuto);

        setInputTime("00:00");
      }}>
        <div className="d-block mb-5" style={{width: "250px", margin: "auto"}}>
          <div className="text-center input-group my-3">
            <span className="input-group-text" id="basic-addon1">Digite o tempo:</span>
            <input 
            type="time" 
            className="form-control" 
            id="EntradaHorario" 
            value={selectInputTime}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className=" btn text-bg-primary"
              >Enviar
            </button>
          </div>
        </div> 
      </form>

      {showLogin && 
        <LoginModal
          onClose={handleCloseLogin}
          onConfirm={handleLogin}
        >

        </LoginModal>
      }

      { showCadastro &&
        <CadastroModal 
        onClose={handleCloseCadastro}
        onConfirm={handleCadastro}
        />
      }

    </>
  )
}

export default EntradaDados;