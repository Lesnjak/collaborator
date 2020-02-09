import React from 'react';
import Modal from "../../Modal";
import addBlue from 'assets/icons/add-blue.svg';
import ModalSelect from "../../PostModal/ModalSelect";

const PostCollaboration = ({ isOpen, handleModalClose }) => {
    return (
            <Modal
            icon={addBlue}
            title='Post a new collaboration'
            isOpen={isOpen}
            handleModalClose={handleModalClose}>
                <ModalSelect/>
            </Modal>
    );
};

export default PostCollaboration;
