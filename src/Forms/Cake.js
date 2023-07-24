import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Flavours from "./options"
const Fillings = [{flavour:"Salted Caramel", id:1}, {flavour:"Chocolate Ganache Cake", id:2}, {flavour:"Lotus", id:3}, {flavour:"None", id:4}]

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
  const fillingOptions = Fillings.map(f => {
    return (
      <option value={f.flavour} key={f.id}>
        {f.flavour}
      </option>
    );
  })

export default function CakeForm(props)
{
    var productQuantity = 1;

    const [formData, setFormData] = React.useState(
    {
        name: props.name,
        class: "cake",
        cake_flavour:"Choose flavour",
        cake_base:"Choose your Cake Base",
        cake_cream:"Choose your Buttercream",
        cake_filling:"Filling (100PKR extra /pound)",
        price: props.price,
        instructions:"",
        cart_qty:1
    })

    React.useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            cart_qty: productQuantity,
            price: productQuantity*(props.price)
        }));
    }, [productQuantity]);
    
    React.useEffect(() => {
        if (formData.cake_filling === "Filling (100PKR extra /pound)" || formData.cake_filling === "None")
        {
            setFormData(prevFormData => ({
                ...prevFormData,
                price: productQuantity*(props.price)
            }));
        }
        else
        {
            setFormData(prevFormData => ({
                ...prevFormData,
                price: productQuantity*(props.price + 100)
            }));
        }
    }, [formData.cake_filling]);

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
                name="cake_flavour"
                value={formData.cake_flavour}
                onChange={handleChange}
                style={font}
            >
                <option selected disabled style={font}>Choose flavour</option>
                {formOptions}
            </Form.Select>

            <Form.Select aria-label="Choose your Cake Base"
                name="cake_base"
                value={formData.cake_base}
                onChange={handleChange}
                style={font}
            >
                <option selected disabled style={font}>Choose your Cake Base</option>
                {formOptions}

            </Form.Select>
            <Form.Select aria-label="Choose your Buttercream"
                name="cake_cream"
                value={formData.cake_cream}
                onChange={handleChange}
                style={font}
            >
                <option selected disabled style={font}>Choose your Buttercream</option>
                {formOptions}
            </Form.Select>

            <Form.Select aria-label="Filling (100PKR extra /pound)"
                name="cake_filling"
                value={formData.cake_filling}
                onChange={handleChange}
                style={font}
            >
                <option selected disabled>Filling (100PKR extra /pound)</option>
                {fillingOptions}
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
            <p style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: "600"}}>{formData.price} PKR</p>
            <Button type="submit" style={{backgroundColor: "#904a3c", border:"none", fontFamily: 'ABeeZee, sans-serif'}} onClick={props.handleClose}>Add to Cart</Button>
    </Form>
    )
}