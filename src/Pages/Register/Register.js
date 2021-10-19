import React from 'react';
import { FloatingLabel, Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const {handleGoogleSignIn,handleGithubSugnIn,handleEmail,handlePassword,handleSignup,handleName,error} = useAuth();
    return (
        <div className="w-50 mx-auto ">
    <p className="text-center text-muted mt-3">Fell Free Stay With Us</p>
    <h3 className="text-center text-muted"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Register</span> Please</h3>
  <FloatingLabel
    controlId="floatingInput"
    label="Enter Name"
    className="mb-3"
  >
    <Form.Control onBlur={handleName} type="text" placeholder="Enter Name" />
  </FloatingLabel>

  <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control onBlur={handleEmail} type="email" placeholder="name@example.com" />
  </FloatingLabel>
<p className="text-danger">{error}</p>
  <FloatingLabel onBlur={handlePassword} controlId="floatingPassword" label="Password">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel>
  <p className="mt-2">Already have an Account? <Link to="/login">Login</Link> </p>
  <Button onClick={handleSignup} className="mt-3" variant="outline-primary">Confirm Register</Button> 
  <p className="text-center">----Or use one of these options----</p>
  <div className="d-flex justify-content-center ">
  <Button onClick={handleGoogleSignIn} className="mt-3 mb-3 me-5" variant="primary"><i className="fab fa-google"></i></Button>
  <Button onClick={handleGithubSugnIn} className="mt-3 mb-3" variant="primary"><i className="fab fa-github"></i></Button>
  </div>
        </div>
    );
};

export default Register;