﻿import React from 'react';
import styled from 'styled-components';
import arrow from '../../../assets/icons/Arrow.svg';
import cancel from '../../../assets/icons/cancel.svg';
import IconButton from './IconButton';
import { Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

const Container = styled.div`
    margin: ${({ margin = '0 0 14px' }) => margin};
    width: ${({ width = '100%' }) => width};
`
const Border = styled.div`
    width: 100%;
    min-height: 36px;
    border: ${props => props.background ? `1px solid ${props.background}` : props.isOpen ? '1px solid #31384E' : '1px solid #999FAE'};
    box-sizing: border-box;
    border-radius: 4px;
    background: ${({ background = '#FFFFFF' }) => background};
    text-align: left;
    padding: ${({ padding = '0px 16px' }) => padding};
    display: flex;
    justify-content: space-between;
    position: relative;
    

    &:focus-within {
        border: 1px solid #31384E;
    }

    &:hover {
        border: 1px solid #7283B6;
    }
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
    width: 100%;
    z-index: 1;
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
const HelperText = styled.p`
    font-size: 12px;
    line-height: 14px;
    padding: 0 16px;
    color: #999FAE;
    margin-top: 7px;
    text-align: left;
`
const HelperTextTop = styled(HelperText)`
    margin-bottom: 7px;
    margin-top: 0px;
`
const Placeholder = styled.span`
    font-size: 14px;
    line-height: 16px;
    color: #999FAE;
`
const Option = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding-right: 24px;
    margin: 8px 0;
    color: ${({ multiselect }) => multiselect ? '#3864D8' : ''};
`
const BlueCheckbox = withStyles({
    root: {
        color: '#2434A1',
        padding: 0,
        marginRight: '10px'
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);
const Overlay = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
`

class InputMultiSelect extends React.Component {
    state = {
        isOpen: false
    };

    toggleOpen = () => {
        !this.props.disabled && this.setState({ isOpen: !this.state.isOpen })
    }

    handleChange = (name) => ({ target: { value } }) => {
        const { value: selected } = this.props;
        const selectedIndex = selected.indexOf(value);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, value);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        this.props.onChangeHandler(newSelected)(name)
    }

    handleClick = (e) => {
        this.props.onChangeHandler(e);
        this.setState({
            isOpen: false
        })
    }

    handleDelete = (name) => (value) => {
        const { value: selected } = this.props;
        const selectedIndex = selected.indexOf(value);
        let newSelected = []

        newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1)
        );

        if (newSelected.length < 1) newSelected = null

        this.props.onChangeHandler(newSelected)(name)
    }

    isChecked = (value) => {
        return this.props.value.indexOf(value) !== -1;
    }

    render() {
        const {
            placeholder,
            name,
            helperText,
            helperTextTop,
            multiselect,
            value,
            options,
            width,
            padding,
            background,
            isRequired,
            margin,
        } = this.props;

        const { isOpen } = this.state;

        return (
            <Container width={width} margin={margin}>
                {helperText && helperTextTop && <HelperTextTop>{helperText}</HelperTextTop>}

                <Border isOpen={isOpen} padding={padding} background={background}>
                    <div className="flexbox justify-center col flex-1" onClick={this.toggleOpen} >
                        {value.length > 0 ? (
                            value.map(
                                (option, idx) => (
                                    <Option key={idx} multiselect={multiselect}>
                                        {option}
                                        {<div className="absolute r-0">
                                            <IconButton
                                                size='24px'
                                                icon={cancel}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    this.handleDelete(name)(option);
                                                }}
                                            />
                                        </div>}
                                    </Option>
                                )
                            )
                        ) : (
                                <Placeholder>{placeholder}</Placeholder>
                            )}
                    </div>

                    <Icon src={arrow} isOpen={isOpen} />

                    {isOpen && <Overlay onClick={this.toggleOpen} />}

                    <ItemsContainer isOpen={isOpen}>
                        {
                            options && options.map(item => {
                                return (
                                    <Item key={item.id}>
                                        <BlueCheckbox
                                            checked={this.isChecked(item.label)}
                                            value={item.label}
                                            disabled={value.length >= 3}
                                            onChange={this.handleChange(name)}
                                        />
                                        <span>{item.label}</span>
                                    </Item>
                                )
                            })
                        }
                    </ItemsContainer>
                </Border>
                {helperText && !helperTextTop && <HelperText>{helperText}</HelperText>}
                {isRequired && <HelperText><span className='color_red'>*</span> Required field</HelperText>}
            </Container>
        );
    }
}

InputMultiSelect.propTypes = {
    value: PropTypes.array.isRequired,
};

InputMultiSelect.defaultProps = {

};

export default InputMultiSelect;