import React from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {Items} from "../products"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import { Modal, Card, ListGroup, ListGroupItem, Container} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const font = {
    fontFamily: 'ABeeZee, sans-serif'
  }

export default function Checkout(props)
{
    var finalcost = 0;
    const nav = useNavigate()
    const location = useLocation()
    const data = location.state?.data.arr

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
    const dataArr = data.map(item => {
        if (item.class === "cake") 
        {
          finalcost += item.price * item.cart_qty
          return (
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                    <Accordion.Header style={font}>
                        <img src={returnImg(item.name)} style={{ borderRadius: "2px", marginRight: "10px" }} height="50" width="50" alt="Item" />
                        {item.name} {item.cart_qty}x - {item.price * item.cart_qty} PKR
                    </Accordion.Header>
                        <Accordion.Body style={font}>
                            {item.cake_flavour} Flavour, {item.cake_base} Base, {item.cake_cream} Cream, {item.cake_filling} Filling, {item.price} PKR {item.instructions}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
          );
        }
        else if (item.class === "cupcake")
        {
            finalcost += item.price * item.cart_qty
          return(
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <img src={returnImg(item.name)} style={{ borderRadius: "2px", marginRight: "10px" }} height="50" width="50" alt="Item" />
                        {item.name} {item.cart_qty}x - {item.price * item.cart_qty} PKR
                    </Accordion.Header>

                        <Accordion.Body style={font}>
                            {item.cupcake_flavour} Flavour, {item.price} PKR {item.instructions}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
          )
        }
        else if (item.class === "cookie")
        {
            finalcost += item.price * item.cart_qty
          return(
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header style={font}>
                            <img src={returnImg("Cookies")} style={{borderRadius:"2px", marginRight: "10px" }} height="50" width="50" alt="Item" /> 
                            {item.cart_qty === 1 ? "Cookie" : "Cookies"} {item.cart_qty}x - {item.price * item.cart_qty} PKR
                        </Accordion.Header>
                        <Accordion.Body style={font}>
                            {item.price} PKR <br/> {item.instructions}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
          )
        }
        else if (item.class === "cheesecake")
        {
            finalcost += item.price * item.cart_qty
          return(
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header style={font}>
                            <img src={returnImg("Cheesecakes")} style={{borderRadius:"2px"}} height="50" width="50" alt="Item" />
                            {item.cart_qty === 1 ? "Cheesecake" : "Cheesecakes"} {item.cart_qty}x - {item.price * item.cart_qty} PKR
                        </Accordion.Header>
                        <Accordion.Body style={font}>
                            {item.cheesecake_flavour} Flavour, {item.price} PKR {item.instructions}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
          )
        }})

    const [formData, setFormData] = React.useState(
    {
        full_name:"",
        phone_number: "",
        email:""
    })
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        nav("/final", {state: {data:formData}})    
    }
    return(
        <>           
            <div className="container-fluid py-3 px-5" style={{ minHeight: "100vh", backgroundColor: "#f2aa64" }}>
      <h1 className="py-3" style={{ fontFamily: 'Spline Sans, sans-serif' }}>Checkout</h1>
      <Row className="px-2">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label style={{ ...font, color: "#3c1e10" }}>Fullname</Form.Label>
              <Form.Control
                placeholder="Fullname"
                autoComplete="false"
                name="full_name"
                required
                value={formData.full_name}
                onChange={handleChange}
                style={{ ...font, backgroundColor: "#ffcf96", border: "none" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ ...font, color: "#3c1e10" }}>Phone number</Form.Label>
              <Form.Control
                placeholder="Phone number"
                autoComplete="false"
                name="phone_number"
                required
                value={formData.phone_number}
                onChange={handleChange}
                style={{ ...font, backgroundColor: "#ffcf96", border: "none" }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ ...font, color: "#3c1e10" }}>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                autoComplete="false"
                required
                value={formData.email}
                onChange={handleChange}
                style={{ ...font, backgroundColor: "#ffcf96", border: "none" }}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col className="py-2"xs={12} md={4}>
          <h3 style={{ fontFamily: 'Spline Sans, sans-serif', color: "#3c1e10" }}>Shopping Cart - <span>{finalcost} PKR</span></h3>
          <div>
            {dataArr}
          </div>
        </Col>
      </Row>
    </div>
 
        </>
    )
}