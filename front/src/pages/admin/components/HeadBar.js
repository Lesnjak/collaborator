import React from 'react';
import styled, { keyframes } from 'styled-components';

const animateHeader = keyframes`
    from{
        transform: translateY(-20px);
        opacity: 0;
    }

    to{
        transform: translateY(0);
        opacity: 1;
    }
`
const Head = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: center;
    animation: ${animateHeader} 0.5s;
`

const HeadBar = ({ children }) => {
    return (
        <Head>
            {children}
        </Head>
    );
}

export default HeadBar;