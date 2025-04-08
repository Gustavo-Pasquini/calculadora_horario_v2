import React, { useState } from "react";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firestore.ts";
import HorarioAdicionado from "./HorarioAdicionado.tsx";

interface Horario {
  id: any;
  observacao: string;
  email: string;
  date: string;
  time: string;
  hora: string;
  minuto: string;
}


const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica"
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  total: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid #ccc",
    paddingVertical: 4,
    fontSize: 12,
  },
  cell: {
    width: "25%"
  }
});

const ComprovantePDF = ({ horarios, usuNome }: { horarios: Horario[], usuNome: string }) => {
  //if (horarios.length > 0) {

    let totalHoras = 0;
    let totalMinutos = 0;
    
    horarios.forEach(h => {
      totalHoras += parseInt(h.hora) || 0;
      totalMinutos += parseInt(h.minuto) || 0;
    });
    
    const horasExtras = Math.floor(totalMinutos / 60);
    totalHoras += horasExtras;
    totalMinutos = totalMinutos % 60;
    
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.header}>Comprovante de Horas Trabalhadas</Text>
            <Text style={{ fontSize: 20, marginBottom: 15, textAlign: "center" }}>{usuNome}</Text>
            <Text style={{ fontSize: 14, marginBottom: 10, textAlign: "center" }}>
              Total: {totalHoras} hora{totalHoras !== 1 ? "s" : ""} e {totalMinutos} minuto{totalMinutos !== 1 ? "s" : ""}
            </Text>

            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 20, marginBottom: 10 }}>
              Detalhamento:
            </Text>

            {horarios.map((h, i) => (
              <View
              key={i}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 4,
                fontSize: 12,
              }}
              >
              <View style={styles.row}>
                <Text style={styles.cell}>{h.date}</Text>
                <Text style={styles.cell}>{h.time}</Text>
                <Text style={styles.cell}>{`${h.hora}h ${h.minuto}min`}</Text>
                <Text style={styles.cell}>{h.observacao || "-"}</Text>
              </View>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    );  
  //}
};

interface ResumoModalProps {
  isOpen: boolean;
  email: string;
  onClose: () => void;
}

const ResumoModal: React.FC<ResumoModalProps> = (props: ResumoModalProps) => {
  if (!props.isOpen) return null;

  const cachedEmail = localStorage.getItem("cachedEmail");
  
  const [horarios, setHorarios] = useState<Horario[]>([]);
  const [erroMes, setErroMes] = useState(false);
  const [erroAno, setErroAno] = useState(false);
  const [totalFilteredHoras, setTotalFilteredHoras] = useState(0);
  const [totalFilteredMinutos, setTotalFilteredMinutos] = useState(0);
  const [consultaFeita, setConsultaFeita] = useState(false);
  const [mesPDF, setMesPDF] = useState('');
  const [anoPDF, setAnoPDF] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const email = cachedEmail ?? props.email;

  
  // Função para filtrar os registros e calcular o total de horas e minutos
  const handleFiltroRegistros = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const mes = document.querySelector('#mes') as HTMLInputElement;
    const ano = document.querySelector('#ano') as HTMLInputElement;
    
    const mesInt = parseInt(mes.value);
    const anoInt = parseInt(ano.value);
    
    setNomeUsuario(localStorage.getItem("cachedUsuNome") ?? '');  
    setMesPDF(mesInt < 10 ? '0' + String(mesInt) : String(mesInt));
    setAnoPDF(String(anoInt));

    if (mesInt < 1 || mesInt > 12 || isNaN(mesInt)) {
      setErroMes(true);
      return;
    } else {
      setErroMes(false);
    }

    if (anoInt < 1989 || anoInt > 2300 || isNaN(anoInt)) {
      setErroAno(true);
      return;
    } else {
      setErroAno(false);
    }



    try {
      const q = query(
        collection(db, "horario"),
        where("email", "==", email)
      );
  
      const querySnapshot = await getDocs(q);
    
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
          const [ , month, year] = item.date.split("/");
          // O filtro compara o ano e o mês informados
          return (
            parseInt(year) === anoInt &&
            parseInt(month) === mesInt
          );
        });

      filteredHorarios.sort((a, b) => {
        const dataA = new Date(a.date.split("/").reverse().join("/") + " " + a.time);
        const dataB = new Date(b.date.split("/").reverse().join("/") + " " + b.time);
        return dataA.getTime() - dataB.getTime();
      });

      setHorarios(filteredHorarios);
      setConsultaFeita(true);

      // Calcula a soma das horas e minutos dos registros filtrados
      let somahoras = 0;
      let somaminutos = 0;
      filteredHorarios.forEach(item => {
        somahoras += parseInt(item.hora) || 0;
        somaminutos += parseInt(item.minuto) || 0;
      });
      
      // Se os minutos ultrapassarem 60, converte para horas extras
      const extra = Math.floor(somaminutos / 60);
      somahoras += extra;
      somaminutos = somaminutos % 60;
      
      setTotalFilteredHoras(somahoras);
      setTotalFilteredMinutos(somaminutos);

    } catch (error) {
      console.error("Erro ao buscar horários:", error);
    }
  };

  return (
    <div className="modal fade show d-block" tabIndex={-1} role="dialog" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Resumo de Horários por Mês</h5>
            { erroMes && 
                <div className="warning">
                  <img src="/assets/warning-sign-9769.svg" alt="Warning"/>
                  <p style={{ paddingRight: "5px", paddingLeft: "5px", display: "flex", alignItems: "center", margin: "auto" }}>
                    Mês inválido!
                  </p>
                </div>
            }
            { erroAno && 
                <div className="warning">
                  <img src="/assets/warning-sign-9769.svg" alt="Warning"/>
                  <p style={{ paddingRight: "5px", paddingLeft: "5px", display: "flex", alignItems: "center", margin: "auto" }}>
                    Ano inválido!
                  </p>
                </div>
            }
          </div>
          <div className="modal-body">
            <form onSubmit={handleFiltroRegistros}>
              <div className="row d-flex justify-content-between">
                <div className="col-5 text-center">
                  <div className="text-center input-group my-3">
                    <span className="input-group-text">Mês:</span>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="mes" 
                    />
                  </div>
                </div>
                <div className="col-5 text-center">
                  <div className="text-center input-group my-3">
                    <span className="input-group-text">Ano:</span>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="ano" 
                    />
                  </div>
                </div>
                <div className="col-2 text-end m-auto">
                  <button
                    type="submit"
                    className="btn rounded"
                    style={{ width: "50px", height: "40px", backgroundColor: "#e4e6ef" }}
                  >
                    <img src="/assets/filter.svg" alt="Filter"/> 
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-body" style={{ overflow: "auto", maxHeight: "400px", display: "flex", flexWrap: "wrap"}}>
            {horarios.length > 0 || !(consultaFeita) ? horarios.map((horario, index) => (
              <HorarioAdicionado
                key={index}
                observacaoAdicionada={horario.observacao}
                addedDate={horario.date}
                addedTime={horario.time}
                newHora={horario.hora}
                newMinuto={horario.minuto}
              />
            ))
            :
            <h5 className="d-flex justify-content-center">Nenhum horário encontrado!</h5>
          }
          </div>
          <div className="modal-footer">
            <div style={{ marginRight: "auto", marginLeft: "20px" }}>
              <strong>
                Total: {totalFilteredHoras} hora{totalFilteredHoras !== 1 ? "s" : ""} e {totalFilteredMinutos} minuto{totalFilteredMinutos !== 1 ? "s" : ""}
              </strong>
            </div>
            { horarios.length > 0 && (
              <PDFDownloadLink
              document={<ComprovantePDF horarios={horarios} usuNome={nomeUsuario} />}
              fileName={`horas-${nomeUsuario}-${mesPDF}-${anoPDF}`}
              style={{ textDecoration: "none" }}
              >
              {({ loading }) =>
                <button type="button" className="btn btn-success">
                  {loading ? "Gerando PDF..." : "Exportar"}
                </button>
              }
            </PDFDownloadLink>
            )}
            <button type="button" className="btn btn-secondary" onClick={props.onClose}>
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumoModal;
