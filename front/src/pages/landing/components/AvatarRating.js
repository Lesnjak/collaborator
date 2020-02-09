import React from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';


const Wrapper = styled.div`
    position:relative;
`

const Avatar = styled.img`
    width: 70px;
    height: 70px;
    border: 5px solid #fff;
    border-radius: 50%;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    position: relative;
    display: block;
    margin: auto;
`

const Icon = styled(IconButton)`
    position: absolute;
    top: 45px;
    left: 50px;
    width: 35px;
    height: 35px;
`

const Rating = styled.img`
    margin-top: -15px;
    display: block;
`

const AvatarRating = ({ avatar, icon, ratingIcon }) => {
    return (
        <Wrapper>
            <Avatar src={avatar} />
            <Icon colorBG='#3864D8' >
                <img src={icon} alt='icon' />
            </Icon>
            <Rating src={ratingIcon} alt='ratingImg' />
        </Wrapper>
    );
}

export default AvatarRating;
