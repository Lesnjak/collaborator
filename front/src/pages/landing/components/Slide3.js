import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar'
import benjamen from '../../../assets/images/benjamin-parker.jpg'
import luis from '../../../assets/images/luis.jpg'

import InputSelect from './InputSelect';


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
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
`
const SearchItemLabel = styled.div`
    flex-shrink: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    padding: 30px 20px 20px;
    width: 45%;
`
const ItemHeading = styled.p`
    text-transform: uppercase;
    color: #2434A1;
    font-size: 12px;
    font-weight: bold;
    line-height: 26px;
`
const ItemSubHeading = styled.p`    
    font-weight: bold;
    line-height: 26px;
`
const ItemName = styled.p`    
    line-height: 26px;
`
const Absolute = styled.div`
    top: 0;
    transform: translate(0, -50%);
    position: absolute;
`

const Slide = () => {
    return (
        <div className='flexbox at-desktop-row full-w no-shrink'>
            <div className='text-left'>
                <Heading className='big normal'>Search for <span className='color_dark-yellow'>collaboration opportunities</span> </Heading>
                <InfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</InfoText>
                <InfoText className='mb-50'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</InfoText>
            </div>

            <CardContainer>
                <InputSelect placeholder='search...' />

                <SearchItems>
                    <SearchItemLabel>
                        <Absolute>
                            <Avatar src={benjamen} border='5px solid #EDF4FF' size='55px' shadow='0px 4px 25px rgba(0, 0, 0, 0.25)' />
                        </Absolute>
                        <ItemHeading>marketing & promotions</ItemHeading>
                        <ItemSubHeading>LuckyTrader, LTD</ItemSubHeading>
                        <ItemName>John Dou</ItemName>
                    </SearchItemLabel>

                    <SearchItemLabel>
                        <Absolute>
                            <Avatar src={luis} border='5px solid #EDF4FF' size='55px' shadow='0px 4px 25px rgba(0, 0, 0, 0.25)' />
                        </Absolute>
                        <ItemHeading>marketing & promotions</ItemHeading>
                        <ItemSubHeading>QuickAsap, LTD</ItemSubHeading>
                        <ItemName>Elicia Gale</ItemName>
                    </SearchItemLabel>
                </SearchItems>
            </CardContainer>
        </div>
    );
}

export default Slide;