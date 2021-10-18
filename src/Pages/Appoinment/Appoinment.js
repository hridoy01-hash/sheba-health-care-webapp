import React from 'react';
import { Form,Button } from 'react-bootstrap';

const Appoinment = () => {
    return (
        <div>
    <p className="text-center text-muted mt-3">WE ALWAYS READY HELPS YOU</p>
    <h3 className="text-center text-muted"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Book An</span> Appointment</h3>
    <div className="w-50 mx-auto">
            <Form>
  <Form.Group className="mb-3">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter First Name" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Lasr Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Enter Address" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Select Department</Form.Label>
    <Form.Select className="mb-3">
    <option>Default select</option>
    <option>Psychiatry</option>
    <option>Opthalmology</option>
    <option>Cardiology</option>
    <option>Immumnology</option>
    <option>Dental</option>
  </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Explain Your Problem</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Agree with Term and Condition" />
  </Form.Group>
  <Button className="mb-5" variant="primary" type="submit">
    Confirm Apoinment
  </Button>
</Form>
            </div>
        </div>
    );
};

export default Appoinment;