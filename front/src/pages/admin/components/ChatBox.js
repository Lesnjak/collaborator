import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import TextField from './TextField';
import charles from '../../../assets/images/charles.jpg';
import jessica from '../../../assets/images/jessica-felicio.jpg';
import Avatar from './Avatar';
import Button from './Button';
import { ReactComponent as More } from '../../../assets/icons/more.svg'


const Box = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);    
    max-width: 894px;
    display: flex;
    flex-direction: column;
    height: 100%;
        @media (max-width: 1150px) {
    box-shadow:none;    
    }
`
const Info = styled.div`
    border-bottom: ${({ quickChat }) => quickChat ? 'none' : '1px solid rgba(60, 62, 68, 0.2)'} ;
    min-height: ${({ quickChat }) => quickChat ? '57px' : '84px'};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    background-color: ${({ quickChat }) => quickChat ? '#EDF4FF' : '#fff'};
    flex-shrink: 0;
    @media (max-width: 993px) {
    
    min-height: ${({ quickChat }) => quickChat ? '57px' : '70px'};
       padding: 0 15px;
    }
    
`
const Name = styled.p`
    padding: 0 14px;
    font-size: 13px;
`
const UserName = styled(Name)`
    font-weight: 500;
    border-right: 1px solid #999FAE;
`
const SwitchText = styled.span`
    font-size:12px;
    color: #999FAE;
    margin-right: 16px;
    cursor: pointer;
`
const Switcher = styled.div`
    width: 20px;
    height: 10px;    
    background-color: ${({ isSwitchedOn }) => isSwitchedOn ? '#5075D6' : '#999FAE'};
    position: relative;
    border-radius: 5px;

    &::before{
        content: '';
        position: absolute;
        background-color: #fff;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        top: 2px;
        left: ${({ isSwitchedOn }) => isSwitchedOn ? '12px' : '2px'};
        transition-duration: 0.3s
    }
`
const Body = styled.div`
    padding: 20px 30px;
    flex: 1;
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
    @media (max-width: 993px) {
    padding: 15px;
    }
`
const MessageForm = styled.div`
    border-top: 1px solid rgba(60, 62, 68, 0.2);
    min-height: ${({ quickChat }) => quickChat ? '106px' : '132px'} ;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    align-items: center;
    padding: 0 30px;
    @media (max-width: 993px) {
    margin-left: -62px;
    &>div:first-child{
      display: none;
    }
    min-height: ${({ quickChat }) => quickChat ? '60px' : '70px'} ;
    padding-left: 0;
    }
`
const Chat = styled.p`
    font-weight: bold;
    font-size: 13px;
`
const ItemsContainer = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    position: absolute;
    right:0;
    top: 103%;
    width: 278px;
    z-index: 1;
    overflow: hidden;
    opacity: ${props => props.isOpen ? 1 : 0};
    transition-duration: 0.3s;
    height: ${props => props.isOpen ? '' : 0};
`
const ItemInput = styled.p`
    line-height: 48px;
    /* width: 100%; */
    padding: 0px 24px;    
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #F6F9FF;
    }
`
const Overlay = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
`

const ChatBox = ({ children, quickChat }) => {
    const [value, setValue] = useState('');
    const [isSwitchedOn, toggleHandler] = useState(false)
    const [isMenuOpen, toggleMenuHandler] = useState(false)
    return (
        <Box>
            <Info quickChat={quickChat}>
                {quickChat ? (
                    <>
                        <div className='flexbox align-center justify-between half-w'>
                            <Chat>QUICK CHAT</Chat>
                            <UserName>Aleksandra Power</UserName>
                        </div>

                        <div className='flexbox align-center justify-between half-w'>
                            <Name>Business Name, LTD</Name>
                            <div className="rel">
                                <More onClick={() => toggleMenuHandler(!isMenuOpen)} />
                                <ItemsContainer isOpen={isMenuOpen}>
                                    <ItemInput>Change a quick chat contact</ItemInput>

                                    <Link to='/admin/inboxes/all'>
                                        <ItemInput>Go to “Inbox”</ItemInput>
                                    </Link>

                                </ItemsContainer>
                            </div>
                            {isMenuOpen && <Overlay onClick={() => toggleMenuHandler(!isMenuOpen)} />}

                        </div>
                    </>
                ) : (
                        <>
                            <div className='flexbox align-center'>
                                <Avatar className='flex-avatar' src={jessica} />
                                <UserName>Aleksandra Power</UserName>
                                <Name>Business Name, LTD</Name>
                            </div>

                            <div className='flexbox align-center' onClick={() => toggleHandler(!isSwitchedOn)} >
                                <SwitchText>Show this chat on dashboard</SwitchText>
                                <Switcher isSwitchedOn={isSwitchedOn} />
                            </div>
                        </>
                    )}

            </Info>

            <Body>
                {children}
            </Body>

            <MessageForm quickChat={quickChat}>
                {!quickChat && (
                    <Avatar
                        alt={'CharLes'.replace(/[^A-Z]/g, '').substring(0, 2)}
                        src={charles}
                        size='60px'
                    />
                )}

                <div className={quickChat ? "mr-30 flex-1" : 'mr-30 ml-30 flex-1'}>
                    <TextField
                        placeholder='Write a message...'
                        value={value}
                        onChangeHandler={e => setValue(e.target.value)}
                        type='text'
                        name='message'
                        marginBottom='0px'
                        width={'100%'}
                    />
                </div>

                <Button
                    variant='primary'
                    color='#2434A1'
                    bg='#FFC651'
                >
                    Send
                </Button>
            </MessageForm>
        </Box>
    );
}

export default ChatBox;
