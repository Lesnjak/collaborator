import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position:relative;
    z-index: 1;
`

const StyledAvatar = styled.img`
    width: ${props => props.size};
    height: ${props => props.size};
    box-sizing: content-box;
    border: ${props => props.border ? props.border : '8px solid #fff'};
    border-radius: 50%;
    box-shadow: ${props => props.shadow};
`

const Avatar = ({ src, size, children, shadow, border }) => {
    return (
        <Wrapper>
            <StyledAvatar src={src} size={size} shadow={shadow} border={border} />
            {children}
        </Wrapper>
    );
}

export default Avatar;
