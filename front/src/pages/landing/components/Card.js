import React from 'react';
import styled from 'styled-components';
import AvatarProfile from './AvatarProfile';

import avatarProfile from '../../../assets/images/jessica-felicio.jpg';
import avatarRating from '../../../assets/images/benjamin-parker.jpg';
import penIcon from '../../../assets/icons/pen.svg';
import searchIcon from '../../../assets/icons/search_white.svg';
import ratingIcon from '../../../assets/icons/Rating.svg'
import AvatarRating from './AvatarRating';
import AvatarDialog from './AvatarDialog';

const Paper = styled.div`
    max-width: 350px;
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    padding: 70px 30px 45px;
    color: #31384E;
    text-align: left;
    position: relative;
    box-sizing: border-box;
    margin-top: 60px;

    @media (min-width: 768px) {
        margin-top: 100px;
    }
`
const AvatrsContainer = styled.div`
    position: absolute;
    top: -45px;
`

const Title = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 20px;
`

const Text = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
`

const Card = ({ title, text, variant }) => {
    return (
        <Paper>
            <AvatrsContainer>
                {variant === 'profile' && <AvatarProfile avatar={avatarProfile} icon={penIcon} />}
                {variant === 'rating' && <AvatarRating avatar={avatarRating} icon={searchIcon} ratingIcon={ratingIcon} />}
                {variant === 'dialog' && <AvatarDialog avatarFirst={avatarProfile} avatarSecond={avatarRating} />}
            </AvatrsContainer>
            <Title>{title}</Title>
            <Text >{text}</Text>
        </Paper>
    );
}

export default Card;