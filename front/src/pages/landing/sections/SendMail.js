import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import signs from '../../../assets/images/signs.jpg';
import letter from '../../../assets/icons/letter.svg';
import bulb from '../../../assets/icons/bulb.svg';
import line from '../../../assets/icons/line.svg';

import Avatar from '../components/Avatar';
import IconButton from '../components/IconButton';
import TextField from '../components/TextField';
import Button from '../components/Button';


const Wrapper = styled.section`
    padding-top: 30px;
    padding-bottom: 60px;
    background-color: #E5E5E5;
    color: #31384E;

    @media (min-width: 768px) {
        padding-top: 90px;
        padding-bottom: 220px;
    }
`

const Title = styled.h3`
    padding-bottom: 8px;
    margin-bottom: 12px;
    text-align: center;

    &:after {
        display: block;
        width: 65px;
        height: 2px;
        background-color: #FFB10E;
        content: '';
        position: relative;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
    }
`
const Subtitle = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    margin-bottom: 40px;

    @media (min-width: 768px) {
        margin-bottom: 135px;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items:center;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`
const Image = styled.img`
    display: block;
    width: 100%;
    max-width: 350px;
    position: absolute;
    top: -7%;
    left: 0;
    z-index: -1;
`
const BulbIcon = styled(IconButton)`
    width: 74px;
    height: 74px;
    position: absolute;
    border-radius: 15px;
    bottom: 0;
    left: 45px;
`
const LetterIcon = styled(IconButton)`
    width: 74px;
    height: 74px;
    position: absolute;
    border-radius: 15px;
    top: 0;
    left: 212px;
`
const Form = styled.form`
    width: 100%;
    max-width: 350px;

    height: 275px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 30px;
`
const ComponentAvatar = styled(Avatar)`
    width: 95%;
    max-width: 335px;
`

const SendMail = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmitMessage = (event) => {
        event.preventDefault();

        const newMessage = {
            name,
            email,
            message
        };

        axios.post("https://collabbed-api.codeondeck.com/enquiry", newMessage)
            .then(res => {
                // console.log(res);
                setMessage("");
                setEmail("");
                setName("");
            })
            // .catch(err => console.log(err))
    };

    return (
        <Wrapper className='text-center'>
            <div className='container flexbox col'>
                <Title className='bigger normal'>Have any questions?</Title>
                <Subtitle> Please, feel free to contact us!</Subtitle>

                <Container>
                    <ComponentAvatar src={signs} size={`100%`} shadow={`0px 0px 7px rgba(0, 0, 0, 0.1)`}>
                        <Image src={line} alt='line'/>
                        <BulbIcon colorBG='#fff'>
                            <img src={bulb} alt='bulbicon'/>
                        </BulbIcon>
                        <LetterIcon colorBG='#fff'>
                            <img src={letter} alt="lettericon"/>
                        </LetterIcon>
                    </ComponentAvatar>

                    <Form onSubmit={handleSubmitMessage}>
                        <TextField
                            placeholder='Label'
                            value={name}
                            onChangeHandler={({target}) => setName(target.value)}
                            isRequired={true}
                        />
                        <TextField
                            placeholder='Your email'
                            value={email}
                            onChangeHandler={({target}) => setEmail(target.value)}
                            isRequired={true}
                        />
                        <TextField
                            placeholder='Your message'
                            textarea
                            value={message}
                            onChangeHandler={({target}) => setMessage(target.value)}
                            isRequired={true}
                        />
                        <Button variant='primary' color='#2434A1' bg='#FFC651'>
                            Send
                        </Button>
                    </Form>
                </Container>
            </div>
        </Wrapper>
    );
}


export default SendMail;
