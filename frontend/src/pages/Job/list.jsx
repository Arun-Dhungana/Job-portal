import { Create } from "../Application/Create";
import { useState } from "react";
import { Button } from "react-bootstrap";
export const List = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button variant="success" onClick={() => setModalShow(!modalShow)}>
        Apply
      </Button>

      <Create show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};
