import React, { useState } from 'react';
import styled from 'styled-components';
import close from '../../../assets/icons/baseline-close-24px.svg'
import back from '../../../assets/icons/arrow_right.svg'

import charles from '../../../assets/images/charles.jpg'
import Button from './Button';
import TextField from './TextField';
import ChatMessage from './ChatMessage';

const mockMessages = [
    {
        createdDate: Date.now(),
        author: {
            type: 'Id',
            ref: "Company",
            avatar: charles,
            name: 'John Dou'
        },
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum mollitia porro labore esse quibusdam reprehenderit expedita atque quod? Mollitia, illo?'
    },
    {
        createdDate: Date.now(),
        author: {
            type: 'Id',
            ref: "Company",
            avatar: '',
            name: 'Aleksandra Power'
        },
        message: 'Lorem ipsum dolor sit amet.'
    },
    {
        createdDate: Date.now(),
        author: {
            type: 'Id',
            ref: "Company",
            avatar: '',
            name: 'Aleksandra Power'
        },
        message: 'Lorem ipsum dolor sit amet.'
    },
    {
        createdDate: Date.now(),
        author: {
            type: 'Id',
            ref: "Company",
            avatar: charles,
            name: 'John Dou'
        },
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum mollitia porro labore esse quibusdam reprehenderit expedita atque quod? Mollitia, illo?'
    },
    {
        createdDate: Date.now(),
        author: {
            type: 'Id',
            ref: "Company",
            avatar: '',
            name: 'Aleksandra Power'
        },
        message: 'Lorem ipsum dolor sit amet.'
    },
    {
        createdDate: Date.now(),
        author: {
            type: 'Id',
            ref: "Company",
            avatar: '',
            name: 'Aleksandra Power'
        },
        message: 'Lorem ipsum dolor sit amet.'
    },
]


const Paper = styled.div`
    background: #FFFFFF;
    box-shadow: -8px 0px 8px rgba(0, 0, 0, 0.1);
    width: 324px;
    z-index: 10;
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    border-bottom: ${({ isMessagingActive }) => isMessagingActive ? '' : '1px solid rgba(60, 62, 68, 0.2)'} ;
    padding: ${({ isMessagingActive }) => isMessagingActive ? '85px 0px 0px' : '85px 30px 24px'} ;
`
const MessagingHeader = styled.div`
    background-color: #EDF4FF;
    display: flex;
    padding: 22px 30px;
`
const BusinessName = styled.p`
    font-size: 13px;
    width: 50%;
    padding: 0 14px;
`
const Name = styled(BusinessName)`
    border-right: 1px solid #999FAE;
    font-weight: 500;
    padding: 0px;
`
const Body = styled.div`
    flex: 1;
    padding: 30px;
    overflow-y: scroll;

    &::-webkit-scrollbar-track {
        background-color: #F3F4F6;
    }

    &::-webkit-scrollbar{
        width: 2px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #999FAE;
        position: relative;
        left: 10px
    }
`
const Footer = styled.div`
    border-top: 1px solid rgba(60, 62, 68, 0.2);
    padding: 30px;
`
const ImgButton = styled.img`
    position: absolute;
    top: 35px;
    width: 24px;
    cursor: pointer;
`
const CloseButton = styled(ImgButton)`    
    right: 35px;
`
const BackButton = styled(ImgButton)`
    left: 35px;
`
const NotificationMenu = ({ children, closeHandler }) => {
    const [isMessagingActive, toggleMessaging] = useState(false)
    return (
        <Paper>
            <Header isMessagingActive={isMessagingActive}>
                <CloseButton src={close} alt='icon' onClick={closeHandler} />
                {isMessagingActive ? (
                    <>
                        <BackButton src={back} alt='icon' onClick={() => toggleMessaging(!isMessagingActive)} />
                        <MessagingHeader>
                            <Name>Bronwyn Cartwright</Name>
                            <BusinessName>Dream Team, LTD</BusinessName>
                        </MessagingHeader>
                    </>
                ) : (
                        <TextField
                            placeholder='Search contact'
                        />
                    )}
            </Header>

            <Body>
                {isMessagingActive ? (
                    mockMessages.map((msg, idx) => {
                        const { message, createdDate, author } = msg;
                        return (
                            <ChatMessage
                                key={idx}
                                message={message}
                                date={createdDate}
                                author={author}
                            />
                        )
                    })
                ) : (
                        mockMessages.map((msg, idx) => {
                            const { message, createdDate, author } = msg;
                            return (
                                <div key={idx} onClick={() => toggleMessaging(!isMessagingActive)}>
                                    <ChatMessage
                                        message={message}
                                        date={createdDate}
                                        author={author}
                                        preview
                                    />
                                </div>

                            )
                        })
                    )

                }
                {/* {children} */}
            </Body>

            {isMessagingActive && <Footer>
                <TextField
                    placeholder='Write a message...'
                />
                <Button
                    variant='primary'
                    color='#2434A1'
                    bg='#FFC651'
                    onClick={closeHandler}
                    width='100%'
                >
                    Send
                </Button>
            </Footer>}

        </Paper>
    );
}

export default NotificationMenu;
