import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoList from "./Components/EmpleadoList";
import { Container } from "react-bootstrap";

function App() {
  return(
    <Container className="my-5">
      <EmpleadoList></EmpleadoList>
    </Container>
  );
}

export default App;
