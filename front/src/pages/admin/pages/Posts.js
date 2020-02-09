import React, {useEffect} from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';
import {Link, Redirect} from 'react-router-dom'
import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import Card from '../components/Card';
import addBlue from 'assets/icons/add-blue.svg'
import addYellow from 'assets/icons/add-yellow.svg'
import addPurple from 'assets/icons/add-purple.svg'
import addGreen from 'assets/icons/add-green.svg'
import {Portal} from 'react-portal';


const Container = styled.div`
    margin-top: 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
        @media (max-width:993px ){
        margin-top: 50px;
    }
`
const CardHolder = styled.div`
    display: flex;
    text-align: center;
    margin-top: 80px;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    &>div{
     margin: 15px;
    }
`
const Fixed = styled.div`
    position: fixed;
    z-index: 10;
    top: 0px;
    right: 0px;
`
const AllPosts = {
    postCollaboration: Loadable({
        loader: () => import("../components/FormFactory/PostCollaboration"),
        loading() {
            return <div>Loading...</div>
        }
    }),
    postMember: Loadable({
        loader: () => import("../components/FormFactory/PostMember"),
        loading() {
            return <div>Loading...</div>
        }
    }),
    postEvent: Loadable({
        loader: () => import("../components/FormFactory/PostEvent"),
        loading() {
            return <div>Loading...</div>
        }
    }),
    postGiveawey: Loadable({
        loader: () => import("../components/FormFactory/PostGiveaway"),
        loading() {
            return <div>Loading...</div>
        }
    }),
}

const LoadableComponent = Loadable({
    loader: () => import('../components/FormFactory/PostCollaboration'),
    loading() {
        return <div>Loading...</div>
    }
});

class Posts extends React.Component {
    state = {
        postCollaboration: false,
        postMember: false,
        postEvent: false,
        postGiveawey: false,
    }

    componentDidUpdate() {
        if (this.state.postCollaboration || this.state.postMember || this.state.postEvent || this.state.postGiveawey) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }

    handleModalOpen = (post) => () => {
        this.setState({
            postCollaboration: false,
            postMember: false,
            postEvent: false,
            postGiveawey: false,
            [post]: true
        })
    }


    handleModalClose = (post) => () => {
        this.setState({
            [post]: false
        })
    }
    handlePreloadOnHover = (post) => () => {
        AllPosts[post].preload();
    }

    render() {
        const {
            postCollaboration,
            postMember,
            postEvent,
            postGiveawey,
        } = this.state;
        const userId = localStorage.getItem('userId');

        if (userId) {
            return <Redirect exact to='/admin/dashboard'/>
        }

        return (
            <Container>
                <Heading align='center'>Welcome, to Collabbed!</Heading>
                <SubHeading align='center'>To create your first post to the community - select 1 of 4 options
                    below</SubHeading>
                <CardHolder>
                    <Card
                        onMouseOver={this.handlePreloadOnHover('postCollaboration')}
                        onClick={this.handleModalOpen('postCollaboration')}
                        icon={addBlue}
                        title='Post A Collaboration'
                        text='Want to collaborate or partner with another business? Post it here!'
                    >
                    </Card>
                    <Card
                        onMouseOver={this.handlePreloadOnHover('postMember')}
                        onClick={this.handleModalOpen('postMember')}
                        icon={addYellow}
                        title='Post A Member Offer'
                        text='Want to offer your services to other members? Post it here!'
                    />
                    <Card
                        onMouseOver={this.handlePreloadOnHover('postEvent')}
                        onClick={this.handleModalOpen('postEvent')}
                        icon={addPurple}
                        title='Post An Event'
                        text='Arranging a meetup or networking event? Post it here!'
                    />
                    <Card
                        onMouseOver={this.handlePreloadOnHover('postGiveawey')}
                        onClick={this.handleModalOpen('postGiveawey')}
                        icon={addGreen}
                        title='Post A Giveaway'
                        text='Have things your business no longer need? List them here!'
                    />
                </CardHolder>
                {
                    postCollaboration &&
                    <Portal>
                        <AllPosts.postCollaboration
                            type='postCollaboration'
                            isOpen={postCollaboration}
                            handleModalClose={this.handleModalClose("postCollaboration")}
                        />
                    </Portal>
                }
                {
                    postEvent &&
                    <Portal>
                        <AllPosts.postEvent
                            type='postEvent'
                            isOpen={postEvent}
                            handleModalClose={this.handleModalClose('postEvent')}
                        />
                    </Portal>
                }
                {
                    postGiveawey &&
                    <Portal>
                        <AllPosts.postGiveawey
                            type='postGiveawey'
                            isOpen={postGiveawey}
                            handleModalClose={this.handleModalClose('postGiveawey')}
                        />
                    </Portal>
                }
                {
                    postMember &&
                    <Portal>
                        <AllPosts.postMember
                            type='postMember'
                            isOpen={postMember}
                            handleModalClose={this.handleModalClose('postMember')}
                        />
                    </Portal>
                }


            </Container>
        );
    }

}

export default Posts;
