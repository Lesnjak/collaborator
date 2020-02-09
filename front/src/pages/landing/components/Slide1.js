import React from 'react';
import styled from 'styled-components';
import SliderCard from './SliderCard';
import charles from '../../../assets/images/charles.jpg'
import luis from '../../../assets/images/luis.jpg'

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
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex-shrink: 0;
    
    @media (min-width: 1024px) {
        margin-top: 110px;
        flex-direction: row;
        width: 55%;
    }
`

const SlideWatch = () => {
    return (
        <div className='flexbox at-desktop-row full-w no-shrink'>
            <div className='text-left'>
                <Heading className='big normal'>We match you with businesses <span className='color_dark-yellow'>who want the same</span> </Heading>
                <InfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</InfoText>
                <InfoText className='mb-50'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</InfoText>
            </div>

            <CardContainer>
                <SliderCard
                    avatar={charles}
                    company='LuckyTrader, LTD'
                    name='John Dou'
                    info='I want to market my services to your customers'
                    variant='left'
                />
                <SliderCard
                    avatar={luis}
                    company='QuickAsap, LTD'
                    name='Elicia Gale'
                    info='I have a large customer base you can advertise to'
                    variant='right'
                />
            </CardContainer>
        </div>
    );
}

export default SlideWatch;