import React from 'react';
import styled from 'styled-components'
import IconButton from '../components/IconButton';
import { ReactComponent as Logo } from '../../../assets/icons/Collabbed_logo.svg';
import { ReactComponent as Post } from '../../../assets/icons/letter_white.svg';
import { ReactComponent as Info } from '../../../assets/icons/notification.svg';
import { ReactComponent as Sign } from '../../../assets/icons/sign.svg';
import {ReactComponent as MenuOpen} from "../../../assets/icons/menu_open_i.svg";
import {ReactComponent as MenuClose} from "../../../assets/icons/menu_close.svg";
import Notification from '../components/Notification';
import email from '../../../assets/icons/outline-email-24px.svg'
import NotificationsList from '../components/NotificationsList';
import ProfileMenu from '../components/ProfileMenu';
import NotificationMenu from '../components/NotificationMenu';
import { logout } from '../../../store/login/actions';
import { connect } from 'react-redux';


const messages = [
    {
        date: Date.now(),
        notification: 'Complete your profile before start! Business Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo culpa a quam dolore magni ipsa minus distinctio libero cupiditate excepturi?'
    },
    {
        date: Date.now(),
        notification: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus!'
    },
    {
        date: Date.now(),
        notification: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, tempore.'
    },
    {
        date: Date.now(),
        notification: 'Illo culpa a quam dolore magni ipsa minus distinctio libero cupiditate excepturi?'
    },
    {
        date: Date.now(),
        notification: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, autem! '
    },
    {
        date: Date.now(),
        notification: 'Ea magni est velit itaque architecto ut ex quod?'
    },
    {
        date: Date.now(),
        notification: 'Blanditiis voluptatum eos expedita ducimus tempore, commodi dignissimos distinctio quia repellendus?'
    },
    {
        date: Date.now(),
        notification: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. '
    },
    {
        date: Date.now(),
        notification: 'Assumenda, quas iste voluptates sed aspernatur beatae dolores magnam, ea consequatur aliquid maiores impedit molestias quaerat optio in sequi illum porro, ex vero similique incidunt distinctio ducimus a? Ut veritatis optio cum.'
    },
    {
        date: Date.now(),
        notification: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
    },
    {
        date: Date.now(),
        notification: 'Unde omnis culpa sequi impedit?'
    },
    {
        date: Date.now(),
        notification: 'Quae, itaque iure rem quam obcaecati minima asperiores expedita pariatur exercitationem ratione optio provident veniam corrupti vitae neque cum magnam reprehenderit fugit autem? '
    },
    {
        date: Date.now(),
        notification: 'Eveniet dicta, repellendus sit tempore porro quae expedita aut natus suscipit, ipsam nostrum iusto! '
    }
]


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid rgba(60, 62, 68, 0.2);
    padding: 0px 16px;
`
const LogoWrapper = styled.div`
display: flex;
align-items: center;
div{
display: none;
    @media (max-width: 768px) {
      display: flex;
    }
}
`
const Label = styled.a`
   display: block;
    .logo{
            path{
                fill: #2434A1;
            }
    }
    @media (max-width: 768px) {
      display: none;
    }
`
const Controlls = styled.div`
    display: flex;
    justify-content: space-between;
    //width: 266px;

    .link {
        background-color: #FFF;
        border-radius: 50%;
        margin-left: 20px;

        &:hover {
            background-color: #5075D6;        
            color: #fff;

            svg {
                path {
                    fill: #fff;
                }
            }
        }
    }

    .active{
            background-color: #5075D6;        

            svg {
                path {
                    fill: #fff;
                }
                
            }
    }
`
const Counter = styled.div`
    position: absolute;
    top: 0px;
    left: 29px;
`
const Overlay = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    z-index: 10;
`

class Header extends React.Component {
    state = {
        active: null,
        isNotificationActive: false,
        isNotificationMenuActive: false,
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        const endpoint = 'wss://collabbed-api.codeondeck.com/ws'; // wss://echo.websocket.org
        // var socket = new WebSocket("ws://echo.websocket.org");

        var ws = new WebSocket(endpoint);
        // console.log(ws)
        // const socket = socketIOClient(endpoint);
        ws.onopen = (data) => {
            // console.log('onopen', data);
            // ws.close(1000, 'lol');
            // ws.send({
            //     action: "get-threads",
            //     jwt: token,
            // });
        }
        ws.onmessage = (data) => console.log('onmsg', data)
        ws.onerror = (error) => console.log('error', { error })
        ws.onclose = (close) => console.log('close', close)



    }


    setActiveHandler = (active) => {
        this.setState({
            active
        })
    }

    isActive = (active) => {
        return active === this.state.active
    }

    toggleNotification = () => {
        this.setState({
            isNotificationActive: !this.state.isNotificationActive
        })
    }

    toggleNotificationMenu = () => {
        this.setState({
            isNotificationMenuActive: !this.state.isNotificationMenuActive
        })
    }

    closeNotifications = () => {
        // console.log('close')
        this.setState({
            active: null
        })
    }

    logoutHandler = () => {
        console.log('logout');
        localStorage.clear();
        this.props.logout();
    }
    render() {
        const {
            isNotificationMenuActive,
            isNotificationActive,
            active
        } = this.state

        const {
            toggleSideBar,
            isOpen,
            logout,
        } = this.props;

        return (
            <Wrapper>
                <LogoWrapper>
                    <Label href='/'>
                        <Logo height={24} width={114} className='logo' />
                    </Label>
                    <IconButton onClick={toggleSideBar()}>
                        {!isOpen ? <MenuOpen /> : <MenuClose />}
                    </IconButton>
                </LogoWrapper>
                <Controlls>
                    <IconButton
                        className={active === 'message' ? 'active link' : 'link'}
                        onClick={() => {
                            this.setActiveHandler('message');
                            this.toggleNotificationMenu();
                        }}
                    >
                        <Post />
                        <Counter>
                            <IconButton size='24px' colorBG='#E86553' color='#fff'>{messages.length}</IconButton>
                        </Counter>
                    </IconButton>

                    <IconButton
                        className={active === 'notification' ? 'active link' : 'link'}
                        onClick={() => this.setActiveHandler('notification')}
                    >
                        <Info />
                        <Counter>
                            <IconButton size='24px' colorBG='#E86553' color='#fff'>{messages.length}</IconButton>
                        </Counter>
                        {active === 'notification' && (
                            <NotificationsList
                                notifications={messages}
                                amount={messages.length}
                            />
                        )}
                    </IconButton>


                    <IconButton
                        onClick={() => this.setActiveHandler('profileMenu')}
                        color={active === 'profileMenu' ? '#FFF' : '#5075D6'}
                        fontSize='18px'
                        className={active === 'profileMenu' ? 'active link' : 'link'}
                    >
                        JD
                        {active === 'profileMenu' && (
                            <ProfileMenu logout={this.logoutHandler} />
                        )}
                    </IconButton>

                    <IconButton
                        onClick={() => this.setActiveHandler('sign')}
                        className={active === 'sign' ? 'active link' : 'link'}
                    >
                        <Sign />
                    </IconButton>
                </Controlls>

                {isNotificationActive && (
                    <Notification icon={email} >
                        You have 1 new message from Aleksandra Power.
                        </Notification>
                )}

                {isNotificationMenuActive && (
                    <NotificationMenu closeHandler={this.toggleNotificationMenu} />
                )}

                {(active === 'profileMenu' || active === 'notification') && <Overlay onClick={this.closeNotifications} />}

            </Wrapper>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Header);
