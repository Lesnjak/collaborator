import React from 'react';
import styled from 'styled-components';
import search from '../../../assets/icons/search.svg';


const Border = styled.div`
    width: 100%;
    min-height: 36px;
    border: 1px solid #999FAE;
    box-sizing: border-box;
    border-radius: 4px;
    background: #FFFFFF;
    text-align: left;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;

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
`

class InputSearch extends React.Component {
    state = {
        value: '',
    };

    onChangeHandler = (e) => {
        this.setState({ value: e.target.value })
    }

    render() {
        const { placeholder } = this.props;
        const { value } = this.state;
        return (
            <Border onClick={this.toggleOpen}>
                <Input placeholder={placeholder} value={value} onChange={this.onChangeHandler} />
                <Icon src={search} />
            </Border>
        );
    }

}

export default InputSearch;