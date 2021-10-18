import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import './DetailsService.css'

const DetailsService = () => {
    const [details,setDetails]=useState();
    const {servicesId} = useParams();
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(response => response.json())
        .then(data =>{const details=data.find(detail=>(detail.serviceId) == servicesId)
          setDetails(details)
        });
    
      },[]);

    return (
        <div>
            <Container>
            <Row xs={1} md={2} >
    <Col>
      <Card>
        <Card.Img variant="top" src={details?.img} />
        <Card.Body>
          <Card.Title>{details?.name}</Card.Title>
          <Card.Text>
            {details?.discreption}
          </Card.Text>
          <Button className="fw-bold" variant="outline-success"><i className="icon fas fa-phone-square-alt"></i> Our Helpline </Button>
        </Card.Body>
      </Card>
    </Col>
  
          </Row>
          </Container>
        </div>
    );
};

export default DetailsService;