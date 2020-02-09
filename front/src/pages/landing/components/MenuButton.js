import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 36px;
    width: 36px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 4px;
`
const Line = styled.div`
    height: 2px;
    width: 20px;
    background: #fff;
    transition: all 0.2s ease;
`
const LineTop = styled(Line)`
    transform: ${(props) => props.open ? 'rotate(45deg)' : 'none'};
    transform-origin: top left;
    margin-bottom: 5px;
`
const LineMiddle = styled(Line)`
    opacity: ${props => props.open ? 0 : 1};
    transform: ${props => props.open ? 'translateX(-16px)' : 'none'};
`
const LineBottom = styled(Line)`
    transform: ${props => props.open ? 'translateX(-1px) rotate(-45deg)' : 'none'};
    transform-origin: top left;
    margin-top: 5px;
`

class MenuButton extends React.Component {
    render() {
        const { isMenuOpen, onClick } = this.props;
        return (
            <Container onClick={onClick}>
                <LineTop open={isMenuOpen} />
                <LineMiddle open={isMenuOpen} />
                <LineBottom open={isMenuOpen} />
            </Container>
        )
    }
}


export default MenuButton