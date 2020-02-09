import React from 'react';
import styled from 'styled-components';
import close from '../../../assets/icons/menu_close.svg';

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height:100%;
    min-height: 100vh;
    width: 100vw;
    z-index: 500;
    transition-duration: 0.5s;
`
const Overlay = styled.div`
    background: #31384E;
    opacity: 0.5;
    position: absolute;
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    top:0;
    left:0;
`
const Window = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: #FFFFFF;
    opacity: 1;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
    margin: 150px auto;
    width: 100%;
    max-width: 730px;
    padding-bottom: 90px;
    transition-duration: 0.5s;
`
const CloseIcon = styled.img`
    display: block;
    position: absolute;
    right: 35px;
    top: 35px;
    cursor: pointer;
`
const Title = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-top: 60px;
    margin-bottom: 24px;
`
const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F7F8FB;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin-bottom: 34px;
`
const Modal = ({ children, title, icon, closeHandler, isOpen }) => {
    return (
        <Wrapper>
            <Overlay onClick={closeHandler} />
            <Window isOpen={isOpen}>
                <CloseIcon src={close} onClick={closeHandler} alt='icon' />
                <Title>{title}</Title>

                <Icon>
                    <img src={icon} alt="icon" />
                </Icon>
                {children}
            </Window>
        </Wrapper>
    );
}

export default Modal;