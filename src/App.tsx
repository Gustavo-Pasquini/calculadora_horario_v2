// App.tsx
import { collection, query, where, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./config/firestore";
import { useEffect, useState } from "react";
import "./App.css";
import EntradaDados from "./components/EntradaDados";
import HorarioAdicionado from "./components/HorarioAdicionado";
import Totalizador from "./components/Totalizador";
import ResumoModal from "./components/ResumoModal";
import Footer from "./components/Footer";
import ConfigModal from "./components/ConfigModal";

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
  const [mostrarResumo, setMostrarResumo] = useState(false);
  const [mostrarConfig, setMostrarConfig] = useState(false);
  const [horarios, setHorarios] = useState<Horario[]>([]);
  const [totalHoras, setTotalHoras] = useState("");
  const [totalMinutos, setTotalMinutos] = useState("");
  const [email, setEmail] = useState("");

  const widthDimension = window.innerWidth;

  const cachedEmail = localStorage.getItem("cachedEmail");

  // Atualiza o email vindo de EntradaDados
  const handleEmail = (email: string) => {
    setEmail(email);
  };

  useEffect(() => {
    setHorarios([]);
  }, [email, cachedEmail]);

  const handleLogin = async (email: string) => {
    if (!(cachedEmail ?? email)) return;
    setTotalHoras("0");
    setTotalMinutos("0");
    try {
      const q = query(
        collection(db, "horario"),
        where("email", "==", cachedEmail ?? email)
      );
      const querySnapshot = await getDocs(q);
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
          if (!item.date) return false;
          const [day, month, year] = item.date.split("/");
          const isoDate = `${year}-${month}-${day}`;
          const itemDate = new Date(isoDate);
          return (
            itemDate.getFullYear() === targetDate.getFullYear() &&
            itemDate.getMonth() === targetDate.getMonth()
          );
        });
      setHorarios(filteredHorarios);
      let totalMinutosAntigos = 0;
      let totalHorasAntigas = 0;
      filteredHorarios.forEach(h => {
        totalMinutosAntigos += parseInt(h.minuto);
        totalHorasAntigas += parseInt(h.hora);
      });
      const minutosExtras = Math.floor(totalMinutosAntigos / 60);
      totalHorasAntigas += minutosExtras;
      totalMinutosAntigos = totalMinutosAntigos % 60;
      setTotalHoras(String(totalHorasAntigas));
      setTotalMinutos(String(totalMinutosAntigos));
    } catch (error) {
      console.error("Erro ao buscar horários:", error);
    }
  };

  useEffect(() => {
    handleLogin(cachedEmail ?? email);
  }, [cachedEmail, email]);

  const handleButtonClick = async (
    observacao: string,
    email: string,
    date: string,
    time: string,
    hora: string,
    minuto: string
  ) => {
    if ((parseInt(hora) !== 0 || parseInt(minuto) !== 0) && !isNaN(parseInt(hora)) && !isNaN(parseInt(minuto))) {
      try {
        if (email) {
          const docRef = await addDoc(collection(db, "horario"), {
            observacao: observacao ?? '',
            email: cachedEmail ?? email ??'',
            date: date ?? '',
            time: time ?? '',
            hora: hora ?? '',
            minuto: minuto ?? ''
          });
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
        const totalMinutosAntigos = totalMinutos === "" ? 0 : parseInt(totalMinutos);
        const totalHorasAntigas = totalHoras === "" ? 0 : parseInt(totalHoras);
        const novoMinuto = parseInt(minuto);
        const novoHora = parseInt(hora);
        let somaMinutos = totalMinutosAntigos + novoMinuto;
        let somaHoras = totalHorasAntigas + novoHora;
        const minutosExtras = Math.floor(somaMinutos / 60);
        somaHoras += minutosExtras;
        somaMinutos = somaMinutos % 60;
        setTotalMinutos(String(somaMinutos));
        setTotalHoras(String(somaHoras));
      } catch (error) {
        console.error("Erro ao adicionar horário:", error);
      }
    }
  };

  const handleCadastro = () => {
    // Lógica de cadastro, se necessário.
  };

  const handleRemove = async (index: number) => {
    try {
      const removedHorario = horarios[index];
      if (!removedHorario || !removedHorario.id) {
        setHorarios((prevHorarios) =>
          prevHorarios.filter((_, i) => i !== index)
        );
        let acumuladoMinutos = 0;
        let acumuladoHoras = 0;
        horarios.forEach((h, i) => {
          if (i !== index) {
            acumuladoMinutos += parseInt(h.minuto);
            acumuladoHoras += parseInt(h.hora);
          }
        });
        const extras = Math.floor(acumuladoMinutos / 60);
        acumuladoHoras += extras;
        acumuladoMinutos = acumuladoMinutos % 60;
        setTotalHoras(String(acumuladoHoras));
        setTotalMinutos(String(acumuladoMinutos));
        return;
      }
      await deleteDoc(doc(db, "horario", removedHorario.id));
      setHorarios((prevHorarios) =>
        prevHorarios.filter((_, i) => i !== index)
      );
      let acumuladoMinutos = 0;
      let acumuladoHoras = 0;
      horarios.forEach((h, i) => {
        if (i !== index) {
          acumuladoMinutos += parseInt(h.minuto);
          acumuladoHoras += parseInt(h.hora);
        }
      });
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
    <div className="app-container">
      <div className="content">
        <EntradaDados
          getEmail={handleEmail}
          onButtonClick={handleButtonClick}
          onLogin={handleLogin}
          onCadastro={handleCadastro}
          setTotalHoras={setTotalHoras}
          setTotalMinutos={setTotalMinutos}
          setMostrarResumo={setMostrarResumo}
          setMostrarConfig={setMostrarConfig}
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
        {mostrarResumo && (
          <ResumoModal
            isOpen={mostrarResumo}
            onClose={() => setMostrarResumo(false)}
            email={email}
          />   
        )}
        {mostrarConfig && (
          <ConfigModal
          isOpen={mostrarConfig}
          onClose={() => setMostrarConfig(false)}
          email={email}
        />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
