import { ChangeEvent, useState } from "react";

interface Props {
  onButtonClick: (date: string, time: string, hora: string, minuto: string) => void;
}

function EntradaDados(props: Props) {

  let [ selectInputTime, setInputTime ] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTime(event.target.value);
  };

  return (
    <>
      <div className="text-bg-success">
        <h2 className="text-center p-5">Calculadora de Horários:</h2>
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

        setInputTime("");
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
              className="text-bg-primary rounded px-2"
              >Enviar
            </button>
          </div>
        </div> 
      </form>
    </>
  )
}

export default EntradaDados;