import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import gifImg from "../icons/gid.gif"
const font = {
    fontFamily: 'ABeeZee, sans-serif'
  }
export default function FinalPage()
{
    const location = useLocation()
    var name = location.state.data.full_name
    var no = location.state.data.phone_number
    var email = location.state.data.email
    console.log(name)
    return(
        <div className="container-fluid py-2 px-5 d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "#f2aa64" }}>
            <img src={gifImg} width="400px" style={{ borderRadius: "15px", padding: "8px" }}/>            
            <h1 style={{fontFamily: 'Spline Sans, sans-serif'}}>We're preparing your order...</h1>
            <p style={font} className="lead"><span style={{fontWeight:"bold"}}>{name}</span> your order is placed</p>
            <p style={font} className="lead">We have shared your order details to <span style={{fontWeight:"bold"}}>{email}</span>!</p>
            <p style={font} className="lead"> <Link to="/" style={{color:"black", fontWeight:"bold",textDecoration:"none"}}>Return to home</Link> </p>
        </div>
    )
}