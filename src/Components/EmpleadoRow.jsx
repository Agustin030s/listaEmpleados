import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = () => {
  return (
    <ListGroup.Item className="py-2">
      <Row className="justify-content-center align-items-center">
        <Col lg="2" className="text-center">
          <EmpleadoAvatar></EmpleadoAvatar>
        </Col>
        <Col lg="10">
          <h3 className="text-center text-md-start">Usuario 1</h3>
          <div className="d-flex justify-content-center justify-content-md-start align-items-center">
            <p className="lead mb-2 me-2">CEO</p>
            <Badge bg="info" className="mb-2" pill>
              Bussines
            </Badge>
          </div>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default EmpleadoRow;
