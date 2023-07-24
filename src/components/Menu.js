import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from "../Card"
import {Items, itemsFunc} from "../products"


export default function Menu(props)
{
  const cakeCards = Items.map(item => 
  { 
    if (item.class === "cake")
    {
      return(
        <Card
          key = {item.id}
          name = {item.name}
          price = {item.price}
          imgSrc = {item.img}
          itemClass = {item.class}
          handleClick={props.handleClick}
        />   
      )
    }
  })
  const cupCakeCards = Items.map(item => 
  { 
    if (item.class === "cupcake")
    {
      return(
        <Card
          key = {item.id}
          name = {item.name}
          price = {item.price}
          imgSrc = {item.img}
          itemClass = {item.class}
          handleClick={props.handleClick}
        />
      )
    }
  })
  const cookieCards = Items.map(item => 
  { 
    if (item.class === "cookie")
    {
      return(
        <Card
          key = {item.id}
          name = {item.name}
          price = {item.price}
          imgSrc = {item.img}
          itemClass = {item.class}
          handleClick={props.handleClick}
        />
      )
    }
  })
  const cheesecakeCards = Items.map(item => 
  { 
    if (item.class === "cheesecake")
    {
      return(
        <Card
          key = {item.id}
          name = {item.name}
          price = {item.price}
          imgSrc = {item.img}
          itemClass = {item.class}
          handleClick={props.handleClick}
        />
      )
    }
  })
  return(
    <div id="menu-section" className='container-fluid px-4 py-5' style={{ backgroundColor: "#f2aa64", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}>
      <Container>
          <Row className="justify-content-md-center py-3">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{ color: "#fff0da", textAlign: "center", fontFamily: 'Spline Sans, sans-serif', fontWeight:"bold" }}>Cakes</h1>
          </Row>
          <Row className="justify-content-md-center">
              {cakeCards}
          </Row>
      </Container>
      <Container>
          <Row className="justify-content-md-center py-3">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{ color: "#fff0da", textAlign: "center", fontFamily: 'Spline Sans, sans-serif', fontWeight:"bold" }}>Cup Cakes</h1>
          </Row>
          <Row className="justify-content-md-center">
              {cupCakeCards}
          </Row>
      </Container>
      <Container>
          <Row className="justify-content-md-center py-3">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{ color: "#fff0da", textAlign: "center", fontFamily: 'Spline Sans, sans-serif', fontWeight:"bold" }}>Cookies</h1>
          </Row>
          <Row className="justify-content-md-center">
              {cookieCards}
          </Row>
      </Container>
      <Container>
          <Row className="justify-content-md-center py-3">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{ color: "#fff0da", textAlign: "center", fontFamily: 'Spline Sans, sans-serif', fontWeight:"bold" }}>Cheesecakes</h1>
          </Row>
          <Row className="justify-content-md-center">
              {cheesecakeCards}
          </Row>
      </Container>
    </div>

    )
}
