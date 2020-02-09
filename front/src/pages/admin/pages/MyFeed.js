import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import Heading from '../components/Heading';
import InputSelectRoute from '../components/InputSelectRoute';
import {searchFeeds} from "../../../store/myFeed/actions"
import HeadBar from '../components/HeadBar';
import SearchBox from "../components/MyFeedComponents/SearchBox";
import CardList from "../components/MyFeedComponents/CardList";


const Container = styled.div`
    margin-top: 40px;    
`
const Content = styled.div`   
    margin-top:64px; 
    width: 100%;    
    display: flex;
    flex-direction: column;
        padding-bottom: 50px;
    @media (max-width: 993px) {
     margin-top: 40px;
}
`

const checkBoxes = [
    {
        name: 'collaboration',
        checked: true,
        color:'#5075D6'
    },
    {
        name: 'Member Offer',
        checked: true,
        color:'#FFB10E'
    },
    {
        name: 'giveaway',
        checked: true,
        color:'#56C361'
    },
    {
        name: 'event',
        checked: true,
        color:'#884BAC'
    }

]

function filter(checkboxes) {

}

const MyFeed = ({toggleModalSelect, feedList, searchFeeds}) => {
    const [checkbox, setCheckbox] = useState(checkBoxes);
    const [newFeedList, setNewFeedList] = useState([]);
    useEffect(() => {
        searchFeeds()
    }, []);
    useEffect(()=>{
        setNewFeedList(feedList)
    },[feedList])

    const filterCards = () => {
        let newList = feedList.filter(list => {
             return  checkBoxes.some(({name, checked}) =>list.category.label === name && checked);
        })

        setNewFeedList(newList);
        
    }
    const handleChangeCheckbox = ({name,checked}) => ()  => {
        const find = checkbox.find((item)=>name === item.name);
        find.checked = !find.checked;

        const checkStaus = [
            ...checkbox,
         ]
        setCheckbox(checkStaus);
        filterCards(name,checked)

    }
    return (
        <Container>
            <HeadBar>
                <Heading align='left'>My feed</Heading>
                <InputSelectRoute  width='154px' toggleModalSelect={toggleModalSelect}/>
            </HeadBar>

            <Content>
                <SearchBox feedList={newFeedList} checkboxses={checkbox} handleChangeCheckbox={handleChangeCheckbox}/>
                <CardList feedList={newFeedList}/>
            </Content>
        </Container>
    );
}


MyFeed.defaultProps = {
    feedList: []
}
const mapStateToProps = state => {
    console.log(state);

    return {
        categories: state.collaboration_categories,
        number_of_employees: state.number_of_employees,
        collaborations: state.collaborations,
        feedList: state.myFeed && state.myFeed,
    }
}

export default connect(mapStateToProps, {searchFeeds})(MyFeed);


