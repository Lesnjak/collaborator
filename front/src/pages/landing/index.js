import React from 'react';
import styled from 'styled-components'
import {connect} from "react-redux";

import Header from './layout/Header';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Colaborate from './sections/Colaborate';
import Network from './sections/Network';
import Create from './sections/Create';
import SendMail from './sections/SendMail';
import Footer from './layout/Footer';
import SideDrawer from './components/SideDrawer';
import Modal from './components/Modal';
import ModalSignIn from './components/ModalSignIn';
import {Redirect} from 'react-router-dom';

import person from '../../assets/icons/person.svg';
import person_add from '../../assets/icons/person_add.svg';
import person_check from '../../assets/icons/person_check.svg';
import ModalSignUp from './components/ModalSignUp';
import ModalCheck from './components/ModalCheck';
import {messageReset, verifyUser} from '../../store/user/actions';
import ResetPasswordModal from "./components/ResetPasswordModal";
import ModalSendMail from "./components/ModalSendMail";


const LandingPageContainer = styled.div`
  position: relative;
`

class LandingPage extends React.Component {
    state = {
        isMenuOpen: false,
        position: null,
        isModalSignInOpen: false,
        isModalSignUpOpen: false,
        isModalCheckOpen: this.props.verifyPage,
        isModalEmailSendOpen: false,
        isModalResetPasswordOpen: false,
        isModalOpen: false,
        confirmMessage: ""
    }

    handleMenuClick = () => {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop

        this.setState({
            position: winScroll,
        })
    }

    toggleModalSignIn = () => {
        window.scrollTo(0, 0);
        this.setState({
            isModalSignUpOpen: false,
            isModalSignInOpen: !this.state.isModalSignInOpen
        })
        this.props.messageReset();
    }

    toggleModalSignUp = () => {
        window.scrollTo(0, 0);
        this.setState({
            isModalSignInOpen: false,
            isModalSignUpOpen: !this.state.isModalSignUpOpen
        })
    }

    toggleModalCheck = () => {
        console.log("toggle");

        window.scrollTo(0, 0);
        this.setState({
            isModalCheckOpen: !this.state.isModalCheckOpen
        })

    }

    toggleModalEmailSend = () => {
        window.scrollTo(0, 0);
        this.setState({
            isModalEmailSendOpen: !this.state.isModalEmailSendOpen
        })

    }


    onClickhandler = () => {
        const {
            verifyUser,
            match: {
                params: {
                    verifyCode
                }
            },
            userState
        } = this.props;

        verifyUser(verifyCode);
    }

    toggleModalResetPassword = () => {
        this.setState({
            isModalResetPasswordOpen: !this.state.isModalResetPasswordOpen,
            isModalSignInOpen: false
        })
    }

    toggleModal = (confirmMessage) => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            confirmMessage
        })
    }

    render() {

        const {
            isMenuOpen,
            position,
            isModalSignInOpen,
            isModalSignUpOpen,
            isModalCheckOpen,
            isModalResetPasswordOpen,
            isModalEmailSendOpen,
            isModalOpen,
            confirmMessage,
        } = this.state;

        const {
            token,
            postCompanyData: {
                successMessage,
                failMessage,
                // success,
            },
            // message,
            // success,
            userState: {
                verifyUser,
                message,
                success
            },
            verifyPage,
            match: {
                params: {
                    verifyCode
                }
            },
        } = this.props;

        if (token) {
            return (
                <Redirect to='/admin'/>
            )
        }


        // console.log("Messages = ", { successMessage, failMessage })
        // console.log("R = ", message);
        // console.log("Messages = ", isModalCheckOpen && (!!message || !!successMessage || !!success))
        // console.log(this.props.history);
        return (
            <LandingPageContainer>
                <SideDrawer
                    handleMenuClick={this.handleMenuClick}
                    isMenuOpen={isMenuOpen}
                    toggleModalSignIn={this.toggleModalSignIn}
                    toggleModalSignUp={this.toggleModalSignUp}
                />

                <Header
                    handleMenuClick={this.handleMenuClick}
                    isMenuOpen={isMenuOpen}
                    isScrolled={(position > 20)}
                    toggleModalSignIn={this.toggleModalSignIn}
                    toggleModalSignUp={this.toggleModalSignUp}
                />

                <main>
                    <Hero toggleModalSignUp={this.toggleModalSignUp}/>
                    <Intro/>
                    <Colaborate/>
                    <Network/>
                    <Create/>
                    <SendMail/>
                </main>

                <Footer
                    handleMenuClick={this.handleMenuClick}
                    isMenuOpen={isMenuOpen}
                    toggleModalSignIn={this.toggleModalSignIn}
                    toggleModalSignUp={this.toggleModalSignUp}
                />

                {isModalSignInOpen && (
                    <Modal
                        isOpen={isModalSignInOpen}
                        title='Sign In'
                        icon={person}
                        closeHandler={this.toggleModalSignIn}

                    >
                        <ModalSignIn openSignUp={this.toggleModalSignUp}
                                     openResetPassword={this.toggleModalResetPassword}
                                     closeHandler={this.toggleModalSignIn}/>
                    </Modal>
                )}

                {isModalSignUpOpen && (
                    <Modal
                        isOpen={isModalSignUpOpen}
                        title={'Create Your Account'}
                        icon={person_add}
                        closeHandler={this.toggleModalSignUp}
                    >
                        <ModalSignUp
                            openEmailSend={this.toggleModalEmailSend}
                            closeHandler={this.toggleModalSignUp}
                            openSignIn={this.toggleModalSignIn}
                        />
                    </Modal>
                )}

                {/*{console.log("RS = ", this.props.match.params.resetPassword)}*/}

                {isModalResetPasswordOpen || !!this.props.match.params.resetPassword ? (
                    <Modal
                        isOpen={isModalCheckOpen}
                        title='Enter A New Password'
                        icon={person}
                        closeHandler={() => this.props.history.push("/")}
                    >
                        <ResetPasswordModal
                            toggleModalResetPassword={this.toggleModalResetPassword}
                            resetPassword={this.props.match.params.resetPassword}
                            push={this.props.history.push}
                            toggleModal={this.toggleModal}
                            toggleResetPasswordModal={this.toggleModalResetPassword}
                        />
                    </Modal>
                ) : null
                }

                {isModalEmailSendOpen && (
                    <Modal
                        isOpen={isModalEmailSendOpen}
                        title='Checking Account'
                        icon={person_check}
                        closeHandler={this.toggleModalEmailSend}
                    >
                        <ModalSendMail handleClick={this.toggleModalEmailSend}/>
                    </Modal>
                )}


                {/*<Modal*/}
                {/*    isOpen={isModalCheckOpen}*/}
                {/*    title='Verify Your Email'*/}
                {/*    icon={person_check}*/}
                {/*    closeHandler={() => this.props.history.push("/")}*/}
                {/*>*/}
                {/*    <p>{message}</p>*/}
                {/*</Modal>*/}
                {/*{console.log("VC = ", verifyCode, verifyPage)}*/}
                {verifyPage && (
                    <Modal
                        isOpen={isModalCheckOpen}
                        title='Verify Your Email'
                        icon={person_check}
                        closeHandler={() => this.props.history.push("/")}
                    >
                        <ModalCheck
                            verifyPage
                            verifyUser={verifyUser}
                            verifyCode={verifyCode}
                            onClick={this.onClickhandler}
                            toggleModalCheck={this.toggleModalCheck}
                            history={this.props.history}
                            goTo={this.props.history}
                        />
                        {/*{!success ? (*/}
                        {/*    <ModalCheck*/}
                        {/*        verifyPage*/}
                        {/*        verifyUser={verifyUser}*/}
                        {/*        verifyCode={verifyCode}*/}
                        {/*        onClick={this.onClickhandler}*/}
                        {/*        toggleModalCheck={this.toggleModalCheck}*/}
                        {/*        history={this.props.history}*/}
                        {/*        goTo={this.props.history}*/}
                        {/*    />*/}
                        {/*) : (*/}
                        {/*    <ModalCheck onClick={this.toggleModalCheck}>*/}
                        {/*        /!*{userState.failMessage || userState.successMessage}*!/*/}
                        {/*    </ModalCheck>*/}
                        {/*)}*/}
                    </Modal>
                )}
                {/*{(isModalCheckOpen && (failMessage || successMessage || success)) && (*/}
                {/*{this.props.match.params.verifyCode && (*/}
                {/*{verifyPage && (*/}
                {/*    <Modal*/}
                {/*        isOpen={isModalCheckOpen}*/}
                {/*        title='Password Reset'*/}
                {/*        icon={person_check}*/}
                {/*        closeHandler={this.toggleModalCheck}*/}
                {/*    >*/}
                {/*        {verifyPage ? (*/}
                {/*            <ModalCheck*/}
                {/*                verifyPage*/}
                {/*                verifyUser={verifyUser}*/}
                {/*                onClick={this.onClickhandler}*/}
                {/*                toggleModalCheck={this.toggleModalCheck}*/}
                {/*            />*/}
                {/*        ) : (*/}
                {/*            <ModalCheck onClick={this.toggleModalCheck}>*/}
                {/*                {userState.failMessage || userState.successMessage}*/}
                {/*            </ModalCheck>*/}
                {/*        )}*/}
                {/*    </Modal>*/}
                {/*)}*/}
            </LandingPageContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.login_data.token,
        postCompanyData: state.company_data,
        userState: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        messageReset: () => dispatch(messageReset()),
        verifyUser: (verifyCode) => dispatch(verifyUser(verifyCode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
