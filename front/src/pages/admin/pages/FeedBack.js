import React from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';
import { Link, Redirect } from 'react-router-dom'
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Card from '../components/Card';
import addBlue from 'assets/icons/add-blue.svg'
import addYellow from 'assets/icons/add-yellow.svg'
import addPurple from 'assets/icons/add-purple.svg'
import addGreen from 'assets/icons/add-green.svg'
import TextField from "../components/TextField";
import Button from "../components/Button";
import Modal from "../components/Modal";


const Form = styled.form`
    width: 100%;
    max-width: 646px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 30px;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    margin-bottom: 50px;
    margin-top: 80px;
`
const Container = styled.div`
    margin-top: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    @media (max-width:993px ){
        margin-top: 50px;
    }
`



class FeedBack extends React.Component {

    render() {


        return (
            <Container>
                <Heading align='center'>Give Us Your Feedback!</Heading>
                <SubHeading align='center'>Do you think we could make Collabbed better? Please, send us your feedback</SubHeading>

                    <Form>
                        <TextField
                            placeholder='Tell us how we could make Collabbed.com better here...'
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
                        Send
                    </Button>





            </Container>
        );
    }

}

export default FeedBack;
