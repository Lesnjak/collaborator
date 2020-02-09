import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import IconButton from './IconButton';
import edit from '../../../assets/icons/pen.svg';
import remove from '../../../assets/icons/Delete.svg';
import Avatar from './Avatar';


const Box = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    flex-direction: column;
    /* width: 278px; */
    padding: 0 20px 50px;
    text-align: left;
    margin: 12px;

    &:hover{
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    }
`
const Title = styled.p`
    font-weight: bold;
    font-size: 12px;
    line-height: 21px;
    margin-bottom: 20px;
    background-color: #31384E;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
`
const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
`
const BusinesName = styled.p`
    font-size: 13px;
    line-height: 26px;
    font-weight: 500;
`
const Heading = styled.p`
    color: #2434A1;
    margin-top: 24px;
    margin-bottom: 14px;
    text-transform: uppercase;
    font-weight: bold;
`
const Text = styled.p`
    font-weight: normal;
    font-size: 13px;
    line-height: 21px;
    margin-top: 14px;
`

const CardPosted = ({
    title,
    businesName,
    name,
    avatar,
    type,
    description,
    removeHandler,
    editHandler,
    companyId,
    collaborationId
}) => {
    return (
        <Box>
            <Title>{title}</Title>
            <IconContainer>
                <Avatar
                    src={avatar}
                    alt={name.replace(/[^A-Z]/g, '').substring(0, 2)}
                    fontSize='18px'
                    boxShadow
                />
                <span className='flexbox'>
                    <IconButton icon={edit} onClick={() => editHandler(collaborationId)} />

                    <IconButton icon={remove} onClick={() => removeHandler(companyId)} />
                </span>
            </IconContainer>

            <BusinesName>{businesName}</BusinesName>

            <Text>{name}</Text>

            <Heading>Collaboration type</Heading>
            <Text>{type}</Text>

            <Heading>description</Heading>
            <Text>{description}</Text>
        </Box>
    );
}

export default CardPosted;