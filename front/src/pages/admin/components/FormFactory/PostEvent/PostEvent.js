import React from 'react';
import Modal from "../../Modal";
import addPurple from 'assets/icons/add-purple.svg'
import TextField from "../../TextField";
import Button from "../../Button";
import styled from "styled-components";
import Form from '../Form';

const Map = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: #F7F8FB;
border-radius: 4px;
font-size: 14px;
height: 200px;
margin-bottom: 15px;
color: #aaa;
`

const PostEvent = ({ isOpen, handleModalClose }) => {
    return (
        <Modal
            icon={addPurple}
            title='Post a new collaboration'
            isOpen={isOpen}
            handleModalClose={handleModalClose}>
            <>
                <Form>
                    <TextField
                        placeholder='Enter a post title'
                        // onChangeHandler={this.onChangeTextHandler}
                        width='100%'
                        name='description'
                        height='125px'
                        // helperText='Can be entered 100 words max.'
                        // disabled={description && description.length > 100}
                    />
                    <TextField
                        placeholder='Enter event location or address'
                        // onChangeHandler={this.onChangeTextHandler}
                        width='100%'
                        name='description'
                        height='125px'
                        // helperText='Can be entered 100 words max.'
                        // disabled={description && description.length > 100}
                    />
                    <Map>
                        Map will be shown here...
                    </Map>
                    <TextField
                        placeholder='Enter a post description'
                        // onChangeHandler={this.onChangeTextHandler}
                        textarea
                        width='100%'
                        name='description'
                        height='125px'
                        helperText='Can be entered 100 words max.'
                        // disabled={description && description.length > 100}
                    />
                </Form>

                <Button
                    // onClick={this.postCollaborationHandler}
                    variant='primary'
                    color='#2434A1'
                    bg='#FFC651'
                    width='278px'
                    disabled={true}
                >
                    Create
                </Button>

            </>
        </Modal>
    );
};

export default PostEvent;
