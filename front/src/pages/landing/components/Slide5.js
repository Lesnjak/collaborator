import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar'
import jessica from '../../../assets/images/jessica-felicio.jpg'
import ayo from '../../../assets/images/ayo.jpg'
import luis from '../../../assets/images/luis.jpg'

import IconButton from './IconButton';
import InputSelect from './InputSelect'
import add from '../../../assets/icons/add.svg';
import ok from '../../../assets/icons/ok.png';
import arrow_line from '../../../assets/icons/arrow_line.svg';
import top_line from '../../../assets/icons/top_line.svg';
import bottom_line from '../../../assets/icons/bottom_line.svg';



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
        margin-top: 160px;
        width: 50%;
    }
`
const Items = styled.div`
    width: 100%;
    flex-shrink: 0;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap:wrap;

    @media (min-width: 1024px) {
        margin-top: 0;
    }
`
const SearchPanel = styled.div`
    max-width: 210px;
    height: 128px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #2434A1;
    position: relative;
    z-index: 2;
    margin-right: 20px;
    padding-right: 30px;
    margin-bottom: 30px;
`
const ItemLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 90%;
    max-width: 210px;
    margin-left: 20px;
    height: 128px;

    @media (min-width: 768px) {
        width: 50%;
    }
`
const Absolute = styled.div`    
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: -25px;
    width: 100%;
`
const Middle = styled.div`
    z-index: 2;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
`
const AddIcon = styled(IconButton)`
    width: 65px;
    height: 65px;
    position: absolute;
    top: -58px;
    z-index: 1;
`
const TextButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3864D8;
    color: #fff;
    border-radius: 16px;
    height: 32px;
    width: 100%;    
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 700;
    z-index: 2;    
`
const Arrow = styled.img`
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translate(-35px, -50%);
    z-index: -1;
`
const ArrowTop = styled.img`
    position: absolute;
    left: 100%;
    top: 44%;
    transform: translate(-35px, -50%);
    z-index: -1;
`
const ArrowBottom = styled.img`
    position: absolute;
    left: 100%;
    top: 58%;
    transform: translate(-35px, -50%);
    z-index: -1;
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
                    <SearchPanel>
                        <AddIcon colorBG='#fff'>
                            <img src={add} alt="icon" />
                        </AddIcon>

                        <InputSelect placeholder='Your business type' />
                        <ArrowTop src={top_line} alt='line' />

                        <InputSelect placeholder='What you deal in' />
                        <Arrow src={arrow_line} alt='arrow' />

                        <InputSelect placeholder='Number of employees' />
                        <ArrowBottom src={bottom_line} alt='line' />
                    </SearchPanel>

                    <ItemLabel>

                        <TextButton><img src={ok} alt="ok-icon" /> collabbed algorithm</TextButton>
                        <Absolute>
                            <Avatar src={jessica} border='5px solid #EDF4FF' size='70px' shadow='0px 4px 25px rgba(0, 0, 0, 0.25)' />
                            <Middle>
                                <Avatar src={ayo} border='5px solid #EDF4FF' size='70px' shadow='0px 4px 25px rgba(0, 0, 0, 0.25)' />
                            </Middle>
                            <Avatar src={luis} border='5px solid #EDF4FF' size='70px' shadow='0px 4px 25px rgba(0, 0, 0, 0.25)' />
                        </Absolute>
                    </ItemLabel>
                </Items>
            </CardContainer>
        </div>
    );
}

export default Slide;