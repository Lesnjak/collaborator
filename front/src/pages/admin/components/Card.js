import React from 'react';
import styled from 'styled-components';
import PostModal from "./PostModal";

const Box = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    flex-direction: column;
    width: 278px;
    align-items: center;
    padding: 0 20px;
    flex-shrink: 0;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    }
`
const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: #F7F8FB;
    margin-top: 40px;
    margin-bottom: 34px;
`
const Title = styled.p`
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
`

const Text = styled.p`
    font-weight: normal;
    font-size: 13px;
    line-height: 21px;
    margin-top: 14px;
    margin-bottom: 60px;
`
function handleClick() {


}
const Card = ({ icon, title, text, onClick, onMouseOver }) => {
    return (
        <>
            <Box onMouseOver={onMouseOver} onClick={onClick}>
                <Icon>
                    <img src={icon} alt="icon" />
                </Icon>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </Box>
        </>
    );
}

export default Card;
