import React from 'react';
import { Form,Button} from 'react-bootstrap';

const Subscribe = () => {
    return (
        <div>
            <div>
    <p className="text-center text-muted mt-5">LETS STAY WITH US!!</p>
    <h3 className="text-center text-muted" style={{fontSize:"35px"}}> <span className="fw-bold text-danger" style={{fontSize:"35px"}}>Subscribe &  </span> Stay Updated!</h3>
    <div className="w-50 mx-auto text-center mt-5 mb-5">
    <Form.Floating className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type="email"
      placeholder="name@example.com"
    />
    <label htmlFor="floatingInputCustom">Email address</label>
    </Form.Floating>
    <Button variant="outline-warning">Lets Us <i class="fas fa-paper-plane"></i></Button>
    </div>
            </div>
        </div>
    );
};

export default Subscribe;