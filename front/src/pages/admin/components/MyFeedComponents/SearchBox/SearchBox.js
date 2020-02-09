import React, {useRef, useEffect} from 'react';
import SelectFilter from './SelectFilter';

import {
    SearchWrapper,
    SearchCheckWrapper,
    SearchSelectWrapper
} from './SearchBoxStyled';
import SearchCheckBoxComponent from "./SearchCheckBoxComponent/SearchCheckBoxComponent";

const SearchBox = ({checkboxses, feedList, handleChangeCheckbox}) => {
    return (
        <SearchWrapper>
            <SearchCheckWrapper feedList={feedList}>
                {
                    checkboxses.map((checkbox, idx) => (
                        <SearchCheckBoxComponent key={idx} handleChangeCheckbox={handleChangeCheckbox(checkbox)}
                                                 color={checkbox.color} isChecked={checkbox.checked}
                                                 text={checkbox.name}/>
                    ))
                }
            </SearchCheckWrapper>
            <SearchSelectWrapper feedList={feedList}>
                <SelectFilter placeholder='Filter by business country'/>
                <SelectFilter placeholder='Filter by business city'/>
                <SelectFilter placeholder='Filter by industry'/>
            </SearchSelectWrapper>
        </SearchWrapper>
    );
};

export default SearchBox;
