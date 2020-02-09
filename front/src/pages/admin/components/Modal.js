import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import close from '../../../assets/icons/menu_close.svg';


const Wrapper = styled.div`
    display: ${({isOpen})=>isOpen ? "flex" : "none"};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;right: 0;
    z-index: 500;
    background: rgba(49,56,78,0.5);
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    animation:modalIsShow 0.3s;
    &::-webkit-scrollbar-track {
        background-color: #fff;
    }
    &::-webkit-scrollbar{
        width: 2px;
        background-color: #fff;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #5074d6;
        position: relative;
        left: 10px
    }
    @keyframes modalIsShow{
    from{
     background: rgba(49,56,78,0);
    }
    to{
     background: rgba(49,56,78,0.5);
    }
    
    }
     
`
const CloseWindow  = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    cursor: pointer;
`
const Window = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 3;
    background: #FFFFFF;
    opacity: 1;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 730px;
    padding:0 15px 90px 15px;
    transition-duration: 0.5s;
    margin: auto;
    animation: modalZoom 0.3s;
    
   @media (max-width: 778px) {
     margin:auto 15px auto;
    }
    @keyframes modalZoom {
            from{
        opacity: 0.5;
            }

        to{
    opacity: 1;
        }
    }
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
    text-transform: capitalize;
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
const Modal = ({ children, title, icon, handleModalClose, isOpen}) => {
    return (
        <Wrapper isOpen={isOpen}>
             <CloseWindow onClick={handleModalClose}/>
            <Window>
                <CloseIcon src={close} onClick={handleModalClose} alt='icon' />
                <Title>{title}</Title>

                {icon && <Icon>
                    <img src={icon} alt="icon" />
                </Icon>}
                {children}
            </Window>
        </Wrapper>
    );
}

export default Modal;
