import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import Heading from '../components/Heading';
import InputSelect from '../components/InputSelect1';
import InputSelectRoute from '../components/InputSelectRoute';
import List from '../components/List';
import Button from '../components/Button';
import TextField from '../components/TextField';
import pen from '../../../assets/icons/pen.svg'
import Avatar from '../components/Avatar';
import IconButton from '../components/IconButton';
import Modal from '../components/Modal'
import { putCompanyData, postCompanyLogo } from '../../../store/company/actions';
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
const ListItem = styled.div`
    display: flex;
    align-items: flex-start;
`
const Label = styled.label`
    font-size: 14px;
    line-height: 26px;
    margin-bottom: 30px;
    text-align: left;
`
const Absolute = styled.div`
    position: absolute;
    top: -50px;
    right: 17px;
`
const InputFile = styled.input`
    opacity: 0;
    position: absolute;
    z-index: -1;
`
const LabelInput = styled.label`
    display: block;
    width: 100%;
    line-height: 34px;
    cursor: pointer;
`
const BlueCheckbox = withStyles({
    root: {
        color: '#2434A1',
        padding: 0,
        marginRight: '10px'
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);



class MyProfile extends React.Component {

    constructor(props) {
        super(props);
        const user = JSON.parse(localStorage.user);


        this.state = {
            data: {
                ...user,
                ...user.companies[0]
            },
            selectedArray: [],
            isEdited: false,
            isModalOpen: false,
            logo: null
        }
    }


    onChangeHandler = (value) => (name) => {
        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        })
    }

    onChangeTextHandler = ({ target: { name, value } }) => {
        this.setState({
            data: {
                ...this.state.data,
                [name]: value.slice(0, 100)
            }
        })
    }

    onToggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    onEditHandler = () => {
        this.setState({
            isEdited: true
        })
    }

    onClickHandler = (e) => {
        e.preventDefault();
        this.props.put_company_data(this.state.data);
        this.onToggleModal();

    }

    onChangeFileHandler = (companyID) => e => {
        const file = e.target.files[0];
        let fd = new FormData();
        fd.append('file', file);
        this.props.post_company_logo(fd, companyID);
    };

    handleSelect = (category) => (type) => {
        const { selectedArray } = this.state;

        let newArray = selectedArray.slice();
        let index = newArray.findIndex(el => el.label === category.label);

        if (index === -1) {
            newArray = newArray.concat({ ...category, types: [] })
        }

        index = newArray.findIndex(el => el.label === category.label)

        const selectedIndex = newArray[index].types.findIndex(el => el.label === type.label);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(newArray[index].types, type);
        }
        else if (selectedIndex === 0) {
            newSelected = newSelected.concat(newArray[index].types.slice(1));
        }
        else if (selectedIndex === newArray[index].types.length - 1) {
            newSelected = newSelected.concat(newArray[index].types.slice(0, -1));
        }
        else if (selectedIndex > 0) {
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
                collaborationInterests: newArray
            }
        })
    }

    render() {
        const {
            datasets: {
                annual_turnover_dataset,
                business_focus_dataset,
                business_types_dataset,
                collaboration_categories_dataset,
                number_of_employees_dataset,
            }
        } = this.props;

        const {
            data: {
                _id, // company Id !!!
                firstName,
                lastName,
                email,
                logoImageExt,
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
            },
            isEdited,
            isModalOpen,
            logo
        } = this.state;


        return (
            <>
                <Container>
                    <HeadBar>
                        <Heading align='left'>My Profile</Heading>
                        <div className='flexbox align-center'>
                            <Link to='/admin/my-posted-collaboration' className='mr-30'>
                                <Button variant='secondary' >
                                    My Posted Collabs
                                </Button>
                            </Link>
                            <InputSelectRoute width='154px' toggleModalSelect={this.props.toggleModalSelect} />
                        </div >
                    </HeadBar>
                    <Content>
                        <div className="flexbox justify-center">
                            <div className="mb-35 mr-30">
                                <Avatar
                                    size='124px'
                                    alt='JD'
                                    fontSize='36px'
                                />
                                <Button
                                    variant='secondary'
                                    className='mt-20 full-w'
                                    disabled={!isEdited}
                                >
                                    Upload Photo
                                </Button>
                            </div>

                            <div className="mb-35">
                                <Avatar
                                    size='124px'
                                    alt='Company Logo'
                                    fontSize='14px'
                                    color='#999FAE'
                                    src={`https://collabbed-api.codeondeck.com/company_logo_images/${_id}${logoImageExt}`}
                                // src={logo && logo.file}

                                />
                                <InputFile
                                    type='file'
                                    id='customFile'
                                    onChange={this.onChangeFileHandler(_id)}
                                />
                                <Button
                                    variant='secondary'
                                    className='mt-20 full-w'
                                    disabled={!isEdited}
                                >
                                    <LabelInput htmlFor={isEdited && !logo ? `customFile` : ''}>
                                        Upload Logo
                                    </LabelInput>
                                </Button>
                            </div>
                        </div>

                        <Paper>
                            {!isEdited && <Absolute onClick={this.onEditHandler}>
                                <IconButton icon={pen} />
                            </Absolute>}

                            <div className="flexbox wrap justify-between">
                                <TextField
                                    readOnly={!isEdited}
                                    value={firstName}
                                    onChangeHandler={this.onChangeTextHandler}
                                    width='47%'
                                    type='text'
                                    name='firstName'
                                    helperTextTop='Your first name'
                                />
                                <TextField
                                    readOnly={!isEdited}
                                    value={lastName}
                                    onChangeHandler={this.onChangeTextHandler}
                                    width='47%'
                                    type='text'
                                    name='lastName'
                                    helperTextTop='Your last name'
                                />

                                <TextField
                                    readOnly={!isEdited}
                                    value={email}
                                    onChangeHandler={this.onChangeTextHandler}
                                    width='100%'
                                    type='email'
                                    name='email'
                                    helperTextTop='Your email'
                                />

                                <TextField
                                    readOnly={!isEdited}
                                    value={''}
                                    onChangeHandler={this.onChangeTextHandler}
                                    width='100%'
                                    type='password'
                                    name='password'
                                    helperTextTop='Your password'
                                />

                                <TextField
                                    readOnly={!isEdited}
                                    value={name}
                                    onChangeHandler={this.onChangeTextHandler}
                                    width='47%'
                                    type='text'
                                    name='name'
                                    helperTextTop='Your business name'
                                />
                                <InputSelect
                                    disabled={!isEdited}
                                    onChangeHandler={this.onChangeHandler}
                                    width='47%'
                                    name='entityType'
                                    helperText='Your busines entity status'
                                    helperTextTop
                                    value={entityType}
                                    options={[
                                        'no_dataset1',
                                        'no_dataset2',
                                        'no_dataset3'
                                    ]}
                                />

                                <InputSelect
                                    disabled={!isEdited}
                                    onChangeHandler={this.onChangeHandler}
                                    width='47%'
                                    name='contactDetails'
                                    helperText='Your position'
                                    helperTextTop
                                    value={contactDetails[0].role}
                                    options={[
                                        'no_dataset1',
                                        'no_dataset2',
                                        'no_dataset3'
                                    ]}
                                />
                                <TextField
                                    readOnly={!isEdited}
                                    value={registrationNumber}
                                    onChangeHandler={this.onChangeHandler}
                                    width='47%'
                                    type='text'
                                    name='registrationNumber'
                                    helperTextTop='Your company registration number'
                                />

                                <InputSelect
                                    disabled={!isEdited}
                                    onChangeHandler={this.onChangeHandler}
                                    width='100%'
                                    name='businessType'
                                    helperText='Your business type'
                                    helperTextTop
                                    value={businessType.label && `${businessType.label} only`}
                                    options={business_types_dataset}
                                    isReceiveObject
                                />

                                <InputSelect
                                    disabled={!isEdited}
                                    onChangeHandler={this.onChangeHandler}
                                    width='47%'
                                    name='businessFocus'
                                    helperText='What you deal in'
                                    helperTextTop
                                    value={businessFocus.label}
                                    options={business_focus_dataset}
                                    isReceiveObject
                                />
                                <InputSelect
                                    disabled={!isEdited}
                                    onChangeHandler={this.onChangeHandler}
                                    width='47%'
                                    name='numberOfEmployees'
                                    helperText='Number of employees'
                                    helperTextTop
                                    value={numberOfEmployees.label}
                                    options={number_of_employees_dataset}
                                    isReceiveObject
                                />

                                <InputSelect
                                    disabled={!isEdited}
                                    onChangeHandler={this.onChangeHandler}
                                    width='47%'
                                    name='city'
                                    helperText='Your business city'
                                    helperTextTop
                                    value={city}
                                    options={[
                                        'no_dataset11',
                                        'no_dataset12',
                                        'no_dataset13'
                                    ]}
                                />
                                <InputSelect
                                    disabled={!isEdited}
                                    onChangeHandler={this.onChangeHandler}
                                    width='47%'
                                    name='country'
                                    helperText='Your business country'
                                    helperTextTop
                                    value={country.label}
                                    options={[
                                        { id: 0, label: 'no_dataset1' },
                                        { id: 1, label: 'no_dataset2' },
                                        { id: 3, label: 'no_dataset3' }
                                    ]}
                                    isReceiveObject
                                />

                                <InputSelect
                                    disabled={!isEdited}
                                    onChangeHandler={this.onChangeHandler}
                                    width='100%'
                                    name='industry'
                                    helperText='Your industry'
                                    helperTextTop
                                    value={industry.label}
                                    options={[
                                        { id: 0, label: 'no_dataset1' },
                                        { id: 1, label: 'no_dataset2' },
                                        { id: 2, label: 'no_dataset3' }
                                    ]}
                                    isReceiveObject
                                />

                                <InputSelect
                                    disabled={!isEdited}
                                    onChangeHandler={this.onChangeHandler}
                                    width='100%'
                                    name='annualTurnover'
                                    helperText='Your annual turnover for coming financial year'
                                    helperTextTop
                                    value={annualTurnover ? annualTurnover.label : ''}
                                    options={annual_turnover_dataset}
                                    isReceiveObject
                                />

                                <TextField
                                    readOnly={!isEdited}
                                    value={tags.map(el => el.label).join(', ')}
                                    onChangeHandler={this.onChangeHandler}
                                    width='100%'
                                    type='text'
                                    name='tags'
                                    helperTextTop='Business tags'
                                />

                                <TextField
                                    readOnly={!isEdited}
                                    value={description}
                                    onChangeHandler={this.onChangeHandler}
                                    width='100%'
                                    type='text'
                                    name='description'
                                    helperText='Can be entered 100 words max.'
                                    helperTextTop='Company bio'
                                    textarea
                                    height='125px'
                                />
                            </div>
                        </Paper>

                        <div className="mt-30 mb-50">
                            <Paper>
                                {collaboration_categories_dataset
                                    .filter(el => el.label !== 'other')
                                    .map((category, idx) => {
                                        return (
                                            <List
                                                title={`${idx + 1}. Collaborate on ${category.label}`}
                                                key={idx}
                                            >
                                                {category.types.map((type, idx) => {
                                                    return (
                                                        <ListItem key={idx}>
                                                            <BlueCheckbox
                                                                onChange={() => this.handleSelect({ ...category })({ ...type })}
                                                                value={type.label}
                                                                name={category.label}
                                                            />
                                                            <Label >{type.label}</Label>
                                                        </ListItem>
                                                    )
                                                })}
                                            </List>
                                        )
                                    })}
                            </Paper>
                        </div>

                        {isEdited && <div className="flexbox col align-center">
                            <Button
                                onClick={this.onClickHandler}
                                variant='primary'
                                color='#2434A1'
                                bg='#FFC651'
                                width='124px'
                            >
                                Save
                        </Button>
                            <Button
                                variant='tertiary'
                                width='124px'
                                className='mt-14 mb-50'
                            >
                                Cancel
                        </Button>
                        </div>}
                    </Content>
                </Container>

                {isModalOpen && <Modal
                    title='Your changes have been saved.'
                    closeHandler={this.onToggleModal}
                    isOpen={isModalOpen}
                >
                    <Button
                        onClick={this.onToggleModal}
                        variant='primary'
                        color='#2434A1'
                        bg='#FFC651'
                        width='278px'
                    >
                        Ok
                </Button>
                </Modal>}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        company_data: state.company_data,
        login_data: state.login_data,
        datasets: state.datasets,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        put_company_data: (data) => dispatch(putCompanyData(data)),
        post_company_logo: (fd, companyID) => dispatch(postCompanyLogo(fd, companyID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
