import React from 'react';
import {
    SearchCheckBox,
    SearchCheckBoxCircle,
    SearchCheckBoxText
} from './SearchCheckBoxComponentStyled';

const SearchCheckBoxComponent = ({color, isChecked, text, handleChangeCheckbox}) => {
    return (

        <SearchCheckBox  onClick={ handleChangeCheckbox }>
            <SearchCheckBoxCircle color={color} isChecked={isChecked}/>
            <SearchCheckBoxText>{text}</SearchCheckBoxText>
        </SearchCheckBox>

    );
};

export default SearchCheckBoxComponent;
