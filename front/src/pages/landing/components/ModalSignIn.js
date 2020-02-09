import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import TextField from './TextField';
import Button from './Button';
import { login } from '../../../store/login/actions';
import { requestPasswordReset } from '../../../store/user/actions';

const Form = styled.form`
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
class ModalSignIn extends React.Component {
    state = {
        email: '',
        password: ''
    }

    onChangeHandler = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
        // console.log(this.state)
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.props.closeHandler();
        // console.log(this.state)
    }

    onClickHandler = () => {
        this.props.requestPasswordReset(this.state.email)
    }

    render() {
        const {
            email,
            password
        } = this.state;

        const {
            openSignUp,
            message,
            openResetPassword
            // toggleModalResetPassword
        } = this.props;


        return (
            <Form onSubmit={this.onSubmitHandler}>
                {message ? (
                    <Message>{message}</Message>
                ) : (
                        <>
                            <TextField
                                placeholder='Enter your email'
                                type='email'
                                onChangeHandler={this.onChangeHandler}
                                value={email}
                            />
                            <TextField
                                placeholder='Enter your password'
                                type='password'
                                onChangeHandler={this.onChangeHandler}
                                value={password}
                            />
                            <Dialog>
                                <p>Don’t have an account? <Bold onClick={openSignUp}>Register</Bold></p>
                                {/*<Underlined onClick={this.onClickHandler}>Forgot your password?</Underlined>*/}
                                <Underlined onClick={openResetPassword}>Forgot your password?</Underlined>
                            </Dialog>
                        </>
                    )}
                <Button
                    variant='primary'
                    color='#2434A1'
                    bg='#FFC651'
                    disabled={!(email && password)}
                >
                    Sign In
                </Button>
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.user.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (user) => dispatch(login(user)),
        requestPasswordReset: (email) => dispatch(requestPasswordReset(email))
    };
};

ModalSignIn.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    requestPasswordReset: PropTypes.func.isRequired,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalSignIn);
