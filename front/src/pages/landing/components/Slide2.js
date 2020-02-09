import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar'
import charles from '../../../assets/images/charles.jpg'
import close from '../../../assets/icons/close.svg'
import luis from '../../../assets/images/luis.jpg'
import jessica from '../../../assets/images/jessica-felicio.jpg'

import InputSearch from './InputSearch';

const fakeData = [
    { title: 'Computers', img: charles },
    { title: 'shoe shop', img: jessica },
    { title: 'e-commerce', img: luis },
]

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
    width: 90%;
    
    @media (min-width: 1024px) {
        margin-top: 110px;
        width: 50%;
    }
`
const SearchItems = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
`
const SearchItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
`
const SearchItemLabel = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    color: #3864D8;
    height: 32px;
    width: 100%;
    max-width: 142px;
    margin-top: -10px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 4px;
`
const CloseButton = styled.img`
    width: 15px;
    display: block;
    position: absolute;
    right: -3px;
    top: -3px;
`
const Top = styled.div`
    z-index: 1;
`

const Slide = () => {
    return (
        <div className='flexbox at-desktop-row full-w no-shrink'>
            <div className='text-left'>
                <Heading className='big normal'>Search for <span className='color_dark-yellow'>businesses like you</span> </Heading>
                <InfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</InfoText>
                <InfoText className='mb-50'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</InfoText>
            </div>

            <CardContainer>
                <InputSearch placeholder='search...' />

                <SearchItems>
                    {fakeData.map((item, idx) => {
                        return (
                            <SearchItem key={idx}>
                                <Top>
                                    <Avatar src={item.img} size='55px' border='5px solid #EDF4FF' shadow='0px 4px 25px rgba(0, 0, 0, 0.25)' />
                                </Top>
                                <SearchItemLabel>
                                    {item.title}
                                    <CloseButton src={close} alt="close-icon" />
                                </SearchItemLabel>
                            </SearchItem>
                        )
                    })}
                </SearchItems>
            </CardContainer>
        </div>
    );
}

export default Slide;