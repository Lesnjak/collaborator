import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Avatar from './Avatar';
import Button from './Button';
import IconButton from './IconButton';
import CardMap from './CardMap';
import edit from '../../../assets/icons/pen.svg';
import remove from '../../../assets/icons/Delete.svg';
import starGold from '../../../assets/icons/StarGold.svg';
import starGreen from '../../../assets/icons/StarGreen.svg';
import {useDispatch, useSelector} from "react-redux";
import {
    addCollaborationToFavorite,
    removeCollaborationFromFavorite
} from "../../../store/favoriteCollaborations/actions";

const WrapperBox = styled.div`
padding: 15px;
`
const Box = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
    padding-left: 30px;
    padding-right: 30px;
    text-align: left;
    max-width: 278px;
    margin: auto;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    &:hover{
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    @media (max-width: 1700px) {
         max-width: 350px;
     }
`
const ButtonsWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const Title = styled.h3`
    font-weight: bold;
    font-size: 12px;
    line-height: 26px;
    background-color: ${({title}) => {
    const upperString = title.toLocaleLowerCase();
    switch (upperString) {
        case 'collaboration' :
            return '#5075D6';
        case 'member offer' :
            return '#FFB10E';
        case 'giveaway' :
            return '#56C361';
        case 'event' :
            return '#884BAC';
        default:
            return '#31384E';
    }
}};
    text-align: center;
    color: #fff;
    margin-bottom: -15px;
    text-transform: uppercase;
`
const IconContainer = styled.div`
    padding-top: 30px;
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
`
const BusinesName = styled.div`
    font-size: 13px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-top: 15px;
    margin-bottom: 10px;
`
const TextContainerWrapper = styled.div`
    padding-top: 25px;
`
const Heading = styled.h3`
    color: #2434A1;
    margin-bottom: 14px;
    text-transform: uppercase;
    font-weight: bold;
`
const Text = styled.p`
    font-weight: normal;
    font-size: 13px;
    line-height: 21px;
    margin-top: -5px;
`
const NameContainer = styled.div`
    display: block;
`
const Rating = styled.div`
    padding-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

`
const RatingStars = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
`
const RatingStar = styled.img``;

const RatingText = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    margin-left: 10px;
`
const CardPerson = ({
                        title,
                        businesName,
                        name,
                        map,
                        textCollaboration,
                        textDescription,
                        avatar,
                        myPosted,
                        contactId,
                        companyId,
                        collaborationId,
                        isFavorite,
                    }) => {

    const dispatch = useDispatch();

    const handleAddToFavorite = () => {
        if (isFavorite) {
            dispatch(removeCollaborationFromFavorite(companyId, collaborationId))
        } else {
            dispatch(addCollaborationToFavorite(companyId, collaborationId))
        }
    };

    return (
        <WrapperBox>
            <Box>
                <Title title={title}>{title}</Title>
                {myPosted &&
                <>
                    <IconContainer>
                        <Avatar
                            src={avatar}
                            alt={name.replace(/[^A-Z]/g, '').substring(0, 2)}
                            fontSize='18px'
                            boxShadow
                        />
                        <span className='flexbox'>
                            <IconButton icon={edit}/>
                            <IconButton icon={remove}/>
                        </span>
                    </IconContainer>
                    <NameContainer>
                        <BusinesName>{businesName}</BusinesName>
                        <Text>{name}</Text>
                    </NameContainer>

                </>
                }

                {!myPosted &&
                <>
                    <IconContainer>
                        <NameContainer>
                            <BusinesName>{businesName}</BusinesName>
                            <Text>{name}</Text>
                        </NameContainer>
                        <Avatar
                            src={avatar}
                            alt={name.replace(/[^A-Z]/g, '').substring(0, 2)}
                            background='#F3F4F6'
                        />
                    </IconContainer>

                </>
                }

                {/*       <Rating>
                    <RatingStars>
                        <RatingStar src={starGold && starGreen} alt='icon'/>
                        <RatingStar src={starGold && starGreen} alt='icon'/>
                        <RatingStar src={starGold && starGreen} alt='icon'/>
                    </RatingStars>
                    <RatingText>
                        perfect match
                    </RatingText>
                </Rating>*/}
                <TextContainerWrapper>
                    <Heading>Collaboration type</Heading>
                    <Text>{textCollaboration}</Text>
                </TextContainerWrapper>
                {map && (
                    <TextContainerWrapper>
                        <Heading>location</Heading>
                        <CardMap link='The green man pub'/>
                    </TextContainerWrapper>
                )}
                <TextContainerWrapper>
                    <Heading>description</Heading>
                    <Text>{textDescription}</Text>
                </TextContainerWrapper>

                {!myPosted && (
                    <ButtonsWrapper>
                        <div className="mt-34">
                            <Link to={`/admin/company/${contactId}`}>
                                <Button
                                    variant='primary'
                                    color='#2434A1'
                                    bg='#FFC651'
                                    width='100%'
                                >
                                    View Their Page
                                </Button>
                            </Link>
                        </div>
                        <div className="mt-14">
                            <Link to={`/admin/inboxes/${contactId}`}>
                                <Button
                                    variant='secondary'
                                    color='#2434A1'
                                    width='100%'
                                >
                                    Send Message
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-14">
                            <Button
                                variant='tertiary'
                                color='#2434A1'
                                width='100%'
                                onClick={handleAddToFavorite}
                            >
                                {isFavorite ? "Remove from favourite" : "Add to favourite"}
                            </Button>
                        </div>
                    </ButtonsWrapper>
                )}
            </Box>
        </WrapperBox>
    );
}

export default CardPerson;
