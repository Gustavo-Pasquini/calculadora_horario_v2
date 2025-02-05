import { collection, query, where, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./config/firestore";
import { useEffect, useState } from "react";
import "./App.css";
import EntradaDados from "./components/EntradaDados";
import HorarioAdicionado from "./components/HorarioAdicionado";
import Totalizador from "./components/Totalizador";

interface Horario {
  id: any;
  observacao: string;
  email: string;
  date: string;
  time: string;
  hora: string;
  minuto: string;
}

function App() {
  const [horarios, setHorarios] = useState<Horario[]>([]);
  const [totalHoras, setTotalHoras] = useState("");
  const [totalMinutos, setTotalMinutos] = useState("");
  const [email, setEmail] = useState("");

  const widthDimension = window.innerWidth;

  // Função para atualizar o email vindo do componente EntradaDados
  const handleEmail = (email: string) => {
    setEmail(email);
  };

  useEffect(() => {
    setHorarios([])
  }, [email])

  // Função de login que busca os horários do banco para o email informado
  const handleLogin = async (email: string) => {
    if (!email) return;
  
    setTotalHoras("0");
    setTotalMinutos("0");
  
    try {
      const q = query(
        collection(db, "horario"),
        where("email", "==", email)
      );
  
      const querySnapshot = await getDocs(q);
  
      // Data de referência para filtragem (mês atual)
      const targetDate = new Date();
  
      const filteredHorarios: Horario[] = querySnapshot.docs
        .map(doc => {
          const data = doc.data() as { observacao?: string; date?: string; time?: string; hora?: string; minuto?: string };
          return { 
            id: doc.id,
            email, 
            observacao: data.observacao ?? "",
            date: data.date ?? "", 
            time: data.time ?? "", 
            hora: data.hora ?? "", 
            minuto: data.minuto ?? "" 
          };
        })
        .filter(item => {
          if (!item.date) return false; // Ignora itens sem data
  
          // Converte "dd/mm/aaaa" para "yyyy-mm-dd"
          const [day, month, year] = item.date.split("/");
          const isoDate = `${year}-${month}-${day}`;
          const itemDate = new Date(isoDate);
  
          return (
            itemDate.getFullYear() === targetDate.getFullYear() &&
            itemDate.getMonth() === targetDate.getMonth()
          );
        });
  
      setHorarios(filteredHorarios);  // Atualiza o estado com os horários e seus IDs
  
      // Recalcula os totais de horas e minutos
      let totalMinutosAntigos = 0;
      let totalHorasAntigas = 0;
  
      filteredHorarios.forEach(h => {
        totalMinutosAntigos += parseInt(h.minuto);
        totalHorasAntigas += parseInt(h.hora);
      });
  
      // Se os minutos ultrapassarem 60, converte para horas extras
      const minutosExtras = Math.floor(totalMinutosAntigos / 60);
      totalHorasAntigas += minutosExtras;
      totalMinutosAntigos = totalMinutosAntigos % 60;
  
      setTotalHoras(String(totalHorasAntigas));
      setTotalMinutos(String(totalMinutosAntigos));
  
    } catch (error) {
      console.error("Erro ao buscar horários:", error);
    }
  };

  // Executa a busca quando o email for definido (após login)
  useEffect(() => {
    handleLogin(email);
  }, [email]);

  // Ao enviar um novo horário, atualiza o array de horários e recalcula os totais
  const handleButtonClick = async (
    observacao: string,
    email: string,
    date: string,
    time: string,
    hora: string,
    minuto: string
  ) => {
    if ((hora !== "00" || minuto !== "00") && !isNaN(parseInt(hora)) && !isNaN(parseInt(minuto))) {
      try {

        if (email) {
          // Adiciona os dados ao Firestore
          const docRef = await addDoc(collection(db, "horario"), {
            observacao: observacao ?? '',
            email: email ?? '',
            date: date ?? '',
            time: time ?? '',
            hora: hora ?? '',
            minuto: minuto ?? ''
          });
          
          // Atualiza o estado após o Firestore confirmar a inserção
          setHorarios((prevHorarios) => [
            ...prevHorarios,
            { id: docRef.id, observacao, email, date, time, hora, minuto },
          ]);

        } else {
          setHorarios((prevHorarios) => [
            ...prevHorarios,
            { id: '', observacao, email, date, time, hora, minuto },
          ]);
        }
          
        // Calcula o novo total
        const totalMinutosAntigos = totalMinutos === "" ? 0 : parseInt(totalMinutos);
        const totalHorasAntigas = totalHoras === "" ? 0 : parseInt(totalHoras);
        const novoMinuto = parseInt(minuto);
        const novoHora = parseInt(hora);
  
        let somaMinutos = totalMinutosAntigos + novoMinuto;
        let somaHoras = totalHorasAntigas + novoHora;
  
        // Se os minutos ultrapassarem 60, converte para horas extras
        const minutosExtras = Math.floor(somaMinutos / 60);
        somaHoras += minutosExtras;
        somaMinutos = somaMinutos % 60;
  
        setTotalMinutos(String(somaMinutos));
        setTotalHoras(String(somaHoras));
  
        //console.log("Horário adicionado com sucesso!");
      } catch (error) {
        console.error("Erro ao adicionar horário:", error);
      }
    }
  };

  const handleCadastro = () => {
    //console.log("Cadastro Realizado");
  };

  // Remoção de um horário e atualização dos totais
  const handleRemove = async (index: number) => {
    try {
      // Obtém o horário que será removido
      const removedHorario = horarios[index];
  
      if (!removedHorario || !removedHorario.id) {
        setHorarios((prevHorarios) =>
        prevHorarios.filter((_, i) => i !== index)
        );
  
        // Recalcula os totais após a remoção
        let acumuladoMinutos = 0;
        let acumuladoHoras = 0;
    
        horarios.forEach((h, i) => {
          if (i !== index) {
            acumuladoMinutos += parseInt(h.minuto);
            acumuladoHoras += parseInt(h.hora);
          }
        });
  
        // Ajusta os minutos que ultrapassarem 60
        const extras = Math.floor(acumuladoMinutos / 60);
        acumuladoHoras += extras;
        acumuladoMinutos = acumuladoMinutos % 60;
    
        setTotalHoras(String(acumuladoHoras));
        setTotalMinutos(String(acumuladoMinutos));

        return;
      }
  
      // Remove do Firestore
      await deleteDoc(doc(db, "horario", removedHorario.id));
  
      //console.log("Horário removido do banco:", removedHorario);
  
      // Atualiza o estado removendo o item da lista
      setHorarios((prevHorarios) =>
        prevHorarios.filter((_, i) => i !== index)
      );
  
      // Recalcula os totais após a remoção
      let acumuladoMinutos = 0;
      let acumuladoHoras = 0;
  
      horarios.forEach((h, i) => {
        if (i !== index) {
          acumuladoMinutos += parseInt(h.minuto);
          acumuladoHoras += parseInt(h.hora);
        }
      });
  
      // Ajusta os minutos que ultrapassarem 60
      const extras = Math.floor(acumuladoMinutos / 60);
      acumuladoHoras += extras;
      acumuladoMinutos = acumuladoMinutos % 60;
  
      setTotalHoras(String(acumuladoHoras));
      setTotalMinutos(String(acumuladoMinutos));
    } catch (error) {
      console.error("Erro ao remover horário:", error);
    }
  };
  
  return (
    <>
      <EntradaDados
        getEmail={handleEmail}
        onButtonClick={handleButtonClick}
        onLogin={handleLogin}
        onCadastro={handleCadastro}
        setTotalHoras={setTotalHoras}
        setTotalMinutos={setTotalMinutos}
      />
      {widthDimension >= 700 && horarios.length > 0 ? (
        <div className="row">
          <div className="col">
            {horarios.map((horario, index) => (
              <HorarioAdicionado
                key={index}
                observacaoAdicionada={horario.observacao}
                addedDate={horario.date}
                addedTime={horario.time}
                newHora={horario.hora}
                newMinuto={horario.minuto}
                onRemove={() => handleRemove(index)}
              />
            ))}
          </div>
          <div className="col">
            <Totalizador
              totalHoras={totalHoras === "" ? "0" : totalHoras}
              totalMinutos={totalMinutos === "" ? "0" : totalMinutos}
            />
          </div>
        </div>
      ) : (
        <div>
          {horarios.map((horario, index) => (
            <HorarioAdicionado
              key={index}
              observacaoAdicionada={horario.observacao}
              addedDate={horario.date}
              addedTime={horario.time}
              newHora={horario.hora}
              newMinuto={horario.minuto}
              onRemove={() => handleRemove(index)}
            />
          ))}
          <Totalizador
            totalHoras={totalHoras === "" ? "0" : totalHoras}
            totalMinutos={totalMinutos === "" ? "0" : totalMinutos}
          />
        </div>
      )}
    </>
  );
}

export default App;