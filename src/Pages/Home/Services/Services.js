import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('/fakeData.json')
        .then(response => response.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <Container className="mt-5">
            <Row xs={1} md={4} className="g-4">
                {
                    services.map(service =><Service service={service} key={service.serviceId} ></Service>)
                }

           </Row>
           </Container>
        </div>
    );
};

export default Services;