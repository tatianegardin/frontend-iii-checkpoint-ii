import { render, screen } from "../../test-utils"
import Login from '../../../Routes/Login';
import Home from '../../../Routes/Home';
import Navbar from "../../../Components/Navbar";
import ScheduleForm from "../../../Components/ScheduleForm";
import ScheduleFormModal from "../../../Components/ScheduleFormModal";
import DetailCard from "../../../Components/DetailCard";

test('should show login form', async () => {
  render(<Login />)
  expect(screen.getByText('Login')).toBeInTheDocument();
});

test('Se o navbar foi Renderizado', async () => {

  render(<Navbar />)

  expect(screen.getByText('DH Odonto')).toBeInTheDocument()

});

test('Se o formulado de agendamento foi Renderizado', async () => {

  render(<ScheduleForm />)

  expect(screen.getByText('Dentist')).toBeInTheDocument()

});

test('Se a home foi Renderizado', async () => {

  render(<Home />)

  expect(screen.getByText('Home')).toBeInTheDocument()

});

test('Se o card de detalhe foi Renderizado', async () => {

  render(<DetailCard />)

  expect(screen.getByText('Detail about Dentist')).toBeInTheDocument()
  expect(screen.getByText('Nome:')).toBeInTheDocument()
  expect(screen.getByText('Sobrenome:')).toBeInTheDocument()
  expect(screen.getByText('Usuário:')).toBeInTheDocument()
});

test('Se o modal de agendamento foi Renderizado', async () => {

  render(<ScheduleFormModal />)

  expect(screen.getByText('Selecione o dentista, paciente e a data e hora')).toBeInTheDocument()

});