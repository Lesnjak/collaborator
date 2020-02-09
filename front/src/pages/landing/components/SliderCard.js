import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    position: relative;
    background-color: #fff;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    /* width: ${props => props.variant === 'right' ? '200px' : '178px'}; */
    padding: 20px 25px 30px 35px;
    margin-left: ${props => props.variant === 'right' ? '7px' : '65px'};
    margin-right: ${props => props.variant === 'right' ? '90px' : '0'};
    margin-top: ${props => props.variant === 'right' ? '-15px' : '0'};
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    
    @media (min-width: 1024px) {
        margin-top: 0;
        width: ${props => props.variant === 'right' ? '39%' : ''};
        flex-shrink: ${props => props.variant === 'right' ? '0' : ''};
    }
`

const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border: 5px solid #EDF4FF;
    border-radius: 50%;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${props => props.variant === 'right' ? '80%' : '-60px'};
`


const SliderCard = ({ avatar, company, name, info, variant }) => {
    return (
        <Wrapper className='smaller' variant={variant}>
            <Avatar src={avatar} variant={variant} />
            <p className='mb-15 bold'>{company}</p>
            <p className='mb-25'>{name}</p>
            <p className='mb-15 color_bright-blue bold'>LOOKING FOR</p>
            <p>{info}</p>
        </Wrapper>
    );
}

export default SliderCard;