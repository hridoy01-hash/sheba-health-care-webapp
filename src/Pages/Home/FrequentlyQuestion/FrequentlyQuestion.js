import React from 'react';
import { Accordion, Container,} from 'react-bootstrap';
import faq from '../../../images/faq-img.jpg'
import './FrequentlyQuestion.css'
const FrequentlyQuestion = () => {
    return (
        <Container>
        <div>
     <p className="text-center text-muted mt-5">Want to tell Something?</p>
    <h3 className="text-center text-muted" style={{fontSize:"35px"}}> <span className="fw-bold text-danger" style={{fontSize:"35px"}}>Frequently Asked </span> Questions!</h3>
    <div className="mt-5">
        
        <div className="row">
            <div className=" col-sm-12 col-md-6">
            <img  src={faq}alt="" />
            </div>
            <div className="col-sm-12 col-md-6">
            <Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>What is Medi solution?</Accordion.Header>
    <Accordion.Body>
    Dedicated to serving individuals in many states; we believe our independence allows us to better serve you, the consumer. Through extensive research, our client base enjoys the fact that we educate them on a wide range of insurance products. Our plan of action entails that people don't just need a policy; they need a plan.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>How do I get a refill on my prescription?</Accordion.Header>
    <Accordion.Body>
    Educate them on a wide range of insurance products. Our plan of action entails that people don't just need a policy; they need a plan. The planning producers are composed of independent insurance professionals who offer high quality insurance, financial products, and services to the individual and business marketplace
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>How competent our total treatment?</Accordion.Header>
    <Accordion.Body>
    Our plan of action entails that people don't just need a policy; they need a plan. The planning producers are composed of independent insurance professionals who offer high quality insurance, financial products, and services to the individual and business
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>If I get sick what should I do?</Accordion.Header>
    <Accordion.Body>
     Range of insurance products. Our plan of action entails that people don't just need a policy; they need a plan. The planning producers are composed of independent insurance professionals who offer high quality insurance, financial products, and services to the individual and business marketplace
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>What is emergency cary to your hospital?</Accordion.Header>
    <Accordion.Body>
    The planning producers are composed of independent insurance professionals who offer high quality insurance, financial products, and services to the individual and business marketplace.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
       
          
          
     


            </div>
        </div>
    </div>

        </div>
        </Container>
    );
};

export default FrequentlyQuestion;