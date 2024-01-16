import { Image } from "react-bootstrap";

const EmpleadoAvatar = ({pic}) => {
  return (
    <Image
      src={pic}
      fluid
      roundedCircle
      className="avatar"
    ></Image>
  );
};

export default EmpleadoAvatar;
