import React from 'react';
import styled from 'styled-components';

import patrick from '../../../assets/images/patrick.jpg';
import money from '../../../assets/images/money.jpg';
import austin from '../../../assets/images/austin.jpg'

import shevron_blue from '../../../assets/icons/shevron_blue.svg';
import shevron_yellow from '../../../assets/icons/shevron_yellow.svg';
import Speaker from '../../../assets/icons/Speaker.svg';
import Smile from '../../../assets/icons/Smile.svg';
import ADS from '../../../assets/icons/ADS.svg';
import cargo from '../../../assets/icons/cargo.svg';
import hands from '../../../assets/icons/hands.svg'
import Home from '../../../assets/icons/Home.svg'
import share from '../../../assets/icons/share.svg'
import Put from '../../../assets/icons/Put.svg'
import ADS_green from '../../../assets/icons/ADS_green.svg'
import watch from '../../../assets/icons/watch.svg'
import Home_white from '../../../assets/icons/Home_white.svg'

import IconButton from '../components/IconButton';
import AvatarInfoItem from '../components/AvatarInfoItem';

const Wrapper = styled.section`
    padding-top: 40px;
    padding-bottom: 60px;
    background-color: #FFFFFF;

    @media (min-width: 768px) {
        padding-top: 90px;
        padding-bottom: 130px;
    }
`

const Title = styled.h3`    
    padding-bottom: 8px;
    margin-bottom: 40px;
    text-align: center;

    @media (min-width: 768px) {
        margin-bottom: 130px;
    }

    &:after {
        display: block;
        width: 65px;
        height: 2px;
        background-color: #FFB10E;
        content: '';
        position: relative;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
    }
`

const InfoItemTitle = styled.h4`
    display: flex;
    align-items: center;    
    margin-bottom: 35px;
`
const InfoItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }
`
const InfoItemRight = styled(InfoItem)`
    flex-direction: column-reverse;
`
const InfoContainer = styled.div`
    width: 100%;
    max-width: 730px;
    margin: 0 auto;
`


const SpeakerIcon = styled(IconButton)`
    width: 55px;
    height: 55px;
    position: absolute;
    top: 15px;
    left: 15px;
`
const SmileIcon = styled(IconButton)`
    width: 65px;
    height: 65px;
    position: absolute;
    border-radius: 15px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);

`
const TextIcon = styled(IconButton)`
    width: 80px;
    height: 45px;
    position: absolute;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px 10px 0px 10px;
    top: 0;
    right: 0%;
`


const CargoIcon = styled(IconButton)`
    width: 65px;
    height: 65px;
    position: absolute;
    border-radius: 50%;
    top: 35px;
    right: 0;
`
const HandsIcon = styled(IconButton)`
    width: 65px;
    height: 65px;
    position: absolute;
    border-radius: 15px;
    top: 50%;
    transform: translate(calc( -50% + 10px), -50%);
`
const HomeIcon = styled(IconButton)`
    width: 138px;
    height: 36px;
    position: absolute;
    border-radius: 18px;
    top: 100%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 8px ));
`
const Span = styled.span`
    @media (min-width: 768px) {
        white-space: nowrap;
    }
`

const ListItem = ({ img, text }) => {
    return (
        <li className='flexbox align-center mb-15'>
            <img src={img} alt="shevron" className='mr-15' />
            <Span>{text}</Span>
        </li>
    )
}

const PutIcon = styled.div`
    border-radius: 0px 15px 15px 0px;
    width: 54px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E5FCE5;
    top: 0%;
    left: 45%;
    transform: translate(-0%, calc(-50% + 8px ));
    position: absolute;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
`

const RentButton = styled(IconButton)`
    width: 166px;
    height: 36px;
    position: absolute;
    border-radius: 18px;
    top: 100%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 8px ));
    background: #EDF4FF;
    justify-content: space-between;
`

const RentIconButton = styled(IconButton)`
    width: 36px;
    height: 36px;
`

const Colaborate = () => {
    return (
        <Wrapper>
            <div className='container flexbox col'>
                <Title className='bigger normal'>Collaborate With Other Small Businesses And...</Title>
                <InfoContainer>
                    <div className="flexbox col">
                        <InfoItem className=' mb-80'>
                            <div className="mr-15">
                                <InfoItemTitle className='big color_light-blue'><span className="huge mr-15">1</span> Reach more customers</InfoItemTitle>
                                <ul>
                                    <ListItem
                                        img={shevron_blue}
                                        text={`Advertise your services to another company's customers`}
                                    />
                                    <ListItem
                                        img={shevron_blue}
                                        text={`Run joint marketing campaigns with a complementary business`}
                                    />
                                    <ListItem
                                        img={shevron_blue}
                                        text={`Stock your products in someone else's shop`}
                                    />
                                </ul>
                            </div>

                            <div>
                                <AvatarInfoItem avatar={patrick}>
                                    <SpeakerIcon colorBG='#3864D8'>
                                        <img src={Speaker} alt="icon" />
                                    </SpeakerIcon>
                                    <SmileIcon colorBG='#E5FCE5'>
                                        <img src={Smile} alt="icon" />
                                    </SmileIcon>
                                    <TextIcon colorBG='#F3C5BF'>
                                        <img src={ADS} alt="icon" />
                                    </TextIcon>
                                </AvatarInfoItem>
                            </div>
                        </InfoItem>

                        <InfoItemRight className='mb-80'>

                            <div className="mr-45">
                                <AvatarInfoItem avatar={money}>
                                    <CargoIcon colorBG='#3864D8'>
                                        <img src={cargo} alt="icon" />
                                    </CargoIcon>
                                    <HandsIcon colorBG='#E5FCE5'>
                                        <img src={hands} alt="icon" />
                                    </HandsIcon>
                                    <HomeIcon colorBG='#F3C5BF'>
                                        <img src={Home} alt="icon" />
                                        <img src={share} alt="icon" />
                                    </HomeIcon>
                                </AvatarInfoItem>
                            </div>
                            <div>
                                <InfoItemTitle className='big color_dark-yellow'> Reduce your costs <span className="huge ml-15">2</span></InfoItemTitle>
                                <ul>
                                    <ListItem
                                        img={shevron_yellow}
                                        text={`Share office/retail space with another business`}
                                    />
                                    <ListItem
                                        img={shevron_yellow}
                                        text={`Join forces with another business to reduce procurement costs`}
                                    />
                                    <ListItem
                                        img={shevron_yellow}
                                        text={`Work with another company to increase the efficiency of your logistics`}
                                    />
                                </ul>
                            </div>

                        </InfoItemRight>

                        <InfoItem>
                            <div className="mr-15">
                                <InfoItemTitle className='big color_light-blue'><span className="huge mr-15">3</span> Monetise existing resources</InfoItemTitle>
                                <ul>
                                    <ListItem
                                        img={shevron_blue}
                                        text={`Rent out the unused time of your staff members to another business`}
                                    />
                                    <ListItem
                                        img={shevron_blue}
                                        text={`Rent out office space, retail space, or storage space to another business`}
                                    />
                                    <ListItem
                                        img={shevron_blue}
                                        text={`Let other companies pay to advertise their services to your customers`}
                                    />
                                </ul>
                            </div>

                            <div>
                                <AvatarInfoItem avatar={austin}>
                                    <PutIcon>
                                        <div className="absolute r-100">
                                            <img src={Put} alt="icon" />
                                        </div>
                                        <img src={ADS_green} alt="icon" />

                                    </PutIcon>
                                    <RentButton colorBG='#F3C5BF'>
                                        <RentIconButton className='bg_bright-blue'>
                                            <img src={watch} alt="icon" />
                                        </RentIconButton>

                                        <span className='color_bright-blue big bold'>RENT OUT</span>

                                        <RentIconButton className='bg_bright-blue'>
                                            <img src={Home_white} alt="icon" />
                                        </RentIconButton>
                                    </RentButton>
                                </AvatarInfoItem>
                            </div>
                        </InfoItem>
                    </div>
                </InfoContainer>
            </div>
        </Wrapper>
    );
}

export default Colaborate;