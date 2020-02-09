import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import InputSelect from '../components/InputSelect1';
import InputSelectRoute from '../components/InputSelectRoute';
import List from '../components/List';
import Button from '../components/Button';
import TextField from '../components/TextField';
import luis from '../../../assets/images/luis.jpg'
import charles from '../../../assets/images/charles.jpg'
import jessica from '../../../assets/images/jessica-felicio.jpg'
import ayo from '../../../assets/images/ayo.jpg'

import { connect } from "react-redux";
import { searchCompanies } from '../../../store/companies/actions';
import CardBusiness from '../components/CardBusiness';
import HeadBar from '../components/HeadBar';
import Cardholder from '../components/Cardholder';


const citys = [
    'Madrid', 'Berlin', 'Rome', 'Paris', 'Moskow'
]
const countrys = [
    'Spain', 'Germany', 'Italy', 'France', 'Russia'
]

const mock = [
    {
        branch: 'marketing & promotions',
        businesName: 'Business Name, LTD',
        name: 'Aleksandra Power',
        textCollaboration: 'I want to advertise my products/services to your customers',
        textDescription: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ''
    },
    {
        branch: 'marketing & promotions',
        businesName: 'Business Name, LTD',
        name: 'Annabella York',
        textCollaboration: 'I want to advertise my products/services to your customers',
        textDescription: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: luis
    },
    {
        branch: 'staff & human resources',
        businesName: 'Business Name, LTD',
        name: 'John Dou',
        textCollaboration: 'I want to advertise my products/services to your customers',
        textDescription: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: charles
    },
    {
        branch: 'marketing & promotions',
        businesName: 'Business Name, LTD',
        name: 'Elicia Gale',
        textCollaboration: 'I want to advertise my products/services to your customers',
        textDescription: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: jessica
    },
    {
        branch: 'marketing & promotions',
        businesName: 'Business Name, LTD',
        name: 'Kaila Sherman',
        textCollaboration: 'I want to advertise my products/services to your customers',
        textDescription: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
    },
    {
        branch: 'staff & human resources',
        businesName: 'Business Name, LTD',
        name: 'Shanon Mitchell',
        textCollaboration: 'I want to advertise my products/services to your customers',
        textDescription: 'We are an insurance broker specialising in insurance for exotic pets. We have grown to over £900,000 in annual revenue in less than 5 years. We are looking for other financial services companies who are interested.',
        avatar: ayo
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
const ListWrapper = styled.div`
    width: 100%;
    max-width: 954px;
    margin: 0 auto;
`

class SearchBusiness extends React.Component {

    state = {
        category: null,
        businessFocus: null,
        employe: null,
        type: null,
        businessType: null,
        city: null,
        country: null,
        turnover: null,
        description: '',
        results: []
    }

    onChangeHandler = (value) => (name) => {
        this.setState({
            [name]: value
        })
    }

    onChangeTextHandler = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }

    onClickHandler = (e) => {
        const {
            businessFocus,
            name,
        } = this.state;
        // this.setState({ results: mock })
        e.preventDefault();
        this.props.searchCompanies({
            name: name && name,
            businessFocus: businessFocus && businessFocus.id,
            // tagsID: tags && tags,
        })
    }

    onAddToFavourite = () => {

    }

    render() {
        const {
            businessType,
            employe,
            city,
            country,
            turnover,
            description,
            businessFocus
        } = this.state;

        const {
            datasets: {
                number_of_employees_dataset,
                annual_turnover_dataset,
                business_focus_dataset,
                business_types_dataset,
            },
            companies
        } = this.props;

        return (
            <Container>
                <HeadBar>
                    <Heading align='left'>Search businesses</Heading>
                    <InputSelectRoute width='154px' toggleModalSelect={this.props.toggleModalSelect} />
                </HeadBar>
                <Content>
                    <div className="mt-30">
                        <ListWrapper>
                            <List title='Search parameters'>
                                <div className="flexbox wrap justify-between">
                                    <InputSelect
                                        value={businessType && businessType.label}
                                        placeholder='Select your business type'
                                        name='businessType'
                                        options={business_types_dataset}
                                        width='100%'
                                        onChangeHandler={this.onChangeHandler}
                                        isReceiveObject
                                    />

                                    <InputSelect
                                        value={businessFocus && businessFocus.label}
                                        placeholder='Select what you deal in'
                                        name='businessFocus'
                                        options={business_focus_dataset}
                                        width='48%'
                                        onChangeHandler={this.onChangeHandler}
                                        isReceiveObject
                                    />
                                    <InputSelect
                                        value={employe && employe.label}
                                        placeholder='Select number of employees'
                                        name='employe'
                                        options={number_of_employees_dataset}
                                        width='48%'
                                        onChangeHandler={this.onChangeHandler}
                                        isReceiveObject
                                    />

                                    <InputSelect
                                        value={city && city}
                                        placeholder='Select your business city'
                                        name='city'
                                        options={citys}
                                        width='48%'
                                        onChangeHandler={this.onChangeHandler}
                                    />
                                    <InputSelect
                                        value={country && country}
                                        placeholder='Select your business country'
                                        name='country'
                                        options={countrys}
                                        width='48%'

                                        onChangeHandler={this.onChangeHandler}
                                    />

                                    <InputSelect
                                        value={turnover && turnover.label}
                                        placeholder='Select estimated annual turnover for coming financial year'
                                        name='turnover'
                                        options={annual_turnover_dataset}
                                        width='100%'
                                        onChangeHandler={this.onChangeHandler}
                                        isReceiveObject
                                    />
                                    <InputSelect
                                        value={turnover && turnover.label}
                                        placeholder='Select your area of collaboration interest'
                                        name='turnover'
                                        options={annual_turnover_dataset}
                                        width='100%'
                                        onChangeHandler={this.onChangeHandler}
                                        isReceiveObject
                                    />

                                    <TextField
                                        placeholder='Enter collaboration description'
                                        value={description}
                                        onChangeHandler={this.onChangeTextHandler}
                                        textarea
                                        width='100%'
                                        name='description'
                                        height='125px'
                                        helperText=' Separe phrases with commas. Example: shoe shop, footwear, mens footwear.'
                                    />
                                    <div className="full-w mt-20 mb-35 flexbox justify-center">
                                        <Button
                                            onClick={this.onClickHandler}
                                            variant='primary'
                                            color='#2434A1'
                                            bg='#FFC651'
                                            width='15%'
                                            disabled={!(
                                                businessType
                                                || businessFocus
                                            )}
                                        >
                                            Search
                                        </Button>
                                    </div>
                                </div>
                            </List>

                        </ListWrapper>
                        {companies.length > 0 &&
                            <Cardholder>
                                {companies
                                    // .filter(el => (
                                    //     branch ? (
                                    //         branch.toLowerCase() === el.branch.toLowerCase()
                                    //     ) : (
                                    //             el
                                    //         )
                                    // ))
                                    .map((company, idx) => (
                                        <CardBusiness
                                            key={idx}
                                            businesName={company.name}
                                            entityType={company.entityType}
                                            name={(!!company.contactDetails) && (!!company.contactDetails[0]) && company.contactDetails[0].name}
                                            tags={company.tags.map(el => el.label).join(', ')}
                                            textDescription={company.textDescription && company.textDescription}
                                            // avatar={company.avatar ? company.avatar : null}
                                            avatar={`https://collabbed-api.codeondeck.com/company_logo_images/${company._id}${company.logoImageExt}`}
                                            contactId={company._id}
                                            addToFavourite={this.addToFavourite}
                                        />
                                    ))
                                }
                            </Cardholder>
                        }
                    </div>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        companies: state.companies,
        datasets: state.datasets,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchCompanies: (params) => dispatch(searchCompanies(params))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBusiness);
