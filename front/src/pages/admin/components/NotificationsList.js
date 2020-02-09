import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Button from './Button';

const Paper = styled.div`
    width: 350px;
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 100%;
    right: 0px;
    z-index: 15;
    color: #31384E;

`
const Heading = styled.div`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    padding: 18px;
    text-align: center;
    border-bottom: 1px solid rgba(60, 62, 68, 0.2);
`
const Body = styled.div`
    padding-right: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
`
const Inner = styled.div`
    padding: 4px 17px 0px 24px;
    max-height: 750px;
    overflow: auto;
    transition-duration: 0.5s;

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
const Message = styled.p`
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: ${props => props.showFull ? 'inherit' : 'nowrap'};
`
const Date = styled.p`
    font-weight: normal;
    font-size: 12px;
    line-height: 26px;
    color: #999FAE;
    margin-bottom: 30px;
`
const ButtonContainer = styled.div`
    padding: 24px 24px 30px;
    border-top: 1px solid rgba(60, 62, 68, 0.2);
`

class NotificationsList extends React.Component {
    state = {
        isOpen: false,
        active: null
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    setActive = (idx) => {
        this.setState({
            active: idx
        })
    }

    render() {
        const { notifications } = this.props;
        const { isOpen, active } = this.state;
        let displayedNotifications = notifications;
        if (!isOpen) displayedNotifications = notifications.slice(0, 1);

        return (
            <Paper>
                <Heading>
                    You have {notifications.length} new notification
                </Heading>
                <Body>
                    <Inner>
                        {displayedNotifications.map((el, idx) => {
                            return (
                                <div key={idx} onClick={() => this.setActive(idx)}>
                                    <Message showFull={idx === active}>{el.notification}</Message>
                                    <Date>{moment().format('MMMM Do YYYY, h:mm A')}</Date>
                                </div>
                            )
                        })}
                    </Inner>
                </Body>
                {(notifications.length > 1 && !isOpen) && (
                    <ButtonContainer>
                        <Button
                            variant='primary'
                            color='#2434A1'
                            bg='#FFC651'
                            onClick={this.toggleOpen}
                            width='100%'
                        >
                            Show More
                    </Button>
                    </ButtonContainer>
                )}

            </Paper>
        );
    }

}

export default NotificationsList;