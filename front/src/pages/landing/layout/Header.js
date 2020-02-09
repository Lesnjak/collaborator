import React from 'react';
import styled from 'styled-components';
import open from '../../../assets/icons/menu_open.svg';
import open_i from '../../../assets/icons/menu_open_i.svg';
import { ReactComponent as Logo } from '../../../assets/icons/Collabbed_logo.svg';


import Button from '../components/Button';
import NavButton from '../components/NavButton';

const Nav = styled.div`
  background-color: ${props => props.isScrolled ? '#fff' : 'transparent'};
  box-shadow: ${props => props.isScrolled ? '-8px 0px 8px rgba(0, 0, 0, 0.2)' : 'none'};
  position: sticky;
  width: 100%;
  z-index: 10;
  top: 0;
  transition-duration: 0.5s;
  margin-bottom: -70px;
`;

const NavHeader = styled.div`
  height: 70px;
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
  justify-content: flex-end;
  align-items: center;

  svg {
    margin-right: 20px;
  }
`
const IconButton = styled.div`
  width: 18px;
  height: 12px;
  position: absolute;
  z-index: 250;
  cursor: pointer;
  right: 20px;
  top: 24px;

  @media (min-width: 768px) {
        display: none;
    }
`
const Label = styled.div`
    .logo{
            path{
                fill: ${props => props.isInverted ? '#2434A1' : '#fff'};
            }
    }
`

function Header(props) {
  const { handleMenuClick, isScrolled, toggleModalSignIn, toggleModalSignUp } = props;
  return (
    <Nav isScrolled={isScrolled}>
      <NavHeader>
        <div className="at-laptop-visible">
          <NavLeft>
            <NavButton isInverted={isScrolled}>About Us</NavButton>
            <NavButton isInverted={isScrolled}>Join The Forum</NavButton>
          </NavLeft>
        </div>

        <NavCenter>
          <Label isInverted={isScrolled}>
            <Logo className='logo' height={24} width={114} />
          </Label>


          {/* <LogoFont isInverted={isScrolled}>Collabbed</LogoFont> */}

        </NavCenter>

        <div className="at-laptop-visible">
          <NavRight>
            <NavButton isInverted={isScrolled} onClick={toggleModalSignIn}>Sign In</NavButton>
            <Button variant='secondary' color={isScrolled ? '#2434A1' : 'white'} bg='#2434A1' onClick={toggleModalSignUp}>Create Free Account</Button>
          </NavRight>
        </div>


        <IconButton onClick={handleMenuClick}>
          <img src={isScrolled ? open_i : open} alt="menu" />
        </IconButton>


      </NavHeader>
    </Nav>
  );
}

export default Header;
