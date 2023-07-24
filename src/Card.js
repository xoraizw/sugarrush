import React from "react";
import PopUp from "./Forms/Popup";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function Cards(props) {
  return (
    <Col xs={12} sm={6} md={4} lg={4} xl={4} className="mb-4">
      <Card className="m-3 shadow" style={{ backgroundColor: "#ffcf96", height: "100%" }}>
        <Card.Img src={`./images/${props.imgSrc}`} variant="top" style={{ objectFit: "cover", width: "100%", height: "300px" }} />
        <Card.Body style={{ overflow: "hidden", paddingTop: "10px", height: "120px" }}>
          <Card.Title style={{ fontFamily: 'ABeeZee, sans-serif', overflowWrap: "break-word", wordWrap: "break-word" }}>
            {props.name}
          </Card.Title>
          <Card.Text style={{ fontFamily: 'ABeeZee, sans-serif', overflowWrap: "break-word", wordWrap: "break-word" }}>
            {props.price} PKR
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "#ffcf96", borderTop: "none" }}>
          <PopUp itemClass={props.itemClass} name={props.name} price={props.price} handleClick={props.handleClick} />
        </Card.Footer>
      </Card>
    </Col>
  );
}
