import React from 'react';
import Modal from "../Modal";
import { connect } from "react-redux";
import addBlue from "../../../../assets/icons/add-blue.svg";
import ModalSelect from "./ModalSelect";
import thumb_up from "../../../../assets/icons/thumb_up.svg";
import ModalCheck from "../ModalCheck";

class  PostModal extends React.Component {
    state = {
        isModalSelectOpen: false,
        isModalCheckOpen: false,
        isOpen:false
    }

    toggleModalSelect = () => {
        this.setState({
            isModalSelectOpen: !this.state.isModalSelectOpen
        })
    }

    toggleModalCheck = () => {
        this.setState({
            isModalCheckOpen: !this.state.isModalCheckOpen
        })
    }



    render() {

        const {
            collaborationState: {
                message: collaborationMessage,
                success
            }
        } = this.props;
        const {
            isModalSelectOpen,
            isModalCheckOpen
        } = this.state;
        const userData = JSON.parse(localStorage.user);
        const { companies } = userData;

        return (
            <>
            {isModalSelectOpen && (
                <Modal
                    isOpen={isModalSelectOpen}
                    title='Post a new collaboration'
                    icon={addBlue}
                    closeHandler={this.toggleModalSelect}
                    onChangeFileHandler={this.onChangeFileHandler}
                >
                    <ModalSelect
                        openCheck={this.toggleModalCheck}
                        closeHandler={this.toggleModalSelect}
                        companyId={companies[0]._id}

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
                <ModalCheck closeHandler={this.toggleModalCheck} message={collaborationMessage} />
            </Modal>
        )}
        </>
        );
    }
};
const mapStateToProps = state => {
    return {
        collaborationState: state.collaboration,
        loginState: state.login_data
    }
}

export default connect(mapStateToProps)(PostModal);
