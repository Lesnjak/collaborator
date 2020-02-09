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
    padding: 10px 8px;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${({ marginBottom = '14px' }) => marginBottom};

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
        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: #aaa;
    }
    ::-moz-placeholder { /* Firefox 19+ */
      color: #aaa;
    }
    :-ms-input-placeholder { /* IE 10+ */
      color: #aaa;
    }
    :-moz-placeholder { /* Firefox 18- */
      color: #aaa;
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
    font-size: 14px;
    overflow: hidden;
    width: 100%;
    height: ${props => props.height ? props.height : '100px'} ;
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: #aaa;
    }
    ::-moz-placeholder { /* Firefox 19+ */
      color: #aaa;
    }
    :-ms-input-placeholder { /* IE 10+ */
      color: #aaa;
    }
    :-moz-placeholder { /* Firefox 18- */
      color: #aaa;
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
    margin-bottom: 5px;
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
    icon,
    marginBottom
}) => {
    return (
        <Wrapper width={width}>
            {helperTextTop && <HelperTextTop>{helperTextTop}</HelperTextTop>}
            <Border marginBottom={marginBottom}>
                {textarea ? (
                    <TextArea
                        placeholder={placeholder}
                        value={value}
                        onChange={onChangeHandler}
                        name={name}
                        height={height}
                        readOnly={readOnly}
                        maxLength={100}
                    />
                ) : (
                        <>
                            <Input
                                placeholder={placeholder}
                                value={value}
                                onChange={onChangeHandler}
                                type={type}
                                name={name || type}
                                readOnly={readOnly}
                            />
                            {type === 'password' && <img src={secret} alt="icon" />}
                            {icon && <img src={icon} alt="icon" />}
                        </>
                    )}

            </Border>
            {helperText && <HelperText>{helperText}</HelperText>}
        </Wrapper>
    );
}

export default TextField;
