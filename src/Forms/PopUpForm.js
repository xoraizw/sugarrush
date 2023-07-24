import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CakeForm from "./CakeForm"
import CookieForm from "./CookieForm"
import CookiesAndCheesecakeForm from "./CupCakeAndCheesecakeForm"

function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function renderForm(item)
  {
    if (item === "cake")
    {
      return <CakeForm />
    }
    else if (item === "cupcake" || item === "cheesecake")
    {
      return <CookiesAndCheesecakeForm />
    }
    else if (item === "cookie")
    {
      return <CookieForm/>
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Buy now
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Select variation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {renderForm(props.itemClass)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" >Add to Cart</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;