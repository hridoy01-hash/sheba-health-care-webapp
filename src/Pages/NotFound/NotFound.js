import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div  className="text-center text-danger mt-5 mb-3">
            <h3 className="text-danger text-center">404</h3>
            <p className="text-danger text-center">This Page Is Not Availale Right Now</p>
            <Link to="/home">
            <button className="btn btn-outline-primary ">Back Home</button>
            </Link>
        </div>
    );
};

export default NotFound;