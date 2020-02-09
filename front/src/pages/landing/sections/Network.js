import React from 'react';
import styled from 'styled-components';

import Slider from '../components/Slider';
import Slide1 from '../components/Slide1';
import Slide2 from '../components/Slide2';
import Slide3 from '../components/Slide3';
import Slide4 from '../components/Slide4';
import Slide5 from '../components/Slide5';
import Slide6 from '../components/Slide6';



const Wrapper = styled.section`
    padding-top: 40px;
    padding-bottom: 60px;
    background-color: #E5E5E5;
    color: #31384E;

    @media (min-width: 768px) {
        padding-top: 90px;
        padding-bottom: 110px;
    }
`
const Title = styled.h3`
    padding-bottom: 8px;
    margin-bottom: 12px;
    text-align: center;

    &:after {
        display: block;
        width: 65px;
        height: 2px;
        background-color: #FFB10E;
        content: '';
        position: relative;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
    }
`
const Subtitle = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
`



const Network = () => {
    return (
        <Wrapper>
            <div className='container flexbox col'>
                <Title className='bigger normal'>The Network Designed To Help Small Businesses</Title>
                <Subtitle>Connect with each other and work together to take on the big guys</Subtitle>
                <Slider>
                    <Slide1 />
                    <Slide2 />
                    <Slide3 />
                    <Slide4 />
                    <Slide5 />
                    <Slide6 />
                </Slider>

            </div>
        </Wrapper>
    );
}

export default Network;