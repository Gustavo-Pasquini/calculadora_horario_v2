import { collection, query, where, getDocs, addDoc, deleteDoc, doc/*, updateDoc*/ } from "firebase/firestore";
import { db } from "./config/firestore";
import { useEffect, useState } from "react";
import "./App.css";
import EntradaDados from "./components/EntradaDados";
import HorarioAdicionado from "./components/HorarioAdicionado";
import Totalizador from "./components/Totalizador";
import ResumoModal from "./components/ResumoModal";
import Footer from "./components/Footer";
import ConfigModal from "./components/ConfigModal";
import Header from "./components/Header";

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
  const [loadingHorarios, setLoadingHorarios] = useState(false);
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
  //  adicionarCampoNovo();
  }, [email, cachedEmail]);

  // const adicionarCampoNovo = async () => {
  //   const querySnapshot = await getDocs(collection(db, "horario"));
  
  //   querySnapshot.forEach(async (documento) => {
  //     const docRef = doc(db, "horario", documento.id);
  
  //     try {
  //       await updateDoc(docRef, {
  //         editado: false  // novo campo que será adicionado
  //       });
  //       console.log(`Campo adicionado ao documento ${documento.id}`);
  //     } catch (error) {
  //       console.error(`Erro ao atualizar o documento ${documento.id}:`, error);
  //     }
  //   });
  // };

  const handleLogin = async (email: string) => {
    if (!(cachedEmail ?? email)) return;
    setTotalHoras("0");
    setTotalMinutos("0");
    try {

      setLoadingHorarios(true);

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

      filteredHorarios.sort((a, b) => {
        const dataA = new Date(a.date.split("/").reverse().join("/") + " " + a.time);
        const dataB = new Date(b.date.split("/").reverse().join("/") + " " + b.time);
        return dataB.getTime() - dataA.getTime(); 
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

    setLoadingHorarios(false);
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
            minuto: minuto ?? '',
            editado: false,
          });
          setHorarios((prevHorarios) => [
            { id: docRef.id, observacao, email, date, time, hora, minuto },
          ...prevHorarios,
          ]);
        } else {
          setHorarios((prevHorarios) => [
            { id: '', observacao, email, date, time, hora, minuto },
          ...prevHorarios,
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
        <Header
          getEmail={handleEmail}
          onButtonClick={handleButtonClick}
          onLogin={handleLogin}
          onCadastro={handleCadastro}
          setTotalHoras={setTotalHoras}
          setTotalMinutos={setTotalMinutos}
          setMostrarResumo={setMostrarResumo}
          setMostrarConfig={setMostrarConfig}
        />
        { loadingHorarios && (
          <div className="loading-container">
            <div className="spinner"></div>
            <span>Carregando os dados...</span>
          </div>
        )}
      <div className="content">
        {widthDimension >= 1000 && horarios.length > 0 ? (
          <div className="row">
            <div className="col horarios">
              {horarios.map((horario, index) => (
                <HorarioAdicionado
                  id={horario.id}
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
            <div className="col-md-auto">
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
            <div>
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
            </div>
            <div className="mb-5">
              <Totalizador
                totalHoras={totalHoras === "" ? "0" : totalHoras}
                totalMinutos={totalMinutos === "" ? "0" : totalMinutos}
                />
            </div>
            {horarios.map((horario, index) => (
              <HorarioAdicionado
                id={horario.id}
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
