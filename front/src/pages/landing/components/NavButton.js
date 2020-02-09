import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    padding: 25px 0;
    margin: 0 33px;
    font-size: 14px;
    line-height: 16px;
    box-sizing: border-box;
    color: ${props => props.isInverted ? '#2434A1' : '#fff'} ;
    font-weight: 500;
    border-top: 3px solid transparent;
    cursor: pointer;

    &:hover{
        border-top: 3px solid #FFC651;
    }
`

const NavButton = ({ children, isInverted, onClick }) => {
    return (
        <Button isInverted={isInverted} onClick={onClick}>
            {children}
        </Button>
    );
}

export default NavButton;