import React from 'react';
import styled, {keyframes} from 'styled-components';
import {connect} from "react-redux";
import axios from "axios"
import Heading from '../components/Heading';
import InputSelectRoute from '../components/InputSelectRoute';
import CardPerson from '../components/CardPerson';
import CardBusiness from '../components/CardBusiness';
import luis from '../../../assets/images/luis.jpg'
import charles from '../../../assets/images/charles.jpg'
import jessica from '../../../assets/images/jessica-felicio.jpg'
import ayo from '../../../assets/images/ayo.jpg'
import ChatBox from '../components/ChatBox';
import ChatMessage from '../components/ChatMessage';
import ChatSidebar from '../components/ChatSidebar';
import CardSlider from '../components/CardSlider';
import {archiveCompany} from '../../../store/company/actions';

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
        businesName: 'Business Name',
        name: 'Aleksandra Power',
        entityType: 'LTD',
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
        entityType: 'LTD',
        tags: [{
            label: 'I want to advertise my products/services to your customers',
            id: 1
        }],
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: luis
    },
    {
        branch: 'marketing & promotions',
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        entityType: 'LTD',
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
        entityType: 'LTD',
        tags: [{
            label: 'I want to advertise my products/services to your customers',
            id: 1
        }],
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: luis
    },
    {
        branch: 'marketing & promotions',
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        entityType: 'LTD',
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
        entityType: 'LTD',
        tags: [{
            label: 'I want to advertise my products/services to your customers',
            id: 1
        }],
        description: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: luis
    }
]

const animateHeader = keyframes`
    from{
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`
const slideUp = keyframes`
    from{
        opacity: 0;
        transform: translateY(500px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
`
const slideRight = keyframes`
    from{
        opacity: 0;
        transform: translateX(-500px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
`
const slideLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(500px)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
`

const Container = styled.div`
    margin-top: 40px;    
    margin-bottom: 124px;
width: 100%;
`
const HeadBar = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: center;
    animation: ${animateHeader} 2s;
`
const Content = styled.div`
`
const SlideRight = styled.div`
    animation: ${slideRight} 1s;
`
const SlideLeft = styled.div`
    animation: ${slideLeft} 1s;
`
const SlideUp = styled.div`
    animation: ${slideUp} 1s;
`
const Messager = styled.div`    
    margin-top: 64px;
    width: 100%;    
    height: 370px;
    display: flex;
    justify-content: center;
`
const CardWrapper = styled.div`
 display: flex;
 justify-content: center;
    
`

const url = 'https://collabbed-api.codeondeck.com';


class Dashboard extends React.Component {
    state = {
        featuredCollaborations: [],
        featuredBusinesses: []
    };

    componentDidMount() {
        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        };
        axios.get(`${url}/collaboration/featured`, config)
            .then(res => {
                this.setState({featuredCollaborations: res.data.data})
            });
        axios.get(`${url}/company/featured`, config)
            .then(res => {
                this.setState({featuredBusinesses: res.data.data})
            })
    }


    render() {
        const user = JSON.parse(localStorage.user);
        const data = {
            ...user,
            ...user.companies[0]
        }
        const {
            _id,
            firstName,
            lastName,
            email,
            profileImageExt,
            name,
            entityType,
            contactDetails,
            registrationNumber,
            businessType,
            businessFocus,
            numberOfEmployees,
            city,
            country,
            industry,
            tags,
            description,
            annualTurnover
        } = data;
        const sum =
            !!firstName +
            !!lastName +
            !!email +
            !!name +
            !!entityType.label +
            !!(contactDetails.length > 0) +
            !!registrationNumber +
            !!businessType.label +
            !!businessFocus.label +
            !!numberOfEmployees.label +
            !!city +
            !!country +
            !!industry +
            !!(tags.length > 0)
        ;
        const percent = Math.round(sum * 100 / 14);

        const {companies} = user;

        const {
            removeHandler,
            editHandler
        } = this.props;
        const {featuredCollaborations, featuredBusinesses} = this.state;
        return (
            <Container>
                <HeadBar>
                    <Heading align='left'>Dashboard</Heading>
                    <InputSelectRoute width='154px' toggleModalSelect={this.props.toggleModalSelect}/>
                </HeadBar>

                <Content>
                    <Messager>
                        <SlideRight>
                            <ChatSidebar percent={percent}/>
                        </SlideRight>

                        <SlideLeft>
                            <ChatBox quickChat>
                                {
                                    mockMessages.map((msg, idx) => {
                                        const {message, createdDate, author} = msg;
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
                        </SlideLeft>
                    </Messager>
                    <SlideUp>
                        <CardSlider
                            heading='Featured Businesses'
                            description='These businesses we think would be a great match for you!'
                            itemsNumber={featuredBusinesses.length}
                        >
                            {
                                featuredBusinesses.length && featuredBusinesses.map(({company}, idx) => {
                                    return (
                                        <CardWrapper key={idx}>
                                            <CardBusiness
                                                businesName={company.name}
                                                entityType={company.entityType}
                                                name={company.name}
                                                tags={company.tags.map(el => el.label).join(', ')}
                                                textDescription={company.description && company.description}
                                                avatar={company.avatar ? company.avatar : null}
                                                companyId={company._id}
                                            />
                                        </CardWrapper>
                                    )
                                })
                            }
                            {/*{*/}
                            {/*    mockBusiness.map((company, idx) => {*/}
                            {/*        return (*/}
                            {/*            <CardWrapper key={idx}>*/}
                            {/*                <CardBusiness*/}
                            {/*                    businesName={company.name}*/}
                            {/*                    entityType={company.entityType}*/}
                            {/*                    name={company.name}*/}
                            {/*                    tags={company.tags.map(el => el.label).join(', ')}*/}
                            {/*                    textDescription={company.description && company.description}*/}
                            {/*                    avatar={company.avatar ? company.avatar : null}*/}
                            {/*                    companyId={company._id}*/}
                            {/*                />*/}
                            {/*            </CardWrapper>*/}
                            {/*        )*/}
                            {/*    })*/}
                            {/*}*/}
                        </CardSlider>

                        <CardSlider
                            heading='Featured collaborations'
                            description='These collaboration opportunities might be of interest!'
                            itemsNumber={featuredCollaborations.length}
                        >
                            {
                                featuredCollaborations.length && featuredCollaborations.map((company, idx) => {
                                    return (
                                        <CardPerson
                                            key={idx}
                                            title={company.collaboration.category && company.collaboration.category.label}
                                            businesName={company.collaboration.businesName}
                                            name={company.collaboration.name || 'Test Name'}
                                            textCollaboration={company.collaboration.type.label}
                                            textDescription={company.collaboration.description}
                                            avatar={company.collaboration.avatar ? company.collaboration.avatar : null}
                                        />
                                    )
                                })
                            }
                            {/*{*/}
                            {/*    mockCollabs.map((company, idx) => {*/}
                            {/*        return (*/}
                            {/*            <CardPerson*/}
                            {/*                key={idx}*/}
                            {/*                title={company.category && company.category.label}*/}
                            {/*                businesName={company.businesName}*/}
                            {/*                name={company.name || 'Test Name'}*/}
                            {/*                textCollaboration={company.type.label}*/}
                            {/*                textDescription={company.description}*/}
                            {/*                avatar={company.avatar ? company.avatar : null}*/}
                            {/*            />*/}
                            {/*        )*/}
                            {/*    })*/}
                            {/*}*/}
                        </CardSlider>

                        <CardSlider
                            heading='My Posted Collaborations'
                            itemsNumber={mockCollabs.length}
                            withMenu
                            toggleModalSelect={this.props.toggleModalSelect}
                        >
                            {companies &&
                            companies.length > 0 &&
                            companies[0].collaborations.map(collaboration => {
                                return (
                                    <CardWrapper key={collaboration._id}>
                                        <CardPerson
                                            // key={}
                                            myPosted
                                            title={collaboration.category.label}
                                            businesName={`${companies[0].name}, ${companies[0].entityType}`}
                                            name={`${firstName} ${lastName}`}
                                            avatar={`https://collabbed-api.codeondeck.com/company_logo_images/${companies[0]._id}${companies[0].logoImageExt}`}
                                            textCollaboration={collaboration.type.label}
                                            textDescription={collaboration.description}
                                            removeHandler={removeHandler}
                                            editHandler={editHandler}
                                            companyId={companies[0]._id}
                                        />
                                    </CardWrapper>
                                )
                            })}
                        </CardSlider>
                    </SlideUp>
                </Content>
            </Container>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        removeHandler: (companyId) => dispatch(archiveCompany(companyId))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Dashboard);


