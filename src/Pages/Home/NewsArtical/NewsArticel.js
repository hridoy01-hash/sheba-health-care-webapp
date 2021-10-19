import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import blog1 from '../../../images/blog-1.jpg'
import blog2 from '../../../images/blog-2.jpg'
import blog3 from '../../../images/blog-3.jpg'


const NewsArticel = () => {
    return (
        <div>
            <Container>
     <p className="text-center text-muted mt-5">Healthy Tips For Life Style</p>
    <h3 className="text-center text-muted" style={{fontSize:"35px"}}> <span className="fw-bold text-danger" style={{fontSize:"35px"}}>Latest News & </span> Articles!</h3>
    <div>
    <div className="row row-cols-1 row-cols-md-3  mt-5 mb-5">
  <div className="card">
  <Card.Img variant="top" src={blog1} />
    <div className="card-body">
      <h5 className="card-title">Daily Healthy Routine & Benefits From It</h5>
      <p className="card-text">At vero eos et accusamus et iusto odio dignissimos duci mus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non</p>
      <button className="btn btn-outline-success">Read More</button>
    </div>
    <div className="card-footer text-center">
      <small className="text-primary">Jun 25, 2021 | Devid Smith</small>
    </div>
  </div>
  <div className="card ps-3">
  <Card.Img variant="top" src={blog2} />
    <div className="card-body">
      <h5 className="card-title">Medical Health During Pandemic & After</h5>
      <p className="card-text">At vero eos et accusamus et iusto odio dignissimos duci mus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non</p>
      <button className="btn btn-outline-success">Read More</button>
    </div>
    <div className="card-footer text-center">
      <small className="text-primary">Jun 25, 2021 | Rojer Rosna</small>
    </div>
  </div>
  <div className="card ps-3">
  <Card.Img variant="top" src={blog3} />
    <div className="card-body">
      <h5 className="card-title">Tips From Neuro Surgeon In Your City</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <button className="btn btn-outline-success">Read More</button>
    </div>
    <div className="card-footer text-center">
      <small className="text-primary ">Jun 25, 2021 | Thomas Smith</small>
    </div>
  </div>
</div>
    </div>
    </Container>
        </div>
    );
};

export default NewsArticel;