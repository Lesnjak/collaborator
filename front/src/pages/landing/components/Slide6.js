import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar'
import Button from './Button'
import benjamen from '../../../assets/images/benjamin-parker.jpg'
import jessica from '../../../assets/images/jessica-felicio.jpg'

import TextField from './TextField';


const Heading = styled.h4`
    margin-top: 50px;

    @media (min-width: 1024px) {
        margin-top: 110px;
    }
`

const InfoText = styled.p`
    font-size: 14px;
    line-height: 26px;
    margin-top: 30px;
`

const CardContainer = styled.div`
    display: flex;
    flex-shrink: 0;
    margin-left: 30px;
    margin-right: 30px;
    flex-direction: column;
    align-items: center;
    width: 90%;
    
    @media (min-width: 1024px) {
        margin-top: 110px;
        width: 50%;
    }
`

const Wrapper = styled.div`
    position: relative;
    max-width: 330px;
    width: 100%;
`
const Label = styled.div`
    margin-left: 7px;
    margin-right: 7px;
    box-sizing: border-box;
    width: 150px;    
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
`
const LabelLeft = styled(Label)`
    padding: 20px 20px 25px;
    background-color: #3864D8;
    color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.45);
    border-radius: 0 10px 10px 10px;
`

const LabelRight = styled(Label)`
    padding: 25px 20px 20px;
    background-color: #fff;
    border-radius: 10px 10px 0 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`

const FirstPerson = styled.div`
    display: flex;
`

const SecondPerson = styled(FirstPerson)`
    justify-content: flex-end;    
    margin-top: -15px;
    align-items: flex-end;
`
const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 465px;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        justify-content: space-between;
    }
`
const StyledInput = styled.div`    
    flex-grow: 1;
    margin-top: 14px;

    @media (min-width: 768px) {
        margin-right: 30px;
    }
`

const Slide = () => {
    return (
        <div className='flexbox at-desktop-row full-w no-shrink'>
            <div className='text-left'>
                <Heading className='big normal'>Secure <span className='color_dark-yellow'>private messaging</span> </Heading>
                <InfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</InfoText>
                <InfoText className='mb-50'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</InfoText>
            </div>

            <CardContainer>

                <Wrapper>
                    <FirstPerson>
                        <Avatar src={jessica} size='65px' shadow='0px 4px 25px rgba(0, 0, 0, 0.25)' border='5px solid #EDF4FF' />
                        <LabelLeft>Hi! <br />Let’s collab!</LabelLeft>
                    </FirstPerson>
                    <SecondPerson>
                        <LabelRight>Great!<br />Let’s do this!</LabelRight>
                        <Avatar src={benjamen} size='65px' shadow='0px 4px 25px rgba(0, 0, 0, 0.25)' border='5px solid #EDF4FF' />
                    </SecondPerson>
                </Wrapper>


                <Form>
                    <StyledInput >
                        <TextField placeholder='Write a message...' width='100%' />
                    </StyledInput>
                    <Button variant='primary' color='#2434A1' bg='#FFC651'>Send</Button>
                </Form>

            </CardContainer>
        </div>
    );
}

export default Slide;