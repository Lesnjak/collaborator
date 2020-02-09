import React from 'react';
import styled from 'styled-components';
// import { ReactComponent as Post } from '../../../assets/icons/email.svg';

import { ReactComponent as Arrow } from '../../../assets/icons/Arrow.svg';
import { Link } from 'react-router-dom'


const Container = styled.div`
    cursor: pointer;
`
const Border = styled.div`
    width: ${({ width = '100%' }) => width};
    min-height: 36px;
    border: ${({ background = '#E86553' }) => `1px solid ${background}`};
    box-sizing: border-box;
    border-radius: 4px;
    background: ${({ background = '#E86553' }) => background};
    text-align: left;
    padding: ${({ padding = '0px 40px' }) => padding};
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;

    &:focus-within {
        border: 1px solid #31384E;
    }

    &:hover {
        border: 1px solid #7283B6;
    }
`
const Icon = styled.div`
    transition-duration: 0.3s;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};

    svg {
            path {
                fill: #fff;
            }
            
        }
`
const ItemsContainer = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    position: absolute;
    right: 0;
    top: 103%;
    width: 278px;
    z-index: 10;
    overflow: hidden;
    opacity: ${props => props.isOpen ? 1 : 0};
    transition-duration: 0.3s;
    height: ${props => props.isOpen ? '' : 0};
`
const Item = styled.div`
    height: 48px;
    width: 100%;
    padding: 10px 24px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #F6F9FF;
    }
`
const Option = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding-right: 24px;
    margin: 8px 0;
    color: #fff;
`
const Overlay = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 5;
`

class InputSelectRoute extends React.Component {
    state = {
        isOpen: false
    };

    toggleOpen = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        const {
            width,
            padding,
            background,
            toggleModalSelect
        } = this.props;

        const { isOpen } = this.state;

        return (
            <Container>
                <Border
                    isOpen={isOpen}
                    width={width}
                    padding={padding}
                    background={background}
                    onClick={this.toggleOpen}
                >
                    <Option>Actions</Option>

                    <Icon isOpen={isOpen}>
                        <Arrow height={10} />
                    </Icon>

                    <ItemsContainer isOpen={isOpen}>
                        <Item onClick={toggleModalSelect}>Post a new collaboration</Item>

                        <Link to='/admin/search-collaboration'>
                            <Item>Search collaboration opportunities</Item>
                        </Link>

                        <Link to='/admin/search-business'>
                            <Item>Search businesses</Item>
                        </Link>
                    </ItemsContainer>

                    {isOpen && <Overlay onClick={this.toggleOpen} />}
                </Border>
            </Container>
        );
    }
}


export default InputSelectRoute;