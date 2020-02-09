import React, {useState} from 'react';
import TextField from "./TextField";
import Button from "./Button";
import styled from "styled-components";
import {resetPassword} from "../../../store/user/actions";
import axios from "axios"

const Form = styled.form`
    width: 100%;
    max-width: 410px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 190px;
`
const Wrapper = styled.form`
    width: 100%;
    max-width: 410px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 190px;
`

const Dialog = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-bottom: 12px;
`
const Bold = styled.span`
    font-weight: 500;
    color: #2434A1;
    cursor: pointer;
`
const Underlined = styled.p`
    text-decoration: underline;
    color: #2434A1;
    cursor: pointer;
`
const Message = styled.p`
    font-size: 18px;
    line-height: 24px;
    text-align: center;

`

const Info = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    word-break: break-word;
    margin-bottom: 40px;
`

const url = 'https://collabbed-api.codeondeck.com'

const ResetPasswordModal = ({resetPassword, push, toggleModal, toggleResetPasswordModal}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    // const [password2, setPassword2] = useState("")

    const requestPasswordReset = (event) => {
        event.preventDefault();
        axios.post(`${url}/user/request-password-reset/`, {email})
            .then(res => {
                toggleResetPasswordModal();
                // toggleModal("Reset password link was sanded to your email box")
            })
            .catch(err => {
                toggleResetPasswordModal();
            })
    }

    const updatePassword = (event) => {
        event.preventDefault();

        const data = {
            code: resetPassword,
            newPassword: password
        }

        axios.post(`${url}/user/reset-password`, data)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))

        push("/")
    };

    if (resetPassword) {
        return (
            <Form>
                <Info>
                    Please enter your new password.
                </Info>
                <TextField
                    placeholder='Enter new password'
                    type="password"
                    onChangeHandler={({target}) => setPassword(target.value)}
                    value={password}
                />
                {/*<TextField*/}
                {/*    placeholder='Enter new password'*/}
                {/*    type="password"*/}
                {/*    onChangeHandler={({target}) => setPassword2(target.value)}*/}
                {/*    value={password2}*/}
                {/*/>*/}

                <Button
                    variant='primary'
                    color='#2434A1'
                    bg='#FFC651'
                    onClick={updatePassword}
                    // disabled={!(email && password)}
                >
                    Reset password
                </Button>
            </Form>
        )
    } else {
        return (
            <Wrapper>
                <Info>
                    Please enter your email address. You will receive a link to create new password via email.
                </Info>
                <TextField
                    placeholder='Enter your email'
                    type='email'
                    onChangeHandler={({target}) => setEmail(target.value)}
                    value={email}
                />
                <Button
                    variant='primary'
                    color='#2434A1'
                    bg='#FFC651'
                    disabled={!!password}
                    onClick={requestPasswordReset}
                >
                    Request reset password link
                </Button>
            </Wrapper>
        );
    }
};

export default ResetPasswordModal;
