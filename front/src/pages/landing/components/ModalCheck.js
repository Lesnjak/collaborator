import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import Button from './Button';
import axios from "axios";
import {requestNewVerificationCode, verifyFail, verifySuccess} from "../../../store/user/actions";
import {useDispatch, useSelector} from "react-redux";

const Form = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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

function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

const ModalCheck = ({verifyUser, onClick, toggleModalCheck, verifyPage, verifyCode, history}) => {
    const [message, setMessage] = useState("Email address verified! Welcome to collabbed.com.");

    useEffect(() => {
            const config = {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                },
            };

            axios.get(`${url}/user/verify/${verifyCode}`, config)
                .then(res => {
                    const { data } = res;
                    dispatch(verifySuccess(data));
                })
                .catch(err => {
                    if (!success) {
                        dispatch(verifyFail(err.response.data));
                        setMessage("Verification link has expired, request a new one.")
                    }
                })
    }, []);

    const dispatch = useDispatch();

    const success = useSelector(state => state.user.success);

    const handleClick = async () => {
        const parsedCode = parseJwt(verifyCode);

        await dispatch(requestNewVerificationCode(parsedCode.email));
        console.log("Props = ", history);
        history.push("/")
    };

    console.log("Reached", !!verifyUser, verifyPage);
    return (
        <Form>
            <Info>
                {message}
            </Info>
            {
                success ? (
                    <Link to='/'>
                        <Button
                            variant='primary'
                            color='#2434A1'
                            bg='#FFC651'
                            width='160px'
                            onClick={toggleModalCheck}
                        >
                            Close
                        </Button>
                    </Link>
                ) : (
                    <Button
                        variant='primary'
                        color='#2434A1'
                        bg='#FFC651'
                        width='160px'
                        onClick={handleClick}
                    >
                        Request
                    </Button>
                )
            }
        </Form>
    );
};

export default ModalCheck;
