import React from 'react';
import styled from 'styled-components';
import arrow from '../../../assets/icons/Arrow.svg';
import PropTypes from 'prop-types'
import SelectFilter from "./MyFeedComponents/SearchBox/SelectFilter";

const Container = styled.div`
    margin: ${({ margin = '0 0 14px' }) => margin};
    width: ${({ width = '100%' }) => width};
    @media (max-width: 700px) {
     width: 100%;
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
    margin-bottom: 5px;
    margin-top: 0px;
`


class InputSelect extends React.Component {
    state = {
        isOpen: false
    };

    toggleOpen = () => {
        !this.props.disabled && this.setState({ isOpen: !this.state.isOpen })
    }

    handleClick = (item) => ({ target: { name } }) => {
        !this.props.noSelect && this.props.onChangeHandler(item)(name);
        this.setState({
            isOpen: false
        })
    }

    render() {
        const {
            placeholder,
            name,
            helperText,
            helperTextTop,
            value,
            options,
            width,
            padding,
            background,
            isRequired,
            isReceiveObject,
            disabled,
            margin
        } = this.props;

        const {
            isOpen
        } = this.state;

        return (
            <Container width={width} margin={margin}>
                {helperText && helperTextTop && <HelperTextTop>{helperText}</HelperTextTop>}
                <SelectFilter
                    placeholder='Select collaboration category'
                />
                {helperText && !helperTextTop && <HelperText>{helperText}</HelperText>}
                {isRequired && <HelperText><span className='color_red'>*</span> Required field</HelperText>}
            </Container>
        );
    }
}

InputSelect.propTypes = {
    selected: PropTypes.array,
};

export default InputSelect;
