import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import HeroGif from '../../../assets/gif/Collabbed_New_Logo.gif'

const Wrapper = styled.section`
    background: radial-gradient(1920.00px at 0% 50.31%, #2434A1 0%, #5075D6 51%, #2434A1 100%);
    color: #FFFFFF;    
    position: relative;    
    min-height: 100vh;

    @media (min-width: 768px) {
        display: block;
        padding-bottom: 260px;
        min-height: unset;
    }
`

const Title = styled.h1`
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 42px;
    margin-top: 214px;
    text-align: center;
`;

const SubTitle = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    margin-top: 20px;
    margin-bottom: 50px;
    text-align: center;
`;

const Animation = styled.img`
    position: absolute;
    bottom: -300px;
    width: 90%;
    max-width: 920px;
    max-height: 519px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
    border-radius: 7px;
`

const Hero = (props) => {
    const { toggleModalSignUp } = props;

    return (
        <Wrapper>
            <div className="container flexbox col align-center">
                <Title>Collaborate with businesses like you and <a href="#" className='accent-color bold'>reach more customers</a></Title>
                <SubTitle>Our service connects you with like-minded, similar, but non-competitive small businesses!</SubTitle>
                <Button variant='primary' color='#2434A1' bg='#FFC651' onClick={toggleModalSignUp}>Create Free Account</Button>
                <Animation src={HeroGif} alt='HeroGif' className="at-laptop-visible" />
            </div>
        </Wrapper>
    );
}

export default Hero;