import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const font = {
    fontFamily: 'ABeeZee, sans-serif'
  }

export default function CookieForm(props) {
    var productQuantity = 1;

    const [formData, setFormData] = React.useState(
    {
        name: props.name,
        class: "cookie",
        cookie_qty: productQuantity,
        price: props.price,
        instructions: "",
        cart_qty: productQuantity
    });

    function addOne()
    {
        setFormData(function (prev)
        {
            const new_qty = prev.cart_qty + 1
            productQuantity = new_qty
            return{
                ...prev,
                cookie_qty: new_qty,
                cart_qty: new_qty,
                cookie_price: (productQuantity*(props.price))
            }
        })
    }
    function removeOne()
    {
        setFormData(function (prev)
        {
            if (prev.cart_qty > 1)
            {
                const new_qty = prev.cart_qty - 1
                productQuantity = new_qty
                return{
                    ...prev,
                    cookie_qty: new_qty,
                    cart_qty: new_qty,
                    cookie_price: (productQuantity*(props.price))
                }
            }
            else
            {
                return {
                    ...prev
                }
            }
        })
    }
    
    useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            cookie_qty: productQuantity,
            cookie_price: (productQuantity*(props.price))
        }));
    }, [productQuantity]);

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.handleClick(formData)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{fontFamily: 'Josefin Sans, sans-serif'}}>Special instructions</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={1}
                    name="instructions"
                    value={formData.instructions}
                    onChange={handleChange}
                    style={font}
                />
            </Form.Group>
            <Form.Label column="true" sm="1">
                <Form.Group controlId="formName">
                    <Form.Label style={{fontFamily: 'Josefin Sans, sans-serif'}}>Quantity</Form.Label>
                    <Form.Control
                        type="text"
                        name="cookie_qty"
                        onChange={handleChange}
                        value={formData.cookie_qty}
                        placeholder={productQuantity}
                        style={font}
                        selected
                        disabled
                    />
                </Form.Group>
            </Form.Label>
            <Col sm="6">
                <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif'}}  sm="6" onClick={() => addOne()} className="mx-1">+</Button>
                <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif'}}  sm="6" onClick={() => removeOne()} className="mx-1">-</Button>
            </Col>
            <p>{formData.cookie_price} PKR</p>
            <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif'}}  type="submit" onClick={props.handleClose}>Add to Cart</Button>
        </Form>
    );
}
