import React, {useState, useRef, useEffect} from 'react';
import Avatar from 'pages/admin/components/Avatar';
import jessica from 'assets/images/jessica-felicio.jpg';
import {
    RespondentWrapper,
    RespondentTextWrapper,
    RespondentAvatarWrapper,
    RespondentNameWrapper,
    RespondentName,
    RespondentText,
    RespondentTime,
} from './RespondentStyled';

const Respondent = ({src = jessica, name = "Aleksandra Power", lastMessage = "Lorem ipsum dolor sit Lorem ipsum dolor sit", time = '4:23 PM',idx}) => {
    const [active, setActive] = useState(false);
    const handleActive = (e) => {
        setActive({
            active:e.target.checked
        })
        console.log(idx,e.target.checked);

    }
    return (
        <RespondentWrapper active={active} >
            <RespondentAvatarWrapper>
                <Avatar src={src} size='44px'/>
            </RespondentAvatarWrapper>
            <RespondentTextWrapper>
                <RespondentNameWrapper>
                    <RespondentName>{name}</RespondentName>
                    <RespondentTime>{time}</RespondentTime>
                </RespondentNameWrapper>
                <RespondentText>{lastMessage}</RespondentText>
            </RespondentTextWrapper>
        </RespondentWrapper>
    );
};

export default Respondent;
