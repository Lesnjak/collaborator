import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
    width: ${({ size = '44px' }) => size};
    height: ${({ size = '44px' }) => size};
    flex-shrink: 0;
    border-radius: 50%;
    background-color: ${props => props.isActive ? props.colorBG_active : props.colorBG};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    color: ${props => props.color};
    font-weight: bold;
    font-size: ${({ fontSize = '16px' }) => fontSize};
    cursor: pointer;

`

const IconButton = (props) => {
    return (
        <IconContainer {...props}>
            {props.icon && <img src={props.isActive ? props.icon_active : props.icon} alt="icon" />}
            {props.children}
        </IconContainer>
    );
}

export default IconButton;
