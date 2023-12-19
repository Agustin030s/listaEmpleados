import { ListGroup, Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

const EmpleadoList = () => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Row className="justify-content-center align-items-center">
          <Col lg="2" className="text-center">
            <Image
              src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
              fluid
              roundedCircle
              className="avatar"
            ></Image>
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
      <ListGroup.Item>Usuario 2</ListGroup.Item>
      <ListGroup.Item>Usuario 3</ListGroup.Item>
    </ListGroup>
  );
};

export default EmpleadoList;
