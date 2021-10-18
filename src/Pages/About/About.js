import React from 'react';
import { Carousel, Container, Image,Button } from 'react-bootstrap';
import './About.css'
import medical from '../../images/medical.jpg'
import client1 from '../../images/client1.jpg'
import client2 from '../../images/client2.jpg'
import client3 from '../../images/client3.jpg'

const About = () => {
    return (
        <div>
            <h3 className="text-center text-muted"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Get Know </span> Us</h3>
             <Container className="mt-5">
            <div className="row">
                <div className="col-md-7 ">
                     <h3>Mission Statement</h3>
                     <p>To provide patient-centered healthcare with excellence in quality, service, and access.</p>
                     <br />
                     <h3>Vision Statement</h3>
                     <p>A hospital in which all people achieve their full potential for health and well-being across the lifespan.  We work to be trusted by patients, a valued partner in the community, and creators of positive change.</p>
                     <br />
                     <h3>Values Statements</h3>
                     <p>Our Relationship with the People We Serve:
                    The patient always comes first. We are dedicated to patient care.
                    We treat each person with respect and dignity.
                    We are compassionate listeners. We hear the issues of our patients, respect them, and do everything in our power to help.
                    We provide patient-centered service. People who come to the Grace Health can expect polite, friendly helpful staff members who relate to each person as an individual, recognizing their history, relationships, culture, and needs. We go the extra mile to meet their expectations.
                    We keep ourselves well educated so that we can apply new developments in our fields. We use innovative approaches to health care and customer service.
                    </p>
                    <Button variant="outline-success">See More About</Button>

                </div>
                <div className="col-md-5 mt-3">

                 <img style={{width:"550px",height:"450px"}} src={medical} alt="" />

                </div>
            </div>
            {/* client Review Section */}

            <div className="text-center mt-5 mb-5">
    <p className="text-center text-muted mt-3">Our Happy Client Says About Us</p>
    <h3 className="text-center text-muted"> <span className="fw-bold text-danger" style={{fontSize:"30px"}}>Client </span> Reviews</h3>
                
    <Carousel style={{border:"2px solid green",margin:"5px",padding:"10px"}} className="mt-5">
  <Carousel.Item>
      <Image style={{height:"250px",width:"250px"}} src={client1}  roundedCircle  />
      <h3>Hridoy Ahmed</h3>
      <p>"better done when in an academic context and with an ongoing project to carry out the exercices for. If you don't have access to a university library, you will be very limited, but the course presents some alternatives for us professionals who are still interested "</p>
  </Carousel.Item>
  <Carousel.Item>
      <Image  style={{height:"250px",width:"250px"}} src={client2} roundedCircle />
      <h3>Nabil Muhit</h3>
      <p>"comprehensive and easy to understand. The instructors made sure that they are giving the information in a way that won't make me confused. Thank you so much for this great course! "</p>

  </Carousel.Item>
  <Carousel.Item>
      <Image style={{height:"250px",width:"250px"}} src={client3}roundedCircle  />
      <h3>Rokibul Hasan</h3>
      <p>" About this hospital you to the basic elements of academic information seeking - we will explore the search process from defining a strategy to evaluating and documenting your
      search results. Attending the course will make you a proficient information seeker."</p>
  </Carousel.Item>
</Carousel>
                
           </div>
            </Container>
        </div>
    );
};

export default About;