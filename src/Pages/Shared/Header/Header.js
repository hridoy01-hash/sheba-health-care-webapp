import React from 'react';
import { Container, Navbar,Button } from 'react-bootstrap';
import './Header.css'
import { NavLink } from 'react-router-dom';
import logo from '../../../images/lofo.jpg'



const Header = () => {
    //NavLink Active Style
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        textDecoration:"none",
        fontSize:"20px",
        borderRadius:"4px"
        
    }
    
    return (
        <div>
           <Navbar bg="light" variant="light">
    <Container className="mt-3">
    <NavLink to="/home">
       <img style={{height:"48px"}} src={logo} alt="" /> 
    </NavLink>
    <span>Sheba Health Care</span>
    
    {/* NavLink for Route */}

    <Navbar.Collapse className="me-auto nav-iteam justify-content-end">
    <NavLink to="/home" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"black"}} activeStyle={activeStyle} >Home</NavLink>
    
    <NavLink to="/services" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"black"}} activeStyle={activeStyle}>Service</NavLink>
    
    <NavLink to="/aboutus" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"black"}} activeStyle={activeStyle}>Meet Doctors</NavLink>
    
    <NavLink to="/registration" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"black"}} activeStyle={activeStyle}>About </NavLink>
    <Button style={{color:"black"}} variant="outline-primary">Book An Appointment <i className="fas fa-angle-double-right"></i></Button>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;