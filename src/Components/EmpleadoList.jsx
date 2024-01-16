import ListGroup from "react-bootstrap/ListGroup";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = ({empleados}) => {

  return (
    <ListGroup>
      {empleados.map((empleado) => <EmpleadoRow empleado={empleado}></EmpleadoRow>)}
    </ListGroup>
  );
};

export default EmpleadoList;
