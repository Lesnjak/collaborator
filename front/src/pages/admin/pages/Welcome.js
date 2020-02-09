import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom'


import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Card from '../components/Card';
import add from '../../../assets/icons/baseline-note_add.svg'
import search_opp from '../../../assets/icons/search_opp.svg'
import search_businesses from '../../../assets/icons/search_businesses.svg'
import Notification from '../components/Notification';

const Container = styled.div`
    margin-top: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
        @media (max-width: 993px) {
     margin-top: 40px;
}
`
const CardHolder = styled.div`
    display: flex;
    text-align: center;
    margin-top: 80px;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    & > a{
      margin: 15px;
    }
`
const Fixed = styled.div`
    position: fixed;
    z-index: 10;
    top: 0px;
    right: 0px;
`

class Welcome extends React.Component {
    state = {
        isNotificationOpen: true
    }

    onToggleNotification = () => {
        this.setState({
            isNotificationOpen: !this.state.isNotificationOpen
        })
    }

    render() {
        const userId = localStorage.getItem('userId');

        if (userId) {
            // return <Redirect exact to='/admin/dashboard' />
        }

        return (
            <Container>
                {this.state.isNotificationOpen && (
                    <Fixed>
                        <Notification closeHandler={this.onToggleNotification}>
                            {`Complete your profile before start! Businesses with completed profiles are twice as likely to collaborate.`}
                        </Notification>
                    </Fixed>
                )}
                <Heading align='center'>Welcome, to Collabbed!</Heading>
                <SubHeading align='center'>To get started - select 1 of 3 options below</SubHeading>

                <CardHolder>
                    <Link to='/admin/posts'>
                    <Card
                        icon={add}
                        title='Post collaborations'
                        text='Create a collaboration post and let other businesse find you!'
                    />
                    </Link>

                    <Link to='/admin/search-collaboration'>
                        <Card
                            icon={search_opp}
                            title='Search collaboration opportunities'
                            text='Search for collaboration opportunities posted by other members!'
                        />
                    </Link>

                    <Link to='/admin/search-business'>
                        <Card
                            icon={search_businesses}
                            title='Search businesses'
                            text='Search for businesses similar to you, so you can work together'
                        />
                    </Link>
                </CardHolder>
            </Container>
        );
    }

}

export default Welcome;
