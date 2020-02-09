import React from 'react';
import Modal from "../../Modal";
import addGreen from 'assets/icons/add-green.svg'
import styled from "styled-components";
import TextField from "../../TextField";
import Button from "../../Button";
import Form from '../Form';

const PostGiveaway = ({ isOpen, handleModalClose }) => {
    return (
        <Modal
            icon={addGreen}
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
export default PostGiveaway;
