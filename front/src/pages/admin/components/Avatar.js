import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${({ size = '44px' }) => size};
    height: ${({ size = '44px' }) => size};
    flex-shrink: 0;
    position:relative;
    z-index: 1;
    background: ${({ background = '#F3F4F6' }) => background};
    border-radius: 50%;
    box-shadow: ${({ boxShadow = 'none' }) => boxShadow};
    &.flex-avatar{
       @media (max-width: 993px) {
        width: 30px;
        height: 30px;
    }
    }

`
const StyledAvatar = styled.img`
    width: 100%;
    height: 100%;
    box-sizing: content-box;
    border-radius: 50%;
`
const Letters = styled.p`
    line-height: ${({ size = '44px' }) => size};
    text-align: center;
    font-size: ${({ fontSize = '18px' }) => fontSize};
    font-weight: 500;
    color: ${({ color }) => color ? color : ''};
`

const Avatar = ({
    src,
    alt,
    size,
    color,
    fontSize,
    background,
    boxShadow,
    children,
    className,
}) => {
    return (
        <Wrapper size={size} background={background} className={className} boxShadow={boxShadow}>
            {src ? (
                <StyledAvatar src={src} alt={alt} />
            ) : (
                    <Letters
                        size={size}
                        color={color}
                        fontSize={fontSize}
                    >
                        {alt}
                    </Letters>
                )}
            {children}
        </Wrapper>
    );
}

export default Avatar;
