import React from 'react';
import bannerImg from '../assets/banner.png'
import PhoneContainer from '../Components/PhoneContainer';

const Home = () => {
    return (
        <div>
           <img src={bannerImg} alt="" />
           <PhoneContainer></PhoneContainer>
           
        </div>
    );
};

export default Home;