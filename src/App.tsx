import { useState } from 'react'
import './App.css'
import EntradaDados from './components/EntradaDados'
import HorarioAdicionado from './components/HorarioAdicionado'
import Totalizador from './components/Totalizador'

function App() {

  let [ horarios, setHorarios ] = useState<{ date: string, time: string, hora: string, minuto: string}[]>([])
  let [ totalHoras, setTotalHoras] = useState('')
  let [ totalMinutos, setTotalMinutos] = useState('')  
  
  const widthDimension = window.innerWidth;

  const handleButtonClick = (date: string, time: string, hora: string, minuto: string) => {
    console.log(Number.isNaN(parseInt(hora)))
    console.log(Number.isNaN(parseInt(minuto)))
    {(hora !== '00' || minuto !== '00') && !(Number.isNaN(parseInt(hora)) || Number.isNaN(parseInt(minuto))) && setHorarios((prevHorarios) => [
      ...prevHorarios,
      { date, time, hora, minuto }
    ])};

    console.log(minuto)
    let minutosRestantes = 0;
    {totalMinutos === '' ?
      minutosRestantes = parseInt(minuto) 
      :
      minutosRestantes = (parseInt(totalMinutos) + parseInt(minuto))% 60}

    let horasExtras = Math.floor((parseInt(totalMinutos) + parseInt(minuto))/ 60);


      if (!Number.isNaN(parseInt(hora)) && !Number.isNaN(parseInt(minuto))) {

        setTotalMinutos(String(minutosRestantes)) 

        if (totalHoras === '') {
          setTotalHoras(String(parseInt(hora)));
        } else {
          setTotalHoras((prev) => 
            String(parseInt(prev) + parseInt(hora) + horasExtras)
          );
        }
      }

  };

  const handleRemove = (index: number) => {
    const removedHorario = horarios[index];
    setHorarios((prevHorarios) => prevHorarios.filter((_, i) => i !== index));

    setTotalMinutos((prevMinutos) => {
      const minutosAtualizados = parseInt(prevMinutos) - parseInt(removedHorario.minuto);
  
      if (minutosAtualizados < 0) {
        setTotalHoras((prevHoras) => String(parseInt(prevHoras) - parseInt(removedHorario.hora) - 1));
        return String(60 + minutosAtualizados);
      } else {
        setTotalHoras((prevHoras) => String(parseInt(prevHoras) - parseInt(removedHorario.hora)));
        return String(minutosAtualizados);
      }
    });
  };

  return (
    <>
      <EntradaDados 
        onButtonClick={handleButtonClick}
      />
      {widthDimension >= 700 && horarios.length > 0 ? 
      <div className="row">
        <div className="col">
          {horarios.length > 0 && horarios.map((horario, index) => (
            <HorarioAdicionado 
              key={index}
              addedDate={horario.date} 
              addedTime={horario.time} 
              newHora={horario.hora} 
              newMinuto={horario.minuto}
              onRemove={() => handleRemove(index)}
            />
          ))}
        </div>
        <div className="col">
          <Totalizador totalHoras={totalHoras === '' ? '0' : totalHoras} totalMinutos={totalMinutos === '' ? '0' : totalMinutos}/>
        </div>
      </div>
      :
      <div>
          {horarios.length > 0 && horarios.map((horario, index) => (
            <HorarioAdicionado 
              key={index}
              addedDate={horario.date} 
              addedTime={horario.time} 
              newHora={horario.hora} 
              newMinuto={horario.minuto}
              onRemove={() => handleRemove(index)}
            />
          ))}
          <Totalizador totalHoras={totalHoras === '' ? '0' : totalHoras} totalMinutos={totalMinutos === '' ? '0' : totalMinutos}/>
      </div>
      }
    </>
  )
}

export default App
