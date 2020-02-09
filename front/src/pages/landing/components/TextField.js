import React from 'react';
import styled from 'styled-components';
import secret from '../../../assets/icons/secret.svg';


const Border = styled.div`
    width: ${props => props.width};
    max-width: 550px;
    width: 100%;
    min-height: 36px;
    border: 1px solid #999FAE;
    box-sizing: border-box;
    border-radius: 4px;
    background: #FFFFFF;
    text-align: left;
    padding: 10px 16px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;

    &:focus-within {
        border: 1px solid #31384E;
    }

    &:hover {
        border: 1px solid #7283B6;
    }
`
const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
`
const TextArea = styled.textarea`
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none; 
    font-family: inherit;
    overflow: hidden;
    width: 100%;
    height: ${props => props.height ? props.height : '100px'} ;
`
const HelperText = styled.p`
    font-size: 12px;
    line-height: 14px;
    padding: 0 16px;
    color: #999FAE;
    margin-top: -7px;
`
const TextField = ({
    placeholder,
    value,
    onChangeHandler,
    textarea,
    width,
    type,
    name,
    height,
    helperText,
    isRequired,
}) => {
    return (
        <>
            <Border width={width}>
                {textarea ? (
                    <TextArea
                        placeholder={placeholder}
                        value={value}
                        onChange={onChangeHandler}
                        name={name}
                        height={height}
                        required={!!isRequired}
                    />
                ) : (
                        <>
                            <Input
                                placeholder={placeholder}
                                value={value}
                                onChange={onChangeHandler}
                                type={type}
                                name={name || type}
                                required={!!isRequired}
                            />
                            {type === 'password' && <img src={secret} alt="icon" />}
                        </>
                    )}

            </Border>
            {helperText && <HelperText>{helperText}</HelperText>}
        </>
    );
}

export default TextField;
