import React from 'react';
import { FloatingLabel, Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
    <div className="w-50 mx-auto">   
       
    <p className="text-center text-muted mt-3 ">Want Conecetd with us?</p>
    <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Login</span> Please</h3>
  <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel>
  <p className="mt-2">Have not any Account? <Link to="/register">Register</Link> </p>
  <Button className="mt-3" variant="outline-primary">Confirm Login</Button> 
  <p className="text-center">----Or use one of these options----</p>
  <div className="d-flex justify-content-center mb-5 ">
  <Button className="mt-3 mb-3 me-5" variant="primary"><i className="fab fa-google"></i></Button>
  <Button className="mt-3 mb-3" variant="primary"><i className="fab fa-github"></i></Button>
  </div>
             

        </div>
    );
};

export default Login;