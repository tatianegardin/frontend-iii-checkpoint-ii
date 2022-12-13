import { useEffect, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import styles from "./ScheduleForm.module.css";

const ScheduleForm = () => {
  const [denstistas, setDentistas] = useState([])
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {

    fetch(`http://dhodonto.ctdprojetos.com.br/dentista`)
      .then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            setDentistas(data)
            console.log(data)
          })
        }
        else {
          alert("Dentistas não encontrado")
        }
      })

  }, []);

  useEffect(() => {

      fetch(`http://dhodonto.ctdprojetos.com.br/paciente`)
      .then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            setPacientes(data.body)
          })
        }
        else {
          alert("Pacientes não encontrado")
        }
      })

  }, []);

  const handleSubmit = (event) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    //obter os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro

    event.preventDefault()
  };

  const {theme, changeTheme} = useTheme()

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center container${theme}}`
        }
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentist
              </label>
              <select className="form-select" name="dentist" id="dentist">
                {denstistas.map(dentista => (
                  <option key={dentista.nome} value={dentista.matricula}>
                    {`${dentista.nome} ${dentista.sobrenome}`}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Patient
              </label>
              <select className="form-select" name="patient" id="patient">
                {pacientes.map(paciente => (
                  <option key={paciente.matricula} value={paciente.matricula}>
                    {`${paciente.nome} ${paciente.sobrenome}`}
                  </option>
                ))}

              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Date
              </label>
              <input
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn btn-light ${styles.button
                }`}
              type="submit"
              onClick={event => handleSubmit(event)}
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
