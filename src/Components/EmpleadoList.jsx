import ListGroup from "react-bootstrap/ListGroup";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = () => {
  return (
    <ListGroup>
        <EmpleadoRow></EmpleadoRow>
        <EmpleadoRow></EmpleadoRow>
        <EmpleadoRow></EmpleadoRow>
    </ListGroup>
  );
};

export default EmpleadoList;
