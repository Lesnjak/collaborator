import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Form = styled.form`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Info = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    margin-bottom: 40px;
`
const ModalCheck = ({ closeHandler, companyId, message }) => {
    return (
        <Form>
            <Info>{message}</Info>
            <Button
                variant='primary'
                color='#2434A1'
                bg='#FFC651'
                width='278px'
                onClick={closeHandler}
            >
                OK
            </Button>
        </Form>
    );
}

export default ModalCheck;