import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import CardPosted from '../components/CardPosted';
import InputSelect from '../components/InputSelect1';
import InputSelectRoute from '../components/InputSelectRoute';
import HeadBar from '../components/HeadBar';
import Cardholder from '../components/Cardholder';
import {connect} from 'react-redux';
import {archiveCompany} from '../../../store/company/actions';
import Modal from '../components/Modal';
import add from '../../../assets/icons/baseline-note_add.svg';
import ModalSelect from '../components/FormFactory/ModalSelect';
import ModalCheck from '../components/ModalCheck';
import thumb_up from '../../../assets/icons/thumb_up.svg';


const Container = styled.div`
    margin-top: 40px;    
`

class MyPostedCollabs extends React.Component {

    state = {
        colaborations: 'All collaborations',
        isModalSelectOpen: false,
        isModalCheckOpen: false,
        selectedCollaborationId: null,
        user: JSON.parse(localStorage.user),
        collaboration: {}
    }

    onChangeHandler = (value) => (name) => {
        this.setState({
            [name]: value
        })
    }

    editHandler = (id) => {
        // console.log(id)
        const {
            user: {companies}
        } = this.state;
        const collaboration = this.props.users_collaborations.find(collaboration => collaboration._id === id)
        // const collaboration = companies[0].collaborations.find(collaboration => collaboration._id === id)
        this.setState({
            collaboration,
            isModalSelectOpen: true
        })
    }

    toggleModalSelect = () => {
        this.setState({isModalSelectOpen: !this.state.isModalSelectOpen})
    }

    toggleModalCheck = () => {
        this.setState({
            isModalCheckOpen: !this.state.isModalCheckOpen
        })
    }

    render() {
        const {
            loginData,
            datasets: {
                collaboration_categories_dataset
            },
            removeHandler,
            collaborationState: {
                message: collaborationMessage,
                success
            },
            users_collaborations
        } = this.props;

        const {
            isModalSelectOpen,
            isModalCheckOpen,
            colaborations,
            user: {
                firstName,
                lastName,
                companies
            },
            collaboration,
        } = this.state;

        console.log(this.state)

        console.log("Collabo = ", users_collaborations);

        return (
            <Container>
                <HeadBar>
                    <Heading align='left'>My Posted collaborations</Heading>
                    <span className='flexbox align-center'>
                        <InputSelect
                            placeholder
                            name='colaborations'
                            value={colaborations && colaborations}
                            options={collaboration_categories_dataset.map(el => el.label).filter(el => el !== 'other')}
                            onChangeHandler={this.onChangeHandler}
                            width='278px'
                            margin='0'
                        />

                        <div className="ml-30">
                            <InputSelectRoute width='154px' toggleModalSelect={this.props.toggleModalSelect}/>
                        </div>

                    </span>
                </HeadBar>
                <Cardholder>
                    {users_collaborations.length ? users_collaborations.map(collaboration => {
                        return (
                            <CardPosted
                                key={collaboration._id}
                                title={collaboration.category.label}
                                businesName={`${companies[0].name}, ${companies[0].entityType}`}
                                name={`${firstName} ${lastName}`}
                                type={collaboration.type.label}
                                description={collaboration.description}
                                avatar={`https://collabbed-api.codeondeck.com/company_logo_images/${companies[0]._id}${companies[0].logoImageExt}`}
                                removeHandler={removeHandler}
                                editHandler={this.editHandler}
                                companyId={companies[0]._id}
                                collaborationId={collaboration._id}
                            />
                        )
                    }) : null}
                    {/*{companies &&*/}
                    {/*companies.length > 0 &&*/}
                    {/*companies[0].collaborations.map(collaboration => {*/}
                    {/*    return (*/}
                    {/*        <CardPosted*/}
                    {/*            key={collaboration._id}*/}
                    {/*            title={collaboration.category.label}*/}
                    {/*            businesName={`${companies[0].name}, ${companies[0].entityType}`}*/}
                    {/*            name={`${firstName} ${lastName}`}*/}
                    {/*            type={collaboration.type.label}*/}
                    {/*            description={collaboration.description}*/}
                    {/*            avatar={`http://collabbed-api.codeondeck.com/company_profile_images/${companies[0]._id}${companies[0].logoImageExt}`}*/}
                    {/*            removeHandler={removeHandler}*/}
                    {/*            editHandler={this.editHandler}*/}
                    {/*            companyId={companies[0]._id}*/}
                    {/*            collaborationId={collaboration._id}*/}
                    {/*        />*/}
                    {/*    )*/}
                    {/*})}*/}
                </Cardholder>

                {/*{console.log("C = ", collaboration)}*/}

                {isModalSelectOpen && (
                    <Modal
                        isOpen={isModalSelectOpen}
                        title='Edit collaboration'
                        icon={add}
                        closeHandler={this.toggleModalSelect}
                    >
                        <ModalSelect
                            openCheck={this.toggleModalCheck}
                            closeHandler={this.toggleModalSelect}
                            companyId={companies[0]._id}
                            collaboration={collaboration}
                            editMode
                        />
                    </Modal>
                )}

                {isModalCheckOpen && collaborationMessage && (
                    <Modal
                        isOpen={isModalCheckOpen}
                        title={success ? 'Congratulations!' : null}
                        icon={success ? thumb_up : null}
                        closeHandler={this.toggleModalCheck}
                    >
                        <ModalCheck closeHandler={this.toggleModalCheck} message={collaborationMessage}/>
                    </Modal>
                )}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        loginData: state.login_data,
        datasets: state.datasets,
        collaborationState: state.collaboration,
        users_collaborations: state.users_collaborations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeHandler: (companyId) => dispatch(archiveCompany(companyId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostedCollabs);
