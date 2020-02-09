import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import face from '../../../assets/icons/face.png';

const Wrapper = styled.section`
    padding-top: 30px;
    padding-bottom: 50px;
    background: radial-gradient(1920.00px at 0% 50.31%, #2434A1 0%, #5075D6 51%, #2434A1 100%);    
    color: #FFFFFF;

    @media (min-width: 768px) {
        padding-top: 60px;
        padding-bottom: 90px;
    }
`
const Image = styled.img`
    width: 65px;
    margin-bottom: 30px;
`
const Text = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 35px;
    text-align: center;
`;

const Create = () => {
    return (
        <Wrapper>
            <div className="container flexbox col align-center">
                <Image src={face} alt='party-popper' />
                <Text>Free Lifetime Membership For <span className='color_dark-yellow'>The First 1000 Members!</span> </Text>
                <Button variant='primary' color='#2434A1' bg='#FFC651'>Create Free Account And Start Collaborating Today</Button>
            </div>
        </Wrapper>
    );
}

export default Create;