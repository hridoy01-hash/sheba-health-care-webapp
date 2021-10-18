import React from 'react';
import './Footer.css'
import footer from '../../../images/lofo.jpg'
import { Container } from 'react-bootstrap';
const Footer = () => {
    return (
        <div className="footer">
            <Container className="mt-5 mb-5">
            <div className="row">
                <div className="col-md-4 text-white">
                    <img src={footer} style={{height:"100px",display:"block"}} alt="" />
                    <p className="text-align-justify">The best and most professional medical website templates for a quick and reliable launch of a physician, doctor, dentist, clinic, hospital and any other are provided here</p>
                    
                </div>
                <div className="col-md-2 text-white ms-5">
                  <h5>Site Navigation <i className="fas fa-angle-double-right"></i></h5>
                  
                    <p><i className="fas fa-arrow-right"></i> Neurology Services</p>
                    <p><i className="fas fa-arrow-right"></i> Doctors List</p>
                    <p><i className="fas fa-arrow-right"></i> News and Update</p>
                    <p><i className="fas fa-arrow-right"></i> Therapy Services</p>
                 
                </div>
                <div className="col-md-2 text-white ms-5">
                <h5>Explore More <i className="fas fa-location-arrow"></i></h5>
                  
                  <p><i className="fas fa-arrow-right"></i> Success Stroy</p>
                  <p><i className="fas fa-arrow-right"></i> Our Experts Doctors</p>
                  <p><i className="fas fa-arrow-right"></i> Our Emergency Services</p>
                  <p><i className="fas fa-arrow-right"></i> Contact Excutive</p>


                </div>
                <div className="col-md-2 text-white ms-5">
                <h5>Information <i className="fas fa-clinic-medical"></i></h5>
                  
                  <p><i className="fas fa-arrow-right"></i> Contact No.+123 456 7890</p>
                  <p><i className="fas fa-arrow-right"></i> Our Experts Doctors</p>
                  <p><i className="fas fa-arrow-right"></i> Email ID:info@example.com</p>
                  <p><i className="fas fa-arrow-right"></i>Dhanmondi,Dhaka-1216</p>
                  Follow Us <i className="fab fa-twitter"></i> <i className="fab fa-google-plus-g"></i> <i className="fab fa-facebook-square"></i>
                </div>
            </div>
           </Container> 
           <div className="text-center text-white">
               
               <p>© Copyright 2021 | Designed By <span style={{color:"red"}}>Hridoy Ahmed</span> | All Rights Reserved</p> 
              
           </div>
           
        </div>
    );
};

export default Footer;