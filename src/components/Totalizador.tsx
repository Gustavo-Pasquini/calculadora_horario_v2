interface Props {
    totalHoras: string;
    totalMinutos: string;
  }

function Totalizador(props: Props) {


    return (
      <>
        <div className="text-center rounded border border-success" style={{width: "300px", margin: "auto"}}>
          <h3 className="text-bg-success p-3 rounded-top">Total de horas:</h3>
          <p>{parseInt(props.totalHoras) < 10 ? '0' + props.totalHoras : props.totalHoras}:{parseInt(props.totalMinutos) < 10 ? '0' + props.totalMinutos : props.totalMinutos}</p>    
        </div>
      </>  
    )
}

export default Totalizador