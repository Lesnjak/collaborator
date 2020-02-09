import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from './Button';
import List from './List1';
import { withStyles } from '@material-ui/core/styles';
import { Checkbox } from '@material-ui/core';

const Form = styled.form`
    width: 100%;
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
const Underform = styled.div`
    display: flex;
    align-items:center;
`
const Label = styled.label`
    font-size: 12px;
    line-height: 14px;
`
const ListItem = styled.div`
    display: flex;
    align-items: flex-start;
`
const ListLabel = styled.label`
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 30px;
`
const BlueCheckbox = withStyles({
    root: {
        color: '#2434A1',
        padding: 0,
        marginRight: '10px'
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);

const FormStep3 = ({
    nextStepHandler,
    backStepHandler,
    onSelectHandler,
    onHandleSelect,
    collaboration_categories_dataset
}) => {
    return (
        <>
            <Form>
                <InputWrapper>
                    {collaboration_categories_dataset.map((category, idx) => {
                        return (
                            category.label.toLowerCase().trim() !== 'other' && (
                                <List
                                    title={`${idx + 1}. Collaborate on ${category.label}`}
                                    listItems={category.types}
                                    key={idx}
                                    onSelectHandler={onSelectHandler}
                                >
                                    {category.types.map((type, idx) => {
                                        return (
                                            <ListItem key={type.id}>
                                                <BlueCheckbox
                                                    onChange={() => onHandleSelect({ ...category })({ ...type })}
                                                    value={type.label}
                                                />
                                                <ListLabel>{type.label}</ListLabel>
                                            </ListItem>
                                        )
                                    })}
                                </List>
                            )
                        )
                    })}
                </InputWrapper>
                <Underform>
                    <BlueCheckbox
                        type="checkbox"
                        id='agree_checkbox'
                        name='agree_checkbox'
                    />
                    <Label htmlFor='agree_checkbox'>I agree to <span className='with-underline color_bright-blue'>Terms & Conditions.</span></Label>
                </Underform>
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
                Create Account
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

FormStep3.propTypes = {
    nextStepHandler: PropTypes.func.isRequired,
    backStepHandler: PropTypes.func.isRequired,
    onSelectHandler: PropTypes.func.isRequired,
    collaboration_categories_dataset: PropTypes.array.isRequired,
};

export default FormStep3;