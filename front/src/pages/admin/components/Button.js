import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: ${props => props.width};
    min-width: 95px;
    min-height: 36px;
    padding: 0px 15px;
    cursor: pointer;
    color: ${({ color = '#2434A1' }) => color};
    border-radius: 4px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${props => (props.variant === 'primary' ? props.bg : 'transparent')};
    border: ${props => (props.variant === 'secondary' ? '1px solid' : 'none')};
    border-color: ${({ color = '#2434A1' }) => color};
    box-shadow: ${props => (props.variant === 'primary' ? '0px 1px 4px rgba(0, 0, 0, 0.35)' : '')};

  &:hover {
    box-shadow: ${props => (props.variant === 'primary' ? '0px 2px 5px rgba(0, 0, 0, 0.3)' : '')};
    background-color: ${props => (props.variant !== 'primary' && '#F6F9FF')};
    color: ${props => (props.variant !== 'primary' && props.bg)};
  }

  &:active {
    background-color: ${props => (props.variant === 'primary' ? '#FFB10E' : '#EDF4FF')};
    color: #2434A1;
  }

  &:disabled {
    opacity: 0.2;
  }
`;

const Button = (props) => {
  return (
    <StyledButton {...props} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
}

export default Button;