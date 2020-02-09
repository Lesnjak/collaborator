import React, {useState} from 'react';
import styled from 'styled-components';
import {connect, useSelector} from "react-redux";

import Heading from '../components/Heading';
import InputSelectRoute from '../components/InputSelectRoute';
import CardPerson from '../components/CardPerson';
import {searchCollaborations} from '../../../store/collaborations/actions';
import luis from '../../../assets/images/luis.jpg'
import charles from '../../../assets/images/charles.jpg'
import jessica from '../../../assets/images/jessica-felicio.jpg'
import ayo from '../../../assets/images/ayo.jpg'
import HeadBar from '../components/HeadBar';
import Cardholder from '../components/Cardholder';
import CardBusiness from "../components/CardBusiness";


const mockCollabs = [
    {
        category: {
            label: 'marketing & promotions'
        },
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ''
    },
    {
        category: {
            label: 'collaboration'
        },
        businesName: 'Business Name, LTD',
        name: 'Annabella York',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: luis
    },
    {
        category: {
            label: 'collaboration'
        },
        businesName: 'Business Name, LTD',
        name: 'John Dou',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: charles
    },
    {
        category: {
            label: 'collaboration'
        },
        businesName: 'Business Name, LTD',
        name: 'Elicia Gale',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: jessica
    },
    {
        category: {
            label: 'collaboration'
        },
        businesName: 'Business Name, LTD',
        name: 'Kaila Sherman',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
    },
    {
        category: {
            label: 'collaboration'
        },
        businesName: 'Business Name, LTD',
        name: 'Shanon Mitchell',
        type: {
            label: 'I want to advertise my products/services to your customers'
        },
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ayo
    }
]

const mockBusiness = [
    {
        branch: 'marketing & promotions',
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        tags: [{
            label: 'I want to advertise my products/services to your customers',
            id: 1
        }],
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ''
    },
    {
        branch: 'marketing & promotions',
        businesName: 'Business Name, LTD',
        name: 'Annabella York',
        tags: [{
            label: 'I want to advertise my products/services to your customers',
            id: 1
        }],
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: luis
    }
]

const Container = styled.div`
    margin-top: 40px;    
`
const Content = styled.div`    
    margin-top: 64px;
    width: 100%;    
    text-align: center;
`
const TabContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`
const Tab = styled.div`
    padding: 15px 30px;
    border-bottom: 1px solid;
    border-color: ${({isActive}) => isActive ? '#FFB10E' : '#999FAE'};
    color: ${({isActive}) => isActive ? '#2434A1' : '#999FAE'};
    cursor: pointer;
    font-weight: ${({isActive}) => isActive ? 'bold' : 'normal'};
`
const CardWrapper = styled.div`
    display: flex;
    flex-wrap:wrap;
    margin: 70px -16px 0;
`

const MyFavourites = ({toggleModalSelect, company}) => {

    // state = {
    //     collaborations: mockCollabs,
    //     businesses: null
    // }

    // showBusiness = () => {
    //     this.setState({
    //         collaborations: null,
    //         businesses: mockBusiness
    //     })
    // }
    //
    // showCollabs = () => {
    //     this.setState({
    //         collaborations: mockCollabs,
    //         businesses: null
    //     })
    // }
    const [showCollaborations, setShowCollaborations] = useState(true);

    const collaborations = useSelector(state => state.favorite_collaborations);
    const businesses = useSelector(state => state.favorite_collaborations);


    // render() {
    //     const {
    //         collaborations,
    //         businesses
    //     } = this.state;

    return (
        <Container>
            <HeadBar>
                <Heading align='left'>My Favourites</Heading>
                <InputSelectRoute width='154px' toggleModalSelect={toggleModalSelect}/>
            </HeadBar>

            <TabContainer>
                <Tab isActive={showCollaborations} onClick={() => setShowCollaborations(true)}>Collaborations</Tab>
                <Tab isActive={!showCollaborations} onClick={() => setShowCollaborations(false)}>Businesses</Tab>
            </TabContainer>

            <Content>
                <Cardholder>
                    {showCollaborations ? (
                        collaborations.map((item, idx) => (
                            <CardPerson
                                key={(item && item._id) || idx}
                                title={item.category && item.category.label}
                                businesName={item.businesName}
                                name={item.name || 'Test Name'}
                                textCollaboration={item.type.label}
                                textDescription={item.description}
                                avatar={item.avatar ? item.avatar : null}
                                isFavorite={true}
                                collaborationId={item._id}
                                companyId={company._id}
                            />
                        ))
                    ) : (
                        null
                        // businesses.map((item, idx) => (
                        //     <CardBusiness
                        //         key={(item && item._id) || idx}
                        //         title={item.category && item.category.label}
                        //         businesName={item.businesName}
                        //         name={item.name || 'Test Name'}
                        //         tags={item.tags.map(el => el.label).join(', ')}
                        //         textDescription={item.description}
                        //         avatar={item.avatar ? item.avatar : null}
                        //     />
                        // )))
                    )
                    }
                </Cardholder>
                {/*{collaborations &&*/}
                {/*<Cardholder>*/}
                {/*    {*/}
                {/*        collaborations.map((item, idx) => (*/}
                {/*            <CardPerson*/}
                {/*                key={(item && item._id) || idx}*/}
                {/*                title={item.category && item.category.label}*/}
                {/*                businesName={item.businesName}*/}
                {/*                name={item.name || 'Test Name'}*/}
                {/*                textCollaboration={item.type.label}*/}
                {/*                textDescription={item.description}*/}
                {/*                avatar={item.avatar ? item.avatar : null}*/}
                {/*            />*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</Cardholder>*/}
                {/*}*/}
                {/*{businesses &&*/}
                {/*<Cardholder>*/}
                {/*    {*/}
                {/*        businesses.map((item, idx) => (*/}
                {/*            <CardBusiness*/}
                {/*                key={(item && item._id) || idx}*/}
                {/*                title={item.category && item.category.label}*/}
                {/*                businesName={item.businesName}*/}
                {/*                name={item.name || 'Test Name'}*/}
                {/*                tags={item.tags.map(el => el.label).join(', ')}*/}
                {/*                textDescription={item.description}*/}
                {/*                avatar={item.avatar ? item.avatar : null}*/}
                {/*            />*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</Cardholder>*/}
                {/*}*/}
            </Content>
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        categories: state.collaboration_categories,
        number_of_employees: state.number_of_employees,
        collaborations: state.collaborations,
        company: state.company_data.company
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchCollabs: (params) => dispatch(searchCollaborations(params))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyFavourites);


