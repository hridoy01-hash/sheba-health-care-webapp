import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Service.css'
const Service = (props) => {
    const {name,img,discreption,serviceId} = props.service
   
    return (
        <div className="Card">
            <Col>
      <Card className="text-center shadow mb-5 bg-body rounded" style={{minHeight:"400px"}}>
        <Card.Img variant="top" src={img} style={{height:"200px"}} />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text className="text-justify">
            {discreption.slice(0,98)}
          </Card.Text>
       <Link to={`/services/${serviceId}`}>
       <Button style={{color:"black"}} variant="outline-primary">Details More</Button>
       </Link>
       
   
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Service;