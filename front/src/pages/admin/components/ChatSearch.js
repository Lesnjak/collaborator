import React, {useState} from 'react';
import styled from 'styled-components';
import TextField from './TextField';
import search from 'assets/icons/search.svg';
import jessica from 'assets/images/jessica-felicio.jpg'
import charles from 'assets/images/charles.jpg'
import Avatar from "../../landing/components/Avatar";
import Respondent from "./Respondent";

const chatRespondents = [
    {
        id:222,
        src: jessica,
        name: "Aleksandra Power",
        lastMessage: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
        time: '4:23 PM'
    },
    {
        id:223,
        src: charles,
        name: "John Dou",
        lastMessage: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
        time: '4:23 PM'
    }, {
        id:224,
        src: jessica,
        name: "Aleksandra Power",
        lastMessage: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
        time: '4:23 PM'
    },
    {
        id:225,
        src: charles,
        name: "John Dou",
        lastMessage: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
        time: '4:23 PM'
    },
    {
        id:226,
        src: jessica,
        name: "Aleksandra Power",
        lastMessage: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
        time: '4:23 PM'
    },
    {
        id:227,
        src: charles,
        name: "John Dou",
        lastMessage: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
        time: '4:23 PM'
    },
    {
        id:228,
        src: jessica,
        name: "Aleksandra Power",
        lastMessage: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
        time: '4:23 PM'
    },
    {
        id:227,
        src: charles,
        name: "John Dou",
        lastMessage: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
        time: '4:23 PM'
    },
    {
        id:228,
        src: jessica,
        name: "Aleksandra Power",
        lastMessage: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
        time: '4:23 PM'
    },
    {
        id:227,
        src: charles,
        name: "John Dou",
        lastMessage: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
        time: '4:23 PM'
    },
    {
        id:228,
        src: jessica,
        name: "Aleksandra Power",
        lastMessage: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
        time: '4:23 PM'
    },



]

const Box = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);    
    width: 278px;
    align-items: center;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    @media (max-width: 1530px) {

    }
    @media (max-width: 1150px) {
         margin-right: 0;
         border-right: 1px solid #3c3e4433;
             box-shadow:none;    

    }
    @media (max-width: 993px) {
     width: 63px;
     margin-bottom: 70px;
     
    }
`

const SearchBar = styled.div`
    border-bottom: 1px solid rgba(60, 62, 68, 0.2);
    height: 84px;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (max-width: 993px) {
      display: none;
    }
`
const Body = styled.div`
    width: 100%;
    overflow-y: auto;
    @media (max-width: 1150px) {
 
    }
    
    &::-webkit-scrollbar-track {
        background-color: #FFF;
    }

    &::-webkit-scrollbar{
        width: 2px;
        background-color: #FFF;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #999FAE;
        position: relative;
        left: 10px
    }
    
`
const Placeholder = styled.p`
    color: #999FAE;
    text-align: center;
`

const ChatSearch = ({onClick}) => {
    const [value, setValue] = useState('');
    return (
        <Box>
            <SearchBar>
                <TextField
                    placeholder='Search contact'
                    value={value}
                    onChangeHandler={e => setValue(e.target.value)}
                    width='218px'
                    type='text'
                    name='searchText'
                    icon={search}
                    marginBottom='0px'
                />
            </SearchBar>
            <Body>
                {chatRespondents.length === 0 && <Placeholder>Your chats will be here...</Placeholder>}
                {chatRespondents.length > 0 &&
                chatRespondents.map((res,idx) =>
                    <Respondent
                        idx ={idx} src={res.src}
                        lastMessage={res.lastMessage}
                        time={res.time}
                        name={res.name}/>
                        )}
            </Body>
        </Box>
    );
}

export default ChatSearch;
