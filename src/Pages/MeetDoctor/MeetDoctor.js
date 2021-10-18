import React from 'react';
import { Card, Container } from 'react-bootstrap';
import doctor1 from '../../images/doctor1.jpg'
import doctor2 from '../../images/doctor2.jpg'
import doctor3 from '../../images/doctor3.jpg'
import doctor4 from '../../images/doctor4.jpg'
import doctor5 from '../../images/doctor5.jpg'
import doctor6 from '../../images/doctor6.jpg'


const MeetDoctor = () => {
    return (
        <div className="mt-3">
     <p className="text-center text-muted mt-3">MEET OUR DOCOTS</p>
    <h3 className="text-center text-muted"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Professional &</span> Enthusiastic</h3>
    <div>
        <Container>
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col shadow-lg p-3 mb-5 bg-body rounded">
    <div class="card">
    <Card.Img variant="top" src={doctor1} />
      <div class="card-body text-center">
        <h5 class="card-title">Dr.Helan</h5>
        <p class="card-text">Hematology is the branch of medicine concerned with the study of the cause, prognosis,treatment</p>
        <button type="button" class="btn btn-outline-success">Book Your Slot</button>
      </div>
    </div>
  </div>
  <div class="col shadow-lg p-3 mb-5 bg-body rounded">
    <div class="card">
    <Card.Img variant="top" src={doctor2} />
      <div class="card-body text-center">
        <h5 class="card-title">Dr.Rosana Rose</h5>
        <p class="card-text">Aurthopay is the branch of medicine concerned with the study of the cause, prognosis,treatment,bl</p>
        <button type="button" class="btn btn-outline-success">Book Your Slot</button>
      </div>
    </div>
  </div>
  <div class="col shadow-lg p-3 mb-5 bg-body rounded">
    <div class="card">
    <Card.Img variant="top" src={doctor3} />
      <div class="card-body text-center">
        <h5 class="card-title">Dr.David Jem</h5>
        <p class="card-text">Immoinoly is the branch of medicine concerned with the study of the cause, prognosis,treatment</p>
        <button type="button" class="btn btn-outline-success">Book Your Slot</button>
      </div>
    </div>
  </div>
  <div class="col shadow-lg p-3 mb-5 bg-body rounded">
    <div class="card">
    <Card.Img variant="top" src={doctor4} />
      <div class="card-body text-center">
        <h5 class="card-title">Dr.Ken Wiliyamson</h5>
        <p class="card-text">Dematology is the branch of medicine concerned with the study of the cause, prognosis,treatment.</p>
        <button type="button" class="btn btn-outline-success">Book Your Slot</button>
      </div>
    </div>
  </div>
  <div class="col shadow-lg p-3 mb-5 bg-body rounded">
    <div class="card">
    <Card.Img variant="top" src={doctor5} />
      <div class="card-body text-center">
        <h5 class="card-title">Dr.Rojer Fether</h5>
        <p class="card-text">Dentel Specialist is the branch of medicine concerned with the study of the cause, prognosis,treatment,bl</p>
        <button type="button" class="btn btn-outline-success">Book Your Slot</button>
      </div>
    </div>
  </div>
  <div class="col shadow-lg p-3 mb-5 bg-body rounded">
    <div class="card">
    <Card.Img variant="top" src={doctor6} />
      <div class="card-body text-center">
        <h5 class="card-title">Dr.Jon Kabir</h5>
        <p class="card-text">Heard Specialist is the branch of medicine concerned with the study of the cause, prognosis,treatment.</p>
        <button type="button" class="btn btn-outline-success">Book Your Slot</button>
      </div>
    </div>
  </div>
 
</div>
</Container>
    </div>
    
        </div>
    );
};

export default MeetDoctor;