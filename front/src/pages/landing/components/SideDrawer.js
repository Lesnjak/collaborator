import React from 'react';
import styled from 'styled-components';
import Button from './Button';

import close from '../../../assets/icons/menu_close.svg';
import facebook from '../../../assets/icons/facebook.svg';
import tweeter from '../../../assets/icons/tweeter.svg';
import In from '../../../assets/icons/In.svg';

const Layout = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 200;
    background-color: #fff;
    width: 80%;
    max-width: 260px;
    min-height: 100vh;
    box-shadow: -8px 0px 8px rgba(0, 0, 0, 0.2);
    padding: 90px 20px 30px;
    transform: ${props => props.isMenuOpen ? 'translate(0,0)' : 'translate(150%,0)'};
    transition-duration: 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const Nav = styled.nav`    
    display: flex;
    flex-direction: column;
    align-items: center;    
`
const IconButton = styled.div`
  position: absolute;
  z-index: 250;
  cursor: pointer;
  right: 20px;
  top: 20px;
`
const Footer = styled.div`
    position: relative;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`
const SocialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 112px;
`
const SocialButton = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #2434A1;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.35);
`
const Info = styled.p`
    color: #2434A1;
    font-size: 14px;
    line-height: 16px;
    margin-top: 30px;
    margin-bottom: 60px;
`

const SideDrawer = (props) => {
    const {
        isMenuOpen,
        handleMenuClick,
        toggleModalSignIn,
        toggleModalSignUp
    } = props;

    return (
        <Layout isMenuOpen={isMenuOpen}>
            <Nav>
                <IconButton onClick={handleMenuClick}>
                    <img src={close} alt="menu" />
                </IconButton>
                <Button
                    variant='tertiary'
                    color='#2434A1'
                    className='mb-15'
                >
                    About Us
                </Button>
                <Button
                    variant='tertiary'
                    color='#2434A1'
                    className='mb-15'
                >
                    Join The Forum
                </Button>
                <Button
                    variant='primary'
                    color='#2434A1'
                    bg='#FFB10E'
                    className='mb-15'
                    onClick={() => {
                        toggleModalSignUp();
                        handleMenuClick()
                    }}
                >
                    Create Free Account
                </Button>
                <Button
                    variant='tertiary'
                    color='#2434A1'
                    className='mb-15'
                    onClick={() => {
                        toggleModalSignIn();
                        handleMenuClick();
                    }}
                >
                    Sign In
                </Button>
            </Nav>

            <Footer>
                <SocialContainer>
                    <SocialButton>
                        <img src={facebook} alt="fb-icon" />
                    </SocialButton>
                    <SocialButton>
                        <img src={tweeter} alt="tweeter-icon" />
                    </SocialButton>
                    <SocialButton>
                        <img src={In} alt="In-icon" />
                    </SocialButton>
                </SocialContainer>
                <Info>Privacy Policy | Terms & Conditions</Info>
                <p>Collabbed (c) 2019, All Rights Reserved.</p>
            </Footer>
        </Layout>
    );
}

export default SideDrawer;