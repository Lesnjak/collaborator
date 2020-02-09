import React from 'react';
import styled from 'styled-components';

import arrow from '../../../assets/icons/shevron.svg';


const Border = styled.div`
    width: 100%;
    height: ${props => props.isOpen ? '' : '48px'};
    background: #FFFFFF;
    border: 1px solid #999FAE;
    box-sizing: border-box;
    border-radius: 4px;
    margin-bottom: 14px;
    /* overflow: hidden; */
    cursor: pointer;

    &:hover{
        border: 1px solid #7283B6;
    }
`
const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 22px;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    border-bottom: ${({ isOpen }) => isOpen ? '1px solid #999FAE' : ''};
    height: 48px;
`
const Icon = styled.img`
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition-duration: 0.5s;
`
const ListContainer = styled.div`
    padding: 16px 22px;
`
const Span = styled.span`
    flex: 1;
    text-align: left;
`

class List extends React.Component {
    state = { isOpen: false }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const { isOpen } = this.state;
        const { title, children } = this.props;
        return (
            <Border isOpen={isOpen}>
                <ListHeader isOpen={isOpen}>
                    <Span onClick={this.toggleOpen}>{title}</Span>
                    <Icon isOpen={isOpen} src={arrow} onClick={this.toggleOpen} />
                </ListHeader>
                {isOpen && (
                    <ListContainer>
                        {children}
                    </ListContainer>
                )}

            </Border>
        );
    }
}

export default List;