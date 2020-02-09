import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../../logo.svg';

import Button from '../components/Button';
import MenuButton from '../components/MenuButton';
import IconButton from '../components/IconButton';
import facebook from '../../../assets/icons/facebook.svg';
import tweeter from '../../../assets/icons/tweeter.svg';
import In from '../../../assets/icons/In.svg';
import NavButton from '../components/NavButton';


const Nav = styled.div`
  background-color: transparent;
  position: absolute;
  width: 100%;
  z-index: 10;
  top: 0;
`;

const NavFooter = styled.div`
  max-width: 960px;
  padding: 0px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const NavLeft = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const NavCenter = styled.div`
  display: flex;
  justify-content: center;
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    margin-right: 20px;
  }
`
const ComponentFooter = styled.footer`
    position: relative;
    padding-top: 110px;
    padding-bottom: 30px;
    background: radial-gradient(1920.00px at 0% 50.31%, #2434A1 0%, #5075D6 51%, #2434A1 100%);
`
const MainContainer = styled.div`
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
const SocialButton = styled(IconButton)`
    width: 24px;
    height: 24px;
    background-color: #2434A1;
`
const Info = styled.p`
    color: #fff;
    font-size: 14px;
    line-height: 16px;
    margin-top: 30px;
    margin-bottom: 60px;
`

function Footer(props) {
    const { isMenuOpen, handleMenuClick, toggleModalSignIn, toggleModalSignUp } = props;
    return (
        <ComponentFooter>
            <Nav>
                <NavFooter>
                    <div className="at-laptop-visible">
                        <NavLeft>
                            <NavButton variant='tertiary' color='white' bg='#2434A1'>About Us</NavButton>
                            <NavButton variant='tertiary' color='white' bg='#2434A1'>Join The Forum</NavButton>
                        </NavLeft>
                    </div>

                    <NavCenter>
                        <Logo />
                    </NavCenter>

                    <div className="at-laptop-visible">
                        <NavRight>
                            <NavButton variant='tertiary' color='white' bg='#2434A1' onClick={toggleModalSignIn}>Sign In</NavButton>
                            <Button variant='secondary' color='white' bg='#2434A1' onClick={toggleModalSignUp}>Create Free Account</Button>
                        </NavRight>
                    </div>

                    <div className="at-laptop-hidden">
                        <MenuButton
                            onClick={handleMenuClick}
                            isMenuOpen={isMenuOpen}
                        />
                    </div>

                </NavFooter>
            </Nav>
            <MainContainer>
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
            </MainContainer>
        </ComponentFooter>
    );
}

export default Footer;