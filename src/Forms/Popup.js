import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CakeForm from "./Cake"
import CookieForm from "./Cookie"
import CheeseCakeForm from "./Cheesecake"
import CupCakeForm from "./CupCake"
  
const colorstyle = {
  backgroundColor:"#fdf2e7"
}
const font = {
  fontFamily: 'ABeeZee, sans-serif'
}
function Example(props) {
  const [show, setShow] = React.useState(false);  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function renderForm(item) 
  {
    if (item === "cake")
    {
      return(
      <CakeForm handleClose={handleClose} name={props.name} price={props.price} handleClick={props.handleClick}/>
      )
    }
    else if (item === "cupcake")
    {
      return(
      <CupCakeForm handleClose={handleClose} name={props.name} price={props.price} handleClick={props.handleClick}/>
      )
    }
    else if (item === "cookie")
    {
      return(
      <CookieForm handleClose={handleClose} price={props.price} handleClick={props.handleClick}/>
      )
    }
    else if (item === "cheesecake")
    {
      return(
      <CheeseCakeForm handleClose={handleClose} price={props.price} handleClick={props.handleClick}/>
      )
    }
  }
  return (
    <>
      <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif'}} onClick={handleShow}>
        Buy now
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}        
      >
        <Modal.Header closeButton style={colorstyle}>
          <Modal.Title style={{fontFamily: 'Josefin Sans, sans-serif'}}>Select variation</Modal.Title>
        </Modal.Header>
        <Modal.Body style={colorstyle}>
          {renderForm(props.itemClass)}
        </Modal.Body>
        <Modal.Footer style={colorstyle}>
          <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif'}} variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example;