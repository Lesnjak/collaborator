import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    margin: 70px -16px 0;
    display: grid;
    grid-template-columns: repeat(4, 25%);

    @media (min-width: 1280px) {
        grid-template-columns: repeat(5, 20%);
    }

    @media (min-width: 1600px) {
        grid-template-columns: repeat(6, 16.7%);
    }
`

const Cardholder = ({ children }) => {
    return (
        <CardWrapper>
            {children}
        </CardWrapper>
    );
}

export default Cardholder;