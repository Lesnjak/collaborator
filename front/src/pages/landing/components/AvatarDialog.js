import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    position: relative;
    width: 210px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    position: relative;
    display: block;
`
const Label = styled.div`
    margin-left: 7px;
    margin-right: 7px;
    box-sizing: border-box;
    width: 80px;
    font-weight: 500;
    font-size: 10px;
    line-height: 10px;
`
const LabelLeft = styled(Label)`
    padding: 10px 10px 15px 10px;
    background-color: #3864D8;
    color: #fff;
    border-radius: 0 10px 10px 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.45);
`

const LabelRight = styled(Label)`
    padding: 15px 10px 10px 10px;
    background-color: #fff;
    border-radius: 10px 10px 0 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`

const FirstPerson = styled.div`
    display: flex;
    align-items: center;
`

const SecondPerson = styled(FirstPerson)`
    justify-content: flex-end;
    margin-top: -15px;
`

const AvatarDialog = ({ avatarFirst, avatarSecond }) => {
    return (
        <Wrapper>
            <FirstPerson>
                <Avatar src={avatarFirst} />
                <LabelLeft>Hi! Let’s collab!</LabelLeft>
            </FirstPerson>
            <SecondPerson>
                <LabelRight>Great! Let’s do this!</LabelRight>
                <Avatar src={avatarSecond} />
            </SecondPerson>

        </Wrapper>
    );
}

export default AvatarDialog;
