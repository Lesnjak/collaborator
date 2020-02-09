import React from 'react';
import styled from 'styled-components';
import TextField from '../TextField';
import Button from '../Button';
import InputSelect from '../InputSelect1';
import InputMultiSelect from '../InputMultiSelect';
import { connect } from "react-redux";
import { postCollaboration, putCollaboration } from 'store/collaboration/actions';



const Form = styled.form`
    width: 100%;
    max-width: 480px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 34px;
`


class ModalSelect extends React.Component {
    state = {
        category: {
            types: []
        },
        selectedTypes: [],
        description: '',
        type: null,
    }

    onChangeHandler = (value) => (name) => {
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    onChangeTextHandler = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }

    postCollaborationHandler = () => {
        const {
            category,
            category: {
                id,
                label
            },
            type,
            description,
        } = this.state;

        const {
            closeHandler,
            postCollaboration,
            openCheck,
            companyId,
        } = this.props;

        const newCategory = { id, label };
        const newTypes = category.types.filter(el => type.indexOf(el.label) !== -1);

        closeHandler();
        postCollaboration({
            category: newCategory,
            type: newTypes,
            // type: newTypes[0],
            description,
            company: companyId
        });
        openCheck();
    }

    putCollaborationHandler = () => {
        const {
            category,
            category: {
                id,
                label
            },
            type,
            description,
        } = this.state;

        const {
            closeHandler,
            putCollaboration,
            openCheck,
            companyId,
            collaboration: {
                _id: collaborationId
            }
        } = this.props;

        const newCategory = { id, label };
        const newTypes = category.types.filter(el => type.indexOf(el.label) !== -1);

        closeHandler();
        console.log(
            {
                newCategory,
                newTypes,
                description,
                companyId,
                collaborationId
            }
        )
        putCollaboration({
            category: newCategory,
            type: newTypes[0],
            description,
            company: companyId,
            collaborationId
        });
        openCheck();
    }


    render() {
        const {
            category,
            type,
            description
        } = this.state;

        const {
            categories,
            collaboration,
            editMode
        } = this.props;

        console.log({ collaboration })

        console.log(this.state)
        console.log({ categories, category })

        return (
            <>
                <Form>

                    <InputSelect
                        value={category && category.label}
                        placeholder='Select collaboration category'
                        name='category'
                        onChangeHandler={this.onChangeHandler}
                        isReceiveObject
                    />
                    <InputSelect
                        value={category && category.label}
                        placeholder='Select collaboration type'
                        name='category'
                        onChangeHandler={this.onChangeHandler}
                        isReceiveObject
                    />
                    <TextField
                        placeholder='Enter collaboration description'
                        value={description && description}
                        onChangeHandler={this.onChangeTextHandler}
                        textarea
                        width='100%'
                        name='description'
                        height='125px'
                        helperText='Can be entered 100 words max.'
                        disabled={description && description.length > 100}
                    />
                </Form>
                {!editMode ? (
                    <Button
                        onClick={this.postCollaborationHandler}
                        variant='primary'
                        color='#2434A1'
                        bg='#FFC651'
                        width='278px'
                        disabled={!(category && type && description)}
                    >
                        Create
                </Button>
                ) : (
                        <Button
                            onClick={this.putCollaborationHandler}
                            variant='primary'
                            color='#2434A1'
                            bg='#FFC651'
                            width='278px'
                            disabled={!(category && type && description)}
                        >
                            Edit
                        </Button>
                    )
                }
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.datasets.collaboration_categories_dataset,
        loginState: state.login_data,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postCollaboration: (data) => dispatch(postCollaboration(data)),
        putCollaboration: (data) => dispatch(putCollaboration(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSelect);
