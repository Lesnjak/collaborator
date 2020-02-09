import React from 'react';
import styled from 'styled-components';
import close from '../../../assets/icons/baseline-close-24px.svg'
import notifications from '../../../assets/icons/baseline-notifications.svg'

import Button from './Button';

const Paper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    z-index: 10;
`
const InnerContainer = styled.div`
    position: relative;
    height: 100%;
    padding: 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`
const Icon = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #F3F4F6;
    margin-right: 24px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    flex-shrink: 0;
    
`
const Text = styled.p`
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    width: 410px;
    flex-shrink: 0;
    margin-bottom: 30px;
`
const CloseButton = styled.img`
    position: absolute;
    right: 35px;
    top: 35px;
    width: 24px;
`
const Notification = ({ children, icon = notifications, closeHandler }) => {
    return (
        <Paper>
            <InnerContainer>
                <CloseButton src={close} alt='icon' onClick={closeHandler} />
                <Icon>
                    <img src={icon} alt="icon" />
                </Icon>
                <Text>
                    {children}
                </Text>
                <Button
                    variant='primary'
                    color='#2434A1'
                    bg='#FFC651'
                    onClick={closeHandler}
                >
                    Proceed
                </Button>
            </InnerContainer>
        </Paper>
    );
}

export default Notification;
