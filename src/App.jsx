import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmpleadoList from "./Components/EmpleadoList";
import { Container } from "react-bootstrap";

function App() {
  const empleados = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" },
    { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg" },
  ];

  return(
    <Container className="my-5">
      <EmpleadoList empleados={empleados}></EmpleadoList>
    </Container>
  );
}

export default App;
