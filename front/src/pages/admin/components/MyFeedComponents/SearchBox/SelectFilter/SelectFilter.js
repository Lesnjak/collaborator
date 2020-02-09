import React from 'react'
import {SimpleSelect} from 'react-selectize'
import 'react-selectize/themes/index.css';
import {SelectFilterWrapper} from './SelectFilterStyled';

const countryOptions = [
    {key: 'af', value: 'Afghanistan'},
    {key: 'ax', value: 'Aland Islands'},
    {key: 'al', value: 'Albania'},
    {key: 'dz', value: 'Algeria'},
    {key: 'as', value: 'American Samoa'},
    {key: 'ad', value: 'Andorra'},
    {key: 'ao', value: 'Angola'},
    {key: 'ai', value: 'Anguilla'},
    {key: 'ag', value: 'Antigua'},
    {key: 'ar', value: 'Argentina'},
    {key: 'am', value: 'Armenia'},
    {key: 'aw', value: 'Aruba'},
    {key: 'au', value: 'Australia'},
    {key: 'at', value: 'Austria'},
    {key: 'az', value: 'Azerbaijan'},
    {key: 'bs', value: 'Bahamas'},
    {key: 'bh', value: 'Bahrain'},
    {key: 'bd', value: 'Bangladesh'},
    {key: 'bb', value: 'Barbados'},
    {key: 'by', value: 'Belarus'},
    {key: 'be', value: 'Belgium'},
    {key: 'bz', value: 'Belize'},
    {key: 'bj', value: 'Benin'},
]

const SelectFilter = ({placeholder}) => (
    <SelectFilterWrapper>
        <SimpleSelect
            transitionEnter={true}
            transitionLeave={true} values={countryOptions}
            placeholder={placeholder}
        >
            {
                countryOptions.map(option => (
                    <option key={option.key} value={option.value}>
                        {option.value}
                    </option>
                ))
            }
        </SimpleSelect>
    </SelectFilterWrapper>

)

export default SelectFilter;
