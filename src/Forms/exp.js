import React from "react";
import Flavours from "./options"
import Form from 'react-bootstrap/Form';
const Fillings = [{flavour:"Salted Caramel", id:1}, {flavour:"Chocolate Ganache Cake", id:2}, {flavour:"Lotus", id:3}, {flavour:"None", id:4}]

const formOptions = Flavours.map(f => {
    return (
        <option value={f.id}>{f.flavour}</option>
    )
})
const fillingOptions = Fillings.map(f => {
  return (
      <option value={f.id}>{f.flavour}</option>
  )
})

