import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
`

const Container = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

export default Container;