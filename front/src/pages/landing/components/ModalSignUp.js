import React from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {postCompanyData} from '../../../store/company/actions';


const subTitles = [
    'Basic Info',
    'Tell us about your business',
    'Select collaboration opportunities which are of interest to you',
    ''
]
const infos = [
    'Enter your name, email and create a password.',
    'Be as accurate as possible. This information will be used to match you to other businesses.',
    'This will help us match you with businesses who want to work together in the same areas you do!',
    ' Thank you for spending time on registration! We are asking you for a bit more, while checking account and seting it up for you. Once it approved, we’ll notify you by email which you noted in registration.'
]

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 30px;
`
const SubTitle = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
`
const Info = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;
    margin-top: 20px;
    margin-bottom: 27px;
`

class ModalSignUp extends React.Component {
    state = {
        current: 1,

        data: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password_confirm: '',

            companyName: '',
            entityType: null,
            position: null,
            registrationNumber: '',
            businessType: null,
            businessFocus: null,
            industry: null,
            numberOfEmployees: null,
            city: null,
            country: null,
            annualTurnover: null,
            tags: '',

            collaborationInterests: []
        },

        selected: {},
    }

    onChangeHandler = (value) => (name) => {
        const {data} = this.state;
        this.setState({
            data: {
                ...data,
                [name]: value
            }
        })
    }

    onChangeTextHandler = ({target: {value, name}}) => {
        const {data} = this.state;
        this.setState({
            data: {
                ...data,
                [name]: value
            }
        })
    }

    onSelectHandler = ({target: {name, value}}) => {
        this.setState({
            selected: {...this.state.selected, [name]: value}
        })
    }

    nextStepHandler = () => {
        window.scrollTo(0, 0);
        const {current, data} = this.state;
        if (current >= 3) {
            const {openCheck, closeHandler, postCompanyData} = this.props;
            postCompanyData(data)
            this.setState({
                current: 0
            })
            closeHandler();
            // openCheck();
            this.props.openEmailSend();
        }
        const newCurrent = current >= 3 ? 0 : current;
        this.setState({
            current: newCurrent + 1
        })
    }

    backStepHandler = () => {
        window.scrollTo(0, 0);
        const {current} = this.state;
        const newCurrent = current < 0 ? 0 : current;
        this.setState({
            current: newCurrent - 1
        })
    }

    handleSelect = (category) => (type) => {
        const {data: {collaborationInterests}} = this.state;

        let newArray = collaborationInterests.slice();
        let index = newArray.findIndex(el => el.label === category.label);

        if (index === -1) {
            newArray = newArray.concat({...category, types: []})
        }

        index = newArray.findIndex(el => el.label === category.label)

        const selectedIndex = newArray[index].types.findIndex(el => el.label === type.label);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(newArray[index].types, type);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(newArray[index].types.slice(1));
        } else if (selectedIndex === newArray[index].types.length - 1) {
            newSelected = newSelected.concat(newArray[index].types.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                newArray[index].types.slice(0, selectedIndex),
                newArray[index].types.slice(selectedIndex + 1)
            );
        }

        newArray[index].types = newSelected;

        this.setState({
            // selectedArray: newArray.filter(el => el.types.length > 0),
            data: {
                ...this.state.data,
                collaborationInterests: newArray.filter(el => el.types.length > 0)
            }
        })
    }

    generateContent = () => {

        const {
            current,

            data: {
                email,
                firstName,
                lastName,
                password,
                password_confirm,

                companyName,
                entityType,
                registrationNumber,
                businessType,
                businessFocus,
                industry,
                numberOfEmployees,
                city,
                country,
                annualTurnover,

                position,
                tags,

                // collaborationInterests,

                // operatingLocation,
                // address1,
                // address2,
                // state,
                // zipCode,
                // contactDetails
            }

        } = this.state;

        const {
            datasets: {
                annualTurnover: annual_turnover_dataset,
                businessFocus: business_focus_dataset,
                businessTypes: business_types_dataset,
                collaborationCategories: collaboration_categories_dataset,
                entity_types_dataset,
                numberOfEmployees: number_of_employees_dataset,
                // annualTurnover,
                // businessFocus,
                // businessTypes,
                // collaborationCategories,
                // entity_types,
                // numberOfEmployees,
            },
            // openEmailSend,
            openSignIn
        } = this.props


        switch (current) {
            case 1:
                return (<FormStep1
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    password={password}
                    password_confirm={password_confirm}
                    onChangeHandler={this.onChangeHandler}
                    onChangeTextHandler={this.onChangeTextHandler}
                    nextStepHandler={this.nextStepHandler}
                    openSignIn={openSignIn}
                />)
            case 2:
                return (<FormStep2
                    onChangeHandler={this.onChangeHandler}
                    onChangeTextHandler={this.onChangeTextHandler}
                    nextStepHandler={this.nextStepHandler}
                    backStepHandler={this.backStepHandler}
                    business_name={companyName}
                    business_entity_status={entityType}
                    business_entity_dataset={[]}
                    // business_entity_dataset={entity_types_dataset}
                    position={position}
                    company_registration_number={registrationNumber}
                    business_type={businessType}
                    business_types_dataset={business_types_dataset}
                    what_you_deal_in={businessFocus}
                    business_focus_dataset={business_focus_dataset}
                    number_of_employees={numberOfEmployees ? numberOfEmployees.label : null}
                    number_of_employees_dataset={number_of_employees_dataset}
                    business_city={city}
                    business_country={country}
                    industry_business={industry}
                    estimated_annual_turnover={annualTurnover}
                    estimated_annual_turnover_dataset={annual_turnover_dataset}
                    tags={tags}
                />)
            case 3:
                return (<FormStep3
                    collaboration_categories_dataset={collaboration_categories_dataset}
                    onChangeHandler={this.onChangeHandler}
                    nextStepHandler={this.nextStepHandler}
                    backStepHandler={this.backStepHandler}
                    onSelectHandler={this.onSelectHandler}
                    onHandleSelect={this.handleSelect}
                />)

            default:
                return (<FormStep1
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    password={password}
                    password_confirm={password_confirm}
                    onChangeHandler={this.onChangeHandler}
                    nextStepHandler={this.nextStepHandler}
                />)
        }
    }

    render() {
        const {current} = this.state;

        return (
            <Wrapper>
                <ProgressBar
                    steps={3}
                    current={current}
                />

                <SubTitle>{subTitles[current - 1] ? subTitles[current - 1] : null}</SubTitle>

                <Info>{infos[current - 1]}</Info>

                {this.generateContent()}
            </Wrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        datasets: state.datasets,
        company_data: state.company_data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postCompanyData: (data) => dispatch(postCompanyData(data))
    }
}

ModalSignUp.propTypes = {
    datasets: PropTypes.object.isRequired,
    openSignIn: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSignUp);
