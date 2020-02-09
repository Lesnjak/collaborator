import React from 'react';
import { FormWrapper } from './FormStyled';

const Form = ({children}) => {
    return (
        <FormWrapper>
            {children}
        </FormWrapper>
    );
};

export default Form;
