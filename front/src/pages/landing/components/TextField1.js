import React from 'react';
import styled from 'styled-components';
import secret from '../../../assets/icons/secret.svg';



const Wrapper = styled.div`
    width: 100%;
    max-width: ${({ width }) => width};
`
const Border = styled.div`
    /* max-width: 550px; */
    width: 100%;
    min-height: 36px;
    border: 1px solid #999FAE;
    box-sizing: border-box;
    border-radius: 4px;
    background: #FFFFFF;
    text-align: left;
    padding: 0px 16px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;

    &:hover {
        border: 1px solid #7283B6;
    }

    &:focus-within {
        border: 1px solid #2434A1;
    }

    
`
const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
    font-size: 14px;

    &::placeholder{
        font-size: 14px;
        line-height: 34px;
        color: #999FAE;
    }
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
    padding: 10px 0;

    &::placeholder{
        font-size: 14px;
        color: #999FAE;
    }
`
const HelperText = styled.p`
    font-size: 12px;
    line-height: 14px;
    padding: 0 16px;
    color: #999FAE;
    margin-top: -7px;
    text-align: left;
`
const HelperTextTop = styled(HelperText)`
    margin-top: 0px;
    margin-bottom: 7px;
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
    helperTextTop,
    readOnly,
}) => {
    return (
        <Wrapper width={width}>
            {helperTextTop && <HelperTextTop>{helperTextTop}</HelperTextTop>}
            <Border>
                {textarea ? (
                    <TextArea
                        placeholder={placeholder}
                        value={value && value}
                        onChange={onChangeHandler}
                        name={name}
                        height={height}
                    />
                ) : (

                        <>
                            <Input
                                value={value && value}
                                onChange={onChangeHandler}
                                type={type}
                                name={name || type}
                                readOnly={readOnly}
                                placeholder={placeholder}
                            />
                            {type === 'password' && <img src={secret} alt="icon" />}
                        </>
                    )}
            </Border>
            {helperText && <HelperText>{helperText}</HelperText>}
        </Wrapper>
    );
}

export default TextField;