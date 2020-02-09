import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import Avatar from './Avatar';
import Button from './Button';


const Box = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 30px;
    padding-right: 30px;
    text-align: left;
    margin:15px auto;
    max-width: 265px;
    /* width: 100%; */

    &:hover{
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    }
`
const WrapperBox = styled.div`
padding: 10px;
`
const BusinesName = styled.div`
    font-size: 13px;
    line-height: 26px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
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

const CardBusiness = ({
    businesName,
    entityType,
    name,
    tags,
    textDescription,
    avatar,
    contactId,
    addToFavourite
}) => {
    return (
        <WrapperBox className='WrapperBox'>
        <Box>
            <div className='flex-1'>
                <BusinesName>
                    {`${businesName} ${entityType}`}
                    <div className="absolute r-0">
                        <Avatar src={avatar} alt={name && name.replace(/[^A-Z]/g, '').substring(0, 2)} background="#F3F4F6" />
                    </div>
                </BusinesName>

                <Text>{name && name}</Text>

                <Heading>business tags</Heading>
                <Text>{tags}</Text>

                <Heading>description</Heading>

                <Text>{textDescription}</Text>
            </div>

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
                    onClick={() => addToFavourite(contactId)}
                >
                    Add to Favorite
                </Button>
            </div>
        </Box>
        </WrapperBox>
    );
}

export default CardBusiness;
