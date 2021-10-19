import React from 'react';
import { Container, Navbar,Button } from 'react-bootstrap';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/lofo.jpg'
import useAuth from '../../../hooks/useAuth';



const Header = () => {
    //NavLink Active Style
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        textDecoration:"none",
        fontSize:"20px",
        borderRadius:"4px"
        
    }

    const {user,logout} = useAuth();
    
    return (
        
        <div>
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
    <Container className="mt-3">
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <NavLink to="/home" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"black"}} activeStyle={activeStyle} >
       <img style={{height:"48px"}} src={logo} alt="" /> 
       <span>Sheba Health Care</span>
    </NavLink> 
    
    {/* NavLink for Route */}

    <Navbar.Collapse id="responsive-navbar-nav" className="me-auto nav-iteam justify-content-end">
    <NavLink to="/home" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"black"}} activeStyle={activeStyle} >Home</NavLink>
    
    <NavLink to="/about" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"black"}} activeStyle={activeStyle}>About </NavLink>
    <NavLink to="/meetdoctor" style={{textDecoration:"none",fontSize:"20px", marginRight:"10px",fontWeight:"bold",padding:"6px",color:"black"}} activeStyle={activeStyle}>Meet Doctors</NavLink>
   <Link to="/appoinment">
   <Button style={{color:"black",marginRight:"10px"}} variant="outline-primary"> Appointment <i className="fas fa-angle-double-right"></i></Button>
   </Link>
    <Link to="/login">
   { !user?.email? <Button style={{color:"black"}} variant="outline-primary">Login <i className="fas fa-sign-in-alt"></i></Button>:
   <Button onClick={logout} style={{color:"black"}} variant="outline-primary">Logout <i className="fas fa-user-plus"></i> {user.displayName}</Button>
   }
    </Link>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;