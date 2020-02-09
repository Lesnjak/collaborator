import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import Heading from '../components/Heading';
import InputSelect from '../components/InputSelect1';
import InputSelectRoute from '../components/InputSelectRoute';
import Button from '../components/Button';
import TextField from '../components/TextField';
import Avatar from '../components/Avatar';
import Notification from '../components/Notification';
import { postCollaboration } from '../../../store/collaboration/actions';
import HeadBar from '../components/HeadBar';


const Container = styled.div`
    margin-top: 40px;    
`
const Content = styled.div`    
    margin-top: 64px;
    width: 100%;    
    text-align: center;
`
const Paper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    padding: 50px 30px;
    width: 100%;
    max-width: 646px;
    margin: 0 auto;
    position: relative;
`
const Fixed = styled.div`
    position: fixed;
    z-index: 10;
    top: 0px;
    right: 0px;
`
const BottomText = styled.p`
    color: #999FAE;
    text-align: left;
    margin-bottom: 14px;
`
const BlueCheckbox = withStyles({
    root: {
        color: '#2434A1',
        padding: 0,
        marginRight: '10px'
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);



class CompanyPage extends React.Component {

    state = {
        isNotificationOpen: true,
        logo: null
    }

    onToggleNotification = () => {
        this.setState({
            isNotificationOpen: !this.state.isNotificationOpen
        })
    }

    onClickHandler = (e) => {
        e.preventDefault();
        this.props.postCollaboration({

        });
        this.onToggleNotification();
    }

    render() {
        const { company } = this.props;

        const {
            isNotificationOpen,
            logo
        } = this.state;

        if (!company) {
            return (
                <h1 className='huge bold color_red text-center mt-130'>Not Found</h1>
            )
        }

        const {
            businessFocus,
            businessType,
            city,
            country,
            entityType,
            name,
            numberOfEmployees,
            tags,
            firstName,
            lastName,
            contactDetails,
            industry,
            annualTurnover
        } = company;

        return (
            <>
                {isNotificationOpen && (
                    <Fixed>
                        <Notification closeHandler={this.onToggleNotification}>
                            {`You added “Business Name, LTD” company page to your favourite section. Aleksandra Power will get notification. You can procees with this company page in your favourites later.`}
                        </Notification>
                    </Fixed>
                )}

                <Container>
                    <HeadBar>
                        <Heading align='left'>Business Name, LTD</Heading>
                        <div className='flexbox align-center'>
                            <Link to='/admin/my-posted-collaboration' className='mr-30'>
                                <Button variant='secondary' >
                                    Posted Collabs
                                </Button>
                            </Link>
                            <Link to='/admin/inbox' className='mr-30'>
                                <Button variant='secondary' >
                                    Send Message
                                </Button>
                            </Link>
                            <InputSelectRoute width='154px' toggleModalSelect={this.props.toggleModalSelect} />
                        </div >
                    </HeadBar>
                    <Content>
                        <div className="flexbox justify-center">
                            <div className="mb-35 mr-30">
                                <Avatar size='124px' alt='JD' fontSize='36px' />
                            </div>

                            <div className="mb-35">
                                <Avatar
                                    size='124px'
                                    alt='Company Logo'
                                    fontSize='14px'
                                    color='#999FAE'
                                    src={logo && logo.file}
                                />
                            </div>
                        </div>

                        <Paper>
                            <div className="flexbox wrap justify-between">
                                <TextField
                                    readOnly
                                    value={firstName}
                                    width='47%'
                                    type='text'
                                    name='firstName'
                                    helperTextTop='First name'
                                />
                                <TextField
                                    readOnly
                                    value={lastName}
                                    width='47%'
                                    type='text'
                                    name='lastName'
                                    helperTextTop='Last name'
                                />

                                <TextField
                                    readOnly
                                    value={name}
                                    width='47%'
                                    type='text'
                                    name='companyName'
                                    helperTextTop='Business name'
                                />
                                <InputSelect
                                    disabled
                                    width='47%'
                                    name='entityType'
                                    helperText='Busines entity status'
                                    helperTextTop
                                    value={entityType}
                                />

                                <InputSelect
                                    disabled
                                    width='100%'
                                    name='contactDetails'
                                    helperText='Position'
                                    helperTextTop
                                    value={(contactDetails && contactDetails[0].role) || 'no data'}
                                />

                                <InputSelect
                                    disabled
                                    width='100%'
                                    name='businessType'
                                    helperText='Business type'
                                    helperTextTop
                                    value={`${businessType.label} only`}
                                    isReceiveObject
                                />

                                <InputSelect
                                    width='47%'
                                    name='businessFocus'
                                    helperText='Deal in'
                                    helperTextTop
                                    value={businessFocus[0].label}
                                    options={businessFocus}
                                    isReceiveObject
                                    noSelect
                                />
                                <InputSelect
                                    disabled
                                    width='47%'
                                    name='numberOfEmployees'
                                    helperText='Number of employees'
                                    helperTextTop
                                    value={numberOfEmployees.label}
                                    isReceiveObject
                                />

                                <InputSelect
                                    disabled
                                    width='47%'
                                    name='city'
                                    helperText='Business city'
                                    helperTextTop
                                    value={city}

                                />
                                <InputSelect
                                    disabled
                                    width='47%'
                                    name='country'
                                    helperText='Business country'
                                    helperTextTop
                                    value={country && country.label}
                                    isReceiveObject
                                />

                                <InputSelect
                                    disabled
                                    width='100%'
                                    name='industry'
                                    helperText='Industry'
                                    helperTextTop
                                    value={(industry && industry.label) || 'no data'}
                                    isReceiveObject
                                />

                                <InputSelect
                                    disabled
                                    width='100%'
                                    name='annualTurnover'
                                    helperText='Annual turnover for coming financial year'
                                    helperTextTop
                                    value={(annualTurnover && annualTurnover.label) || 'no  data'}
                                    isReceiveObject
                                />

                                <TextField
                                    readOnly
                                    value={tags.map(el => el.label).join(', ')}
                                    width='100%'
                                    type='text'
                                    name='tags'
                                    helperTextTop='Business tags'
                                />
                            </div>
                            <BottomText>{`Collaborates on ${'marketing & promotions'}`}</BottomText>

                            <div className="flexbox align-center">
                                <BlueCheckbox />
                                <p>Lorem ipsum dolor sit amet, consec.</p>
                            </div>
                        </Paper>

                        <div className="flexbox col align-center mb-50 mt-50">
                            <Button
                                onClick={this.onClickHandler}
                                variant='primary'
                                color='#2434A1'
                                bg='#FFC651'
                                width='154px'
                            >
                                Add to Favorite
                            </Button>
                        </div>
                    </Content>
                </Container>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const companyId = ownProps.match.params.companyId;

    return {
        company: state.companies.find(company => company._id === companyId),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // save_data: (data) => dispatch(fetchUserData(data)),
        // put_company_data: (data) => dispatch(putCompanyData(data)),
        postCollaboration: (params) => dispatch(postCollaboration(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage);