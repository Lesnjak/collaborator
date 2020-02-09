import React from 'react';
import styled from 'styled-components';
import TextField from './TextField1';
import Button from './Button';
import InputSelect from './InputSelect1';
import PropTypes from 'prop-types';

const fakeData = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']


const Form = styled.form`
    width: 100%;
    max-width: 540px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 34px;
`
const InputWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const Halfy = styled.div`
    width: 100%;
    
    @media (min-width: 768px) {
        width: 47%;
    }
`

const FormStep2 = ({
    onChangeHandler,
    onChangeTextHandler,
    nextStepHandler,
    backStepHandler,
    business_name,
    business_entity_status,
    business_entity_dataset,
    position,
    company_registration_number,
    business_type,
    business_types_dataset,
    what_you_deal_in,
    business_focus_dataset,
    number_of_employees,
    number_of_employees_dataset,
    business_city,
    business_country,
    industry_business,
    estimated_annual_turnover,
    estimated_annual_turnover_dataset,
    tags
}) => {

    return (
    <>
            <Form>
                <InputWrapper>
                    <Halfy>
                        <TextField
                            placeholder='Your business name'
                            type='text'
                            value={business_name}
                            onChangeHandler={onChangeTextHandler}
                            name='companyName'
                            width='100%'
                        />
                    </Halfy>
                    <Halfy>
                        <InputSelect
                            placeholder='Select business entity status'
                            value={business_entity_status}
                            name='entityType'
                            options={business_entity_dataset}
                            onChangeHandler={onChangeHandler}
                        />
                    </Halfy>

                    <Halfy>
                        <InputSelect
                            placeholder='Select your position'
                            value={position && position.label}
                            name='position'
                            isReceiveObject
                            options={fakeData.map(el => ({ label: el, id: 2 }))}
                            onChangeHandler={onChangeHandler}
                        />
                    </Halfy>
                    <Halfy>
                        <TextField
                            placeholder='Your company registration number'
                            type='text'
                            value={company_registration_number}
                            onChangeHandler={onChangeTextHandler}
                            name='registrationNumber'
                            width='100%'
                        />
                    </Halfy>

                    <InputSelect
                        placeholder='Select your business type'
                        value={business_type && business_type.label}
                        name='businessType'
                        isReceiveObject
                        options={business_types_dataset}
                        onChangeHandler={onChangeHandler}
                    />

                    <Halfy>
                        <InputSelect
                            placeholder='Select what you deal in'
                            value={what_you_deal_in && what_you_deal_in.label}
                            name='businessFocus'
                            isReceiveObject
                            options={business_focus_dataset}
                            onChangeHandler={onChangeHandler}
                        />
                    </Halfy>
                    <Halfy>
                        <InputSelect
                            placeholder='Select number of employees'
                            value={number_of_employees}
                            name='numberOfEmployees'
                            isReceiveObject
                            options={number_of_employees_dataset}
                            onChangeHandler={onChangeHandler}
                        />
                    </Halfy>
                    <Halfy>
                        <InputSelect
                            placeholder='Select your business city'
                            value={business_city}
                            name='city'
                            options={fakeData}
                            onChangeHandler={onChangeHandler}
                        />
                    </Halfy>
                    <Halfy>
                        <InputSelect
                            placeholder='Select your business country'
                            value={business_country && business_country.label}
                            name='country'
                            isReceiveObject
                            options={fakeData.map(el => ({ label: el, id: 6 }))}
                            onChangeHandler={onChangeHandler}
                        />
                    </Halfy>

                    <InputSelect
                        placeholder='Select the industry your business operates in'
                        value={industry_business}
                        name='industry'
                        options={fakeData}
                        onChangeHandler={onChangeHandler}
                    />

                    <InputSelect
                        placeholder='Select estimated annual turnover for coming financial year'
                        value={estimated_annual_turnover ? estimated_annual_turnover.label : ''}
                        name='annualTurnover'
                        isReceiveObject
                        options={estimated_annual_turnover_dataset}
                        onChangeHandler={onChangeHandler}
                    />

                    <TextField
                        placeholder='Enter phrases that describe what your business does (business tags)'
                        textarea
                        value={tags && tags}
                        onChangeHandler={onChangeTextHandler}
                        name='tags'
                        height='125px'
                        helperText='Separe phrases with commas. Example: shoe shop, footwear, mens footwear.'
                    />

                </InputWrapper>
            </Form>
            <Button
                className='mb-15'
                onClick={nextStepHandler}
                variant='primary'
                color='#2434A1'
                bg='#FFC651'
                width='160px'
                disabled={false}
            >
                Next
            </Button>
            <Button
                onClick={backStepHandler}
                variant='tertiary'
                color='#2434A1'
                width='160px'
            >
                Back
            </Button>
        </>
    );
}

FormStep2.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
    onChangeTextHandler: PropTypes.func.isRequired,
    nextStepHandler: PropTypes.func.isRequired,
    backStepHandler: PropTypes.func.isRequired,
    business_name: PropTypes.string,
    business_entity_status: PropTypes.string,
    position: PropTypes.object,
    company_registration_number: PropTypes.string,
    business_type: PropTypes.object,
    what_you_deal_in: PropTypes.object,
    number_of_employees: PropTypes.string,
    number_of_employees_dataset: PropTypes.array,
    business_city: PropTypes.string,
    business_country: PropTypes.object,
    industry_business: PropTypes.string,
    estimated_annual_turnover: PropTypes.object,
    business_describe: PropTypes.string,
};

FormStep2.defaultProps = {

};

export default FormStep2;
