import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';

const Message = styled.div`    
    display: flex;
    margin-bottom: 30px;
    height: ${({ preview }) => preview ? '44px' : ''};
    overflow: hidden;
`
const Head = styled.p`
    font-size: 12px;
`
const UserName = styled(Head)`
    font-weight: 500;
`
const Time = styled(Head)`
    color: #999FAE;
`
const Text = styled.p`
    margin-bottom: 14px;
    line-height: 21px;
    text-overflow: ellipsis;
    overflow: hidden;
`

const ChatMessage = ({
    message,
    date,
    author,
    preview
}) => {
    return (
        <Message preview={preview}>
            <div className="no-shrink mr-15">
                <Avatar
                    className='flex-avatar'
                    alt={author.name.replace(/[^A-Z]/g, '').substring(0, 2)}
                    src={author.avatar}
                />
            </div>

            <div className='flex-1'>
                <div className='flexbox align-center justify-between mb-12'>
                    <UserName>{author.name}</UserName>
                    <Time>{date}</Time>
                </div>

                <Text>{message}</Text>
            </div>
        </Message>
    );
}

export default ChatMessage;
