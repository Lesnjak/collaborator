import React, {useEffect} from 'react';
import Masonry from 'react-masonry-css'
import {connect} from 'react-redux'
import {SearchResultWrapper} from './CardListStyled'
import {searchFeeds} from "../../../../../store/myFeed/actions"
import CardPerson from "../../CardPerson";
import './CardList.css'
import PlaceHolderWrapper from "../../PlaceHolder/PlaceHolderWrapper";




const CardList = ({feedList}) => {
        return (
            <SearchResultWrapper>

                {feedList.length === 0 && <PlaceHolderWrapper breakpointCols={{default: 6, 1700: 5, 1500:4,1200:3,993:2,600:1}} count='20'/>}


                <Masonry
                    breakpointCols={{default: 6, 1700: 5, 1500:4,1200:3,993:2,600:1}}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {feedList.map((item, idx)=>(
                        <CardPerson
                            key={idx}
                            title={item.category && item.category.label}
                            businesName={item.businesName}
                            name={item.name || 'Test Name'}
                            textCollaboration={item.type.label}
                            textDescription={item.description}
                            avatar={item.avatar ? item.avatar : null}
                            myPosted={false}
                            map={item.map}
                        />
                    ))
                    }
                </Masonry>
            </SearchResultWrapper>
        );
}
CardList.defaultProps = {
    feedList:[]
}


export default CardList;

