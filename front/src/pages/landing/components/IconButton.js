import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.colorBG};;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
`

const IconButton = (props) => {
    return (
        <IconContainer {...props}>
            {props.children}
        </IconContainer>
    );
}

export default IconButton;