import React from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';


const Wrapper = styled.div`
    position:relative;
`

const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border: 5px solid #fff;
    border-radius: 50%;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
`

const Icon = styled(IconButton)`
    position: absolute;
    top: 53px;
    left: 53px;
`

const AvatarProfile = ({ avatar, icon }) => {
    return (
        <Wrapper>
            <Avatar src={avatar} />
            <Icon colorBG='#fff' >
                <img src={icon} alt='icon' />
            </Icon>
        </Wrapper>
    );
}

export default AvatarProfile;
