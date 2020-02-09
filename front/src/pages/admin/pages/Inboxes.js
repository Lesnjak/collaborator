import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import Heading from '../components/Heading';
import InputSelectRoute from '../components/InputSelectRoute';
import { searchCollaborations } from '../../../store/collaborations/actions';
import luis from '../../../assets/images/luis.jpg'
import charles from '../../../assets/images/charles.jpg'
import jessica from '../../../assets/images/jessica-felicio.jpg'
import ayo from '../../../assets/images/ayo.jpg'
import ChatSearch from '../components/ChatSearch';
import ChatBox from '../components/ChatBox';
import ChatMessage from '../components/ChatMessage';
import HeadBar from '../components/HeadBar';



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
            label: 'marketing & promotions'
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
            label: 'staff & human resources'
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
            label: 'marketing & promotions'
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
            label: 'marketing & promotions'
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
            label: 'staff & human resources'
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
const mockMessages = [
    {
        createdDate: Date.now(),
        author: {
            type: 'Id',
            ref: "Company",
            avatar: charles,
            name: 'John Dou'
        },
        message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum mollitia porro labore esse quibusdam reprehenderit expedita atque quod? Mollitia, illo?'
    },
    {
        createdDate: Date.now(),
        author: {
            type: 'Id',
            ref: "Company",
            avatar: jessica,
            name: 'Aleksandra Power'
        },
        message: 'Lorem ipsum dolor sit amet.'
    },
]


const Container = styled.div`
    margin-top: 40px;    
`
const Content = styled.div`    
    margin-top: 64px;
    width: 100%;    
    height: 690px;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    @media (max-width: 1150px) {
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);    
}
    @media (max-width: 993px) {
    height: 500px;  
        margin-bottom: 50px;
}
`

class Inboxes extends React.Component {


    state = {
        collaborations: mockCollabs,
        businesses: null
    }

    showBusiness = () => {
        this.setState({
            collaborations: null,
            businesses: mockBusiness
        })
    }

    showCollabs = () => {
        this.setState({
            collaborations: mockCollabs,
            businesses: null
        })
    }

    render() {

        return (
            <Container>
                <HeadBar>
                    <Heading align='left'>Inbox</Heading>
                    <InputSelectRoute width='154px' toggleModalSelect={this.props.toggleModalSelect} />
                </HeadBar>

                <Content>
                    <ChatSearch />
                    <ChatBox>
                        {
                            mockMessages.map((msg, idx) => {
                                const { message, createdDate, author } = msg;
                                return (
                                    <ChatMessage
                                        key={idx}
                                        message={message}
                                        date={createdDate}
                                        author={author}
                                    />
                                )
                            })
                        }
                    </ChatBox>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.collaboration_categories,
        number_of_employees: state.number_of_employees,
        collaborations: state.collaborations,
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
)(Inboxes);


