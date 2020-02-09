import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    text-align: ${props => props.align};
    margin-top: 34px;
`
const SubHeading = ({ children, align }) => {
    return (
        <Text align={align}>{children}</Text>
    );
}

export default SubHeading;