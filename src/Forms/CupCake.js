import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Flavours from "./options"
import Col from 'react-bootstrap/Col';

const font = {
    fontFamily: 'ABeeZee, sans-serif'
  }
const formOptions = Flavours.map(f => {
    return (
      <option value={f.flavour} key={f.id}>
        {f.flavour}
      </option>
    );
  })
export default function CupCakeForm(props)
{
    var productQuantity = 1;

    const [formData, setFormData] = React.useState(
    {
        name: props.name,
        class: "cupcake",
        cupcake_flavour:"Choose flavour",
        price: props.price,
        instructions:"",
        cart_qty:1
    })

    function addOne()
    {
        setFormData(function (prev)
        {
            const new_qty = prev.cart_qty + 1
            productQuantity = new_qty
            return{
                ...prev,
                cart_qty: new_qty,
                price: (productQuantity*(props.price))
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
                    cart_qty: new_qty,
                    price: (productQuantity*(props.price))
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
    React.useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            cart_qty: productQuantity,
            price: (productQuantity*props.price)
        }));
    }, [productQuantity]);

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
        props.handleClick(formData)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Select aria-label="Choose your flavour"
            name="cupcake_flavour"
            value={formData.cupcake_flavour}
            onChange={handleChange}
            style={font}
        >
            <option selected disabled style={font}>Choose flavour</option>
            {formOptions}
        </Form.Select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{fontFamily: 'Josefin Sans, sans-serif'}}>Special instructions</Form.Label>
            <Form.Control as="textarea" rows={1} 
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                style={font}
            />
            </Form.Group>
            <Form.Label column="true" sm="6">
                <Form.Group controlId="formName">
                    <Form.Label style={{fontFamily: 'Josefin Sans, sans-serif'}}>Quantity</Form.Label>
                    <Form.Control
                        type="text"
                        name="cookie_qty"
                        onChange={handleChange}
                        value={formData.cart_qty}
                        placeholder={productQuantity}
                        selected
                        disabled
                    />
                </Form.Group>
            </Form.Label>
            <Col sm="6">
                <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif'}} sm="6" onClick={() => addOne()} className="mx-2">+</Button>
                <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif'}} sm="6" onClick={() => removeOne()} className="mx-2">-</Button>
            </Col>
            <p style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: "600"}}>{formData.price} PKR</p>
            <Button style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif'}} type="submit" onClick={props.handleClose}>Add to Cart</Button>
        </Form>
    )
}