import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TextField from './TextField1';
import Button from './Button';

const Form = styled.form`
    width: 100%;
    max-width: 540px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`
const Dialog = styled.p`
    font-size: 12px;
    margin-bottom: 12px;
    text-align: center;
    margin: 20px 0 30px;
`
const Bold = styled.span`
    font-weight: 500;
    color: #2434A1;
    cursor: pointer;
`
const Halfy = styled.div`
    width: 100%;
    
    @media (min-width: 768px) {        
        width: 47%;
    }
`

const FormStep1 = ({
    firstName,
    lastName,
    email,
    password,
    password_confirm,
    onChangeTextHandler,
    nextStepHandler,
    openSignIn
}) => {
    return (
        <>
            <Form>
                <InputWrapper>
                    <Halfy>
                        <TextField
                            placeholder='Your first name'
                            type='text'
                            onChangeHandler={onChangeTextHandler}
                            value={firstName}
                            name='firstName'
                            width='100%'
                        />
                    </Halfy>
                    <Halfy>
                        <TextField
                            placeholder='Your last name'
                            type='text'
                            onChangeHandler={onChangeTextHandler}
                            value={lastName}
                            name='lastName'
                            width='100%'
                        />
                    </Halfy>
                    <TextField
                        placeholder='Your email'
                        type='email'
                        onChangeHandler={onChangeTextHandler}
                        value={email}
                        name='email'
                        width='100%'
                    />
                    <TextField
                        placeholder='Your password'
                        type='password'
                        onChangeHandler={onChangeTextHandler}
                        value={password}
                        name='password'
                        width='100%'
                    />
                    <TextField
                        placeholder='Repeat your password'
                        type='password'
                        onChangeHandler={onChangeTextHandler}
                        value={password_confirm}
                        name='password_confirm'
                        width='100%'
                    />
                </InputWrapper>
                <Dialog>I already have an account. <Bold onClick={openSignIn}>Sign In</Bold></Dialog>
            </Form>
            <Button
                onClick={nextStepHandler}
                variant='primary'
                color='#2434A1'
                bg='#FFC651'
                width='160px'
                disabled={false}
            // {!(first_name && last_name && email && password && password_confirm && (password === password_confirm))}
            >
                Next
            </Button>
        </>
    );
}

FormStep1.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    password_confirm: PropTypes.string,
    onChangeTextHandler: PropTypes.func.isRequired,
    nextStepHandler: PropTypes.func.isRequired,
    openSignIn: PropTypes.func
};

FormStep1.defaultProps = {

};

export default FormStep1;