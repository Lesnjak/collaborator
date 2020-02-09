import React from 'react';
import styled from 'styled-components';

const Text = styled.h3`
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: ${props => props.align};
    position: relative;

    &:after {
        content: '';
        display: block;
        width: 65px;
        height: 2px;
        background-color: #FFB10E;
        position: absolute;
        left: ${props => props.align === 'center' ? '50%' : ''};
        bottom: -7px;
        transform: ${props => props.align === 'center' ? 'translateX(-50%)' : ''};
        text-transform: capitalize;
    }
`
const Heading = ({ children, align }) => {
    return (
        <Text align={align}>
            {children}
        </Text>
    );
}

export default Heading;