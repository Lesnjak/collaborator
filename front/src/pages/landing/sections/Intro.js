import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import popper from '../../../assets/icons/party-popper.png';


const Wrapper = styled.section`
    padding-top: 40px;
    padding-bottom: 60px;
    background-color: #E5E5E5;
    color: #31384E;

    @media (min-width: 768px) {
        padding-top: 400px;
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
const Image = styled.img`
    display: block;
    margin: 80px auto 0;
`
const Paragraph = styled.p`
    margin-top: 50px;
    font-size: 14px;

    @media (min-width: 768px) {
        margin-top: 100px;
    }
`

const Intro = () => {
    return (
        <Wrapper className='text-center'>
            <div className='container flexbox col'>
                <Title className='bigger normal'>Easy as 1, 2, 3</Title>
                <Subtitle>Create your account, get collaborating and grow your business</Subtitle>
                <div className="flexbox at-desktop-row justify-around">
                    <Card
                        variant='profile'
                        title='Create your account'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni.'
                    />

                    <Card
                        variant='rating'
                        title='Find businesses like you'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
                    />

                    <Card
                        variant='dialog'
                        title='Start to collaborate'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.'
                    />
                </div>
                <Paragraph className='mt-100 usual'>Oh and did we mention..</Paragraph>
                <Image src={popper} alt='party-popper' />
                <p className="bigger normal color_bright-blue mt-30">We’re Offering A <span className='accent-color'>FREE Lifetime Membership</span> To The First <span className='accent-color'>1000 Members!</span></p>
            </div>
        </Wrapper>
    );
}

export default Intro;