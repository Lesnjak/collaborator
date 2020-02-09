import React from 'react';
import styled from 'styled-components';
import arrow from '../../../assets/icons/Arrow.svg';

const fakeData = ['item1', 'item2', 'item3', 'item4']

const Border = styled.div`
    width: 100%;
    min-height: 36px;
    border: ${props => props.isOpen ? '1px solid #31384E' : '1px solid #999FAE'};
    box-sizing: border-box;
    border-radius: 4px;
    background: #FFFFFF;
    text-align: left;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 14px;

    &:focus-within {
        border: 1px solid #31384E;
    }

    &:hover {
        border: 1px solid #7283B6;
    }
`
const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
`
const Icon = styled.img`
    transition-duration: 0.3s;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`
const ItemsContainer = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    position: absolute;
    left:0;
    top: 103%;
    z-index: 1;
    overflow: hidden;
    opacity: ${props => props.isOpen ? 1 : 0};
    transition-duration: 0.3s;
    height: ${props => props.isOpen ? '' : 0};
`
const Item = styled.input`
    height: 48px;
    width: 100%;
    padding: 0 24px;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #F6F9FF;
    }
`
class InputSelect extends React.Component {
    state = {
        isOpen: false,
    };

    toggleOpen = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        const { value, placeholder, name, options = fakeData, onChangeHandler } = this.props;
        const { isOpen } = this.state;
        return (
            <Border onClick={this.toggleOpen} isOpen={isOpen}>
                <Input placeholder={placeholder} value={value} name={name} />
                <Icon src={arrow} isOpen={isOpen} />
                <ItemsContainer isOpen={isOpen}>
                    {options.map(item => {
                        return (
                            <Item
                                value={item}
                                key={item}
                                readOnly
                                name={name}
                                onClick={onChangeHandler}
                            />
                        )
                    })}
                </ItemsContainer>
            </Border>
        );
    }

}

export default InputSelect;