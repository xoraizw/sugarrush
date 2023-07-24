import React, { useEffect, useState } from 'react';
import { Modal, Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Items} from "../products"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const colorstyle = {
  backgroundColor:"#fdf2e7"
}
const font = {
  fontFamily: 'ABeeZee, sans-serif'
}
function returnImg(name)
{
  let prefix = "./images/"
  for (var x = 0; x < Items.length; x++)
  {
    if (Items[x].name === name)
    {
      return prefix + Items[x].img
    }
  }
}
export default function Cart(props)
{
  const nav = useNavigate()
  const arr = props.data
  const [show, setShow] = useState(false);

  const [totalPrice, setTotalPrice] = React.useState(0);

  function handleTotal()
  {
    let total = 0;
    arr.map(item => total += item.price * item.cart_qty)
    setTotalPrice(total)
  }
  useEffect(()=>{handleTotal()})

  function handleRemove(item)
  {
    const newarr = arr.filter(curr => {
      if (JSON.stringify(curr) != JSON.stringify(item))
      {
        return curr;
      }
    })
    props.setCart(newarr)
  }

  function routeFunc()
  {
    nav("/checkout", {state: {data:{arr}}})
    handleClose()
  }
  const dataArr = arr.map(item => {
    if (item.class === "cake") 
    {
      return (
        <Card style={{...colorstyle, borderColor: "#904a3c"}}>
          <Card.Body>
            <Card.Text>
              <div className="d-flex justify-content-between" style={font}>
                <div>
                  <h5>{item.name}</h5>
                  <p>Price: {item.price} PKR</p>
                  <ListGroup>
                  <ListGroupItem style={{...colorstyle, border:"none"}}>{item.cake_flavour} Flavour, {item.cake_base} Base, {item.cake_cream} Cream, {item.cake_filling} Filling</ListGroupItem>
                    {item.instructions != "" && <ListGroupItem style={{...colorstyle, border:"none"}}>Instructions: {item.instructions}</ListGroupItem>}
                </ListGroup>
                </div>
                <div>
                  <img src={returnImg(item.name)} style={{borderRadius:"7px"}} height="150" width="150" alt="Item" />
                </div>
              </div>          
              <p style={{...font, fontWeight: "bold"}}>Total: {item.price * item.cart_qty}</p>
              <ListGroup>
                <ListGroupItem style={{...colorstyle, borderColor:"#904a3c"}} className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif', color:"white"}} variant="outline-secondary" onClick={() => props.handleChange(item, "+")}>+</Button>
                    <span style={font} className="mx-2">{item.cart_qty}</span>
                    <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif', color:"white"}} variant="outline-secondary" onClick={() => props.handleChange(item, "-")}>-</Button>
                  </div>
                  <Button variant="outline-danger" onClick={() => handleRemove(item)}>Remove</Button>
                </ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }
    else if (item.class === "cupcake")
    {
      return(
        <Card style={{...colorstyle, borderColor: "#904a3c"}}>
          <Card.Body>
            <Card.Text>
              <div className="d-flex justify-content-between" style={font}>
                <div>
                  <h5>{item.name}</h5>
                  <p>Price: {item.price} PKR</p>
                  <ListGroup>
                  <ListGroupItem style={{...colorstyle, border:"none"}}>{item.cupcake_flavour} Flavour</ListGroupItem>
                  {item.instructions != "" && <ListGroupItem style={{...colorstyle, border:"none"}}>Instructions: {item.instructions}</ListGroupItem>}
                  </ListGroup>
                </div>
                <div>
                  <img src={returnImg(item.name)} style={{borderRadius:"7px"}} height="150" width="150" alt="Item" />
                </div>
              </div>      
              <p style={{...font, fontWeight: "bold"}}>Total: {item.price * item.cart_qty}</p>
              <ListGroup>
                <ListGroupItem style={{...colorstyle, borderColor:"#904a3c"}} className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif', color:"white"}} variant="outline-secondary" onClick={() => props.handleChange(item, "+")}>+</Button>
                    <span style={font} className="mx-2">{item.cart_qty}</span>
                    <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif', color:"white"}} variant="outline-secondary" onClick={() => props.handleChange(item, "-")}>-</Button>
                  </div>
                  <Button variant="outline-danger" onClick={() => handleRemove(item)}>Remove</Button>
                </ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>        
        </Card>
      )
    }
    else if (item.class === "cookie")
    {
      return(
        <Card style={{...colorstyle, borderColor: "#904a3c"}}>
          <Card.Body>
            <Card.Text>
              <div className="d-flex justify-content-between" style={font}>
                <div>
                  <h5>Cookies</h5>
                  <ListGroup>
                    <ListGroupItem style={{...colorstyle, border:"none"}}>
                      Price: {item.price} PKR
                    </ListGroupItem>
                    {item.instructions != "" && <ListGroupItem style={{...colorstyle, border:"none"}}>Instructions: {item.instructions}</ListGroupItem>}
                  </ListGroup>
                </div>
                <div>
                  <img src={returnImg("Cookies")} style={{borderRadius:"7px"}} height="150" width="150" alt="Item" />
                </div>
              </div>
              <p style={{...font, fontWeight: "bold"}}>Total: {item.price * item.cart_qty}</p>
              <ListGroup>
                <ListGroupItem style={{...colorstyle, borderColor:"#904a3c"}} className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif', color:"white"}}  variant="outline-secondary" onClick={() => props.handleChange(item, "+")}>+</Button>
                    <span style={font} className="mx-2">{item.cart_qty}</span>
                    <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif', color:"white"}}  variant="outline-secondary" onClick={() => props.handleChange(item, "-")}>-</Button>
                  </div>
                  <Button variant="outline-danger" onClick={() => handleRemove(item)}>Remove</Button>
                </ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      )
    }
    else if (item.class === "cheesecake")
    {
      return(
        <Card style={{...colorstyle, borderColor: "#904a3c"}}>
          <Card.Body>
            <Card.Text>
              <div className="d-flex justify-content-between" style={font}>
                <div>
                  <h5>Cheesecake</h5>
                  <p>Price: {item.price} PKR</p>
                  <ListGroup>
                    <ListGroupItem style={{...colorstyle, border:"none"}}>{item.cheesecake_flavour} Flavour</ListGroupItem>
                      {item.instructions != "" && <ListGroupItem style={{...colorstyle, border:"none"}}>Instructions: {item.instructions}</ListGroupItem>}
                  </ListGroup>
                </div>
                <div>
                  <img src={returnImg("Cheesecakes")} style={{borderRadius:"7px"}}height="150" width="150" alt="Item" />
                </div>
              </div>
              <p style={{...font, fontWeight: "bold"}}>Total: {item.price * item.cart_qty}</p>
              <ListGroup>
                <ListGroupItem style={{...colorstyle, borderColor:"#904a3c"}} className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif', color:"white"}} variant="outline-secondary" onClick={() => props.handleChange(item, "+")}>+</Button>
                    <span style={font} className="mx-2">{item.cart_qty}</span>
                    <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif', color:"white"}} variant="outline-secondary" onClick={() => props.handleChange(item, "-")}>-</Button>
                  </div>
                  <Button variant="outline-danger" onClick={() => handleRemove(item)}>Remove</Button>
                </ListGroupItem>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      )
    }
  })
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <>
      <p onClick={handleShow} style={{ cursor: 'pointer'}}>Cart: {props.size}</p>
      <Modal show={show} onHide={handleClose} centered>
          <Modal.Header style={{...colorstyle, border:"none"}} closeButton>
            <Modal.Title style={{fontFamily: 'Spline Sans, sans-serif'}}>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body style={colorstyle}>
            {dataArr}
            {dataArr.length === 0 ? <h6>Add some items to get started</h6> : <h6>Total Price of your Cart Rs - {totalPrice}</h6>}
          </Modal.Body>
          <Modal.Footer style={colorstyle}>
            <Button variant="danger" onClick={() => props.clearAll()} style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif'}} >
              Clear Cart
            </Button>
            {props.size != 0 && <Button variant="outline" style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif', color:"white"}} onClick={() => routeFunc()}>Checkout</Button>}
          </Modal.Footer>
        </Modal>
      </>
  )
}

