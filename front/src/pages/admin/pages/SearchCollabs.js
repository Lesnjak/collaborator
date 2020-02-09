import React from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";

import Heading from '../components/Heading';
import InputSelect from '../components/InputSelect1';
import InputSelectRoute from '../components/InputSelectRoute';
import List from '../components/List';
import Button from '../components/Button';
import TextField from '../components/TextField';
import CardPerson from '../components/CardPerson';
import InputMultiSelect from '../components/InputMultiSelect';
import {searchCollaborations} from '../../../store/collaborations/actions';
import HeadBar from '../components/HeadBar';
import Cardholder from '../components/Cardholder';


const business_types = [
    'compamy', 'ltd', 'family'
]
const branches = [
    'staff & human resources',
    'marketing & promotions',
    'sroduct & services',
    'RESET'
]
const citys = [
    'Madrid', 'Berlin', 'Rome', 'Paris', 'Moskow'
]
const countrys = [
    'Spain', 'Germany', 'Italy', 'France', 'Russia'
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
const FormParameters = styled.form`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
    flex-wrap: wrap;
`
const Results = styled.div`
`

class SearchCollabs extends React.Component {

    state = {
        category: null,
        type: null,
        types: null,
        business_type: null,
        branch: null,
        employe: null,
        city: null,
        country: null,
        turnover: null,
        description: [],
        results: [],
        collaborations: []
    }

    onChangeHandler = (value) => (name) => {
        name === 'category' ? (
            this.setState({
                [name]: value,
                type: null
            })
        ) : (
            this.setState({
                [name]: value
            })
        )
    }

    onChangeTextHandler = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }

    onClickHandler = (e) => {
        e.preventDefault();
        const {
            category,
            type
        } = this.state;

        this.props.searchCollabs({
            category: category && category.id,
            type: !!type && type.id
        })
    }

    render() {
        const {

            datasets: {
                annual_turnover_dataset,
                collaboration_categories_dataset,
                number_of_employees_dataset,
            },
            collaborations: {
                collaborations,
                errorMessage
            },
            favorite_collaborations,
            companyId
        } = this.props;

        console.log("CI", companyId);

        const {
            category,
            type,
            business_type,
            branch,
            employe,
            city,
            country,
            turnover,
            description,
        } = this.state;

        return (
            <Container>
                <HeadBar>
                    <Heading align='left'>Search collaboration opportunities</Heading>
                    <InputSelectRoute width='154px' toggleModalSelect={this.props.toggleModalSelect}/>
                </HeadBar>
                <Content>
                    <ListWrapper>
                        <List title='Search parameters'>
                            <FormParameters>
                                <InputSelect
                                    value={category && `Collaborate on ${category.label}`}
                                    placeholder='Select collaboration category'
                                    name='category'
                                    options={collaboration_categories_dataset}
                                    width='40%'
                                    onChangeHandler={this.onChangeHandler}
                                    isRequired
                                    isReceiveObject
                                />
                                <InputMultiSelect
                                    value={type || []}
                                    placeholder='Select collaboration type'
                                    name='type'
                                    options={category && category.types}
                                    width='40%'
                                    onChangeHandler={this.onChangeHandler}
                                    helperText='Can be selected 3 types max.'
                                />
                                <Button
                                    onClick={this.onClickHandler}
                                    variant='primary'
                                    color='#2434A1'
                                    bg='#FFC651'
                                    width='15%'
                                    disabled={!(category || type)}
                                >
                                    Search
                                </Button>
                            </FormParameters>
                        </List>
                    </ListWrapper>
                    <Results>
                        {(collaborations && collaborations.length > 0) ? (
                            <div className="mt-30">
                                <ListWrapper>
                                    <List title='Search filters'>
                                        <div className="flexbox wrap justify-between">
                                            <InputSelect
                                                value={business_type && business_type}
                                                placeholder='Select your business type'
                                                name='business_type'
                                                options={business_types}
                                                width='100%'
                                                onChangeHandler={this.onChangeHandler}
                                            />
                                            <InputSelect
                                                value={branch && branch}
                                                placeholder='Select what you deal in'
                                                name='branch'
                                                options={branches}
                                                width='48%'
                                                onChangeHandler={this.onChangeHandler}
                                            />
                                            <InputSelect
                                                value={employe && employe}
                                                placeholder='Select number of employees'
                                                name='employe'
                                                options={number_of_employees_dataset.map(el => el.label)}
                                                width='48%'
                                                onChangeHandler={this.onChangeHandler}
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
                                                value={turnover && turnover}
                                                placeholder='Select estimated annual turnover for coming financial year'
                                                name='turnover'
                                                options={annual_turnover_dataset.map(el => el.label)}
                                                width='100%'
                                                onChangeHandler={this.onChangeHandler}
                                            />

                                            <TextField
                                                placeholder='Enter collaboration description'
                                                value={description}
                                                onChangeHandler={this.onChangeTextHandler}
                                                textarea
                                                width='100%'
                                                name='description'
                                                height='125px'
                                                helperText='Can be entered 100 words max.'
                                            />
                                        </div>
                                    </List>
                                </ListWrapper>
                                <Cardholder>
                                    {collaborations &&
                                    // .filter(el => (
                                    //     branch ? (
                                    //         branch.toLowerCase() === el.branch.toLowerCase()
                                    //     ) : (
                                    //             el
                                    //         )
                                    // ))
                                    collaborations.map((item, idx) => {
                                        const isFavorite = favorite_collaborations.find(collab => collab._id === item._id);
                                        return <CardPerson
                                            key={(item && item._id) || idx}
                                            title={item.category && item.category.label}
                                            businesName={item.company.name}
                                            name={item.name || 'Test Name'}
                                            textCollaboration={item.type.label}
                                            textDescription={item.description}
                                            avatar={item.avatar ? item.avatar : null}
                                            contactId={item._id}
                                            collaborationId={item._id}
                                            companyId={companyId}
                                            isFavorite={!!isFavorite}
                                        />
                                    })
                                    }
                                </Cardholder>
                            </div>
                        ) : (
                            <p className='mt-70'>{errorMessage ? errorMessage : 'Results go here ...'}</p>
                        )}
                    </Results>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        collaborations: state.collaborations,
        datasets: state.datasets,
        favorite_collaborations: state.favorite_collaborations,
        companyId: state.company_data.company._id
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
)(SearchCollabs);
