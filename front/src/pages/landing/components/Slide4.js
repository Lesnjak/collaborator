import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar'
import jessica from '../../../assets/images/jessica-felicio.jpg'

import IconButton from './IconButton';
import Pen from '../../../assets/icons/Pen_white.svg';
import Delete from '../../../assets/icons/Delete.svg';


const Heading = styled.h4`
    margin-top: 50px;

    @media (min-width: 1024px) {
        margin-top: 110px;
    }
`

const InfoText = styled.p`
    font-size: 14px;
    line-height: 26px;
    margin-top: 30px;
`

const CardContainer = styled.div`
    display: flex;
    flex-shrink: 0;
    margin-left: 30px;
    margin-right: 30px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    @media (min-width: 1024px) {
        margin-top: 110px;
        width: 50%;
    }
`
const Items = styled.div`
    width: 100%;
    flex-shrink: 0;    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: 1024px) {
        margin-top: 0;
    }
`
const PostItemLabel = styled.div`
    margin: 17px;
    width: 100%;    
    max-width: 210px;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2434A1;
    cursor: pointer;
    background-color: #fff;
    font-size: 12px;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
        margin: 0 17px 0 0;
    }
`
const SearchItemLabel = styled.div`
    margin: 17px;
    position: relative;
    background-color: #fff;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    padding: 25px;
    width: 100%;
    max-width: 210px;
    font-size: 11px;

    @media (min-width: 768px) {
        margin: 0 0 0 17px;
    }
`
const ItemHeading = styled.p`
    text-transform: uppercase;
    color: #2434A1;
    font-size: 12px;
    font-weight: bold;
    line-height: 26px;
`
const ItemCompany = styled.p`    
    font-weight: bold;
    line-height: 26px;
`
const ItemText = styled.p`    
    line-height: 16px;
`
const Absolute = styled.div`
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
`

const PenIcon = styled(IconButton)`
    width: 35px;
    height: 35px;
    position: absolute;
    top: 37px;
    right: 65px;
`
const DeleteIcon = styled(IconButton)`
    width: 35px;
    height: 35px;
    position: absolute;
    top: 37px;
    right: 16px;
`
const TextButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #31384E;
    color: #fff;
    border-radius: 14px;
    height: 28px;
    width: 170px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 700;
`

const Slide = () => {
    return (
        <div className='flexbox at-desktop-row full-w no-shrink'>
            <div className='text-left'>
                <Heading className='big normal'>Post collaboration <span className='color_dark-yellow'>opportunities</span></Heading>
                <InfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</InfoText>
                <InfoText className='mb-50'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</InfoText>
            </div>

            <CardContainer>
                <Items>
                    <PostItemLabel>
                        <p>+ Post A New Collab</p>
                    </PostItemLabel>

                    <SearchItemLabel>
                        <Absolute>
                            <Avatar src={jessica} border='5px solid #EDF4FF' size='55px' shadow='0px 4px 25px rgba(0, 0, 0, 0.25)' />
                        </Absolute>

                        <PenIcon colorBG='#3864D8'>
                            <img src={Pen} alt="icon" />
                        </PenIcon>
                        <DeleteIcon colorBG='#fff'>
                            <img src={Delete} alt="icon" />
                        </DeleteIcon>

                        <ItemCompany>QuickAsap, LTD</ItemCompany>
                        <ItemText>Elicia Gale</ItemText>

                        <ItemHeading>collaboration type</ItemHeading>
                        <ItemText>I want to market my services.</ItemText>

                        <ItemHeading>description</ItemHeading>
                        <ItemText>We are an insurance broker spesialising in insurance.</ItemText>

                        <TextButton>marketing & promotions</TextButton>
                    </SearchItemLabel>
                </Items>
            </CardContainer>
        </div>
    );
}

export default Slide;