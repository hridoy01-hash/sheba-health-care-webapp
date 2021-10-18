import React from 'react';
import Baner from '../Baner/Baner';
import FrequentlyQuestion from '../FrequentlyQuestion/FrequentlyQuestion';
import NewsArticel from '../NewsArtical/NewsArticel';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Baner></Baner> 
            <Services></Services>
            <NewsArticel></NewsArticel>
            <FrequentlyQuestion></FrequentlyQuestion>  
        </div>
    );
};

export default Home;