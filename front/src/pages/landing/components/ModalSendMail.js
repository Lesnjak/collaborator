import React from 'react';
import Button from "./Button";
import styled from "styled-components";

const Info = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    word-break: break-word;
    margin-bottom: 40px;
`
const Wrapper = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ModalSendMail = ({handleClick}) => {
    return (
        <Wrapper>
            <Info>
                Thank you for spending time on registration! We are asking you for a bit more, while checking account
                and seting it up for you. Once it approved, we’ll notify you by email which you noted in registration.
            </Info>
            <Button
                variant='primary'
                color='#2434A1'
                bg='#FFC651'
                width='160px'
                onClick={handleClick}
            >
                Ok
            </Button>
        </Wrapper>
    );
};

export default ModalSendMail;