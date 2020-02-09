import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position:relative;
`

const Avatar = styled.img`
    width: 220px;
    height: 220px;
    box-sizing: content-box;
    border: 8px solid #fff;
    border-radius: 50%;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
`

const AvatarInfoItem = ({ avatar, children }) => {
    return (
        <Wrapper>
            <Avatar src={avatar} />
            {children}
        </Wrapper>
    );
}

export default AvatarInfoItem;
