import React from 'react';
import styled from 'styled-components'
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Header from './layout/Header';
import SideBar from './layout/SideBar';
import Welcome from './pages/Welcome';
import Modal from './components/Modal';
import addBlue from '../../assets/icons/add-blue.svg';
import thumb_up from '../../assets/icons/thumb_up.svg';
import ModalSelect from './components/FormFactory/ModalSelect';
import ModalCheck from './components/ModalCheck';
import SearchCollabs from './pages/SearchCollabs';
import SearchBusiness from './pages/SearchBusiness';
import MyProfile from './pages/MyProfile';
import MyPostedCollabs from './pages/MyPostedCollabs';
import CompanyPage from './pages/CompanyPage';
import MyFavourites from './pages/MyFavourites';
import Inboxes from './pages/Inboxes';
import MyFeed from './pages/MyFeed';
import Posts from './pages/Posts';
import FeedBack from './pages/FeedBack';
import Dashboard from './pages/Dashboard';


const AdminPageWrapper = styled.div`
    background-color: #F7F8FB;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    width: 100%;
`
const Main = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-left: 70px;
    transform: translateX(${({ isOpen }) => isOpen ? '280px' : '0px'});
    transition: transform 0.3s;
    @media (max-width: 768px) {
    transform: none;
    padding-left: 0;
    }
`
const BlurLayout = styled.div`
     position: absolute;
     transition: 0.3s;
     cursor: pointer;
     top: 0;
     right: 0;
     bottom: 0;
     left: 0;
     z-index: 9;
     background-color: rgba(49,56,78,0.5);
     animation: darken 0.3s ease;
     ${({ isOpen }) => isOpen ? 'display:block' : 'display:none'};
         @keyframes darken {
    from{
         background-color: rgba(49,56,78,0);
    }
        to{
         background-color: rgba(49,56,78,0.5);
    }
    }
`
const Content = styled.div`
    padding: 0 20px;
    @media (max-width: 768px) {
    padding: 0 12px;
    }
`

class AdminPage extends React.Component {
    state = {
        isModalSelectOpen: false,
        isModalCheckOpen: false,
        isOpen:false
    }
    componentDidUpdate() {
        if (this.state.isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
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
    toggleSideBar = (open) => () => {
        this.setState(prevState => ({
            ...prevState,
            isOpen: open !== undefined ? open : !prevState.isOpen
        }))
    }




    render() {
        const {
            collaborationState: {
                message: collaborationMessage,
                success
            }
        } = this.props;

        return (
            <AdminPageWrapper>
                <SideBar isOpen={this.state.isOpen}  toggleSideBar={this.toggleSideBar}/>
                <Main isOpen={this.state.isOpen} >
                    <BlurLayout isOpen={this.state.isOpen} onClick={this.toggleSideBar(false)}/>
                    <Header isOpen={this.state.isOpen} toggleSideBar={this.toggleSideBar}/>
                    <Content>
                        <Switch>
                            <Route exact path="/admin" render={(props) => <Welcome toggleModalSelect={this.toggleModalSelect} {...props} />} />
                            <Route path="/admin/posts" render={(props) => <Posts toggleModalSelect={this.toggleModalSelect} {...props} />} />
                            <Route path="/admin/feed-back" render={(props) => <FeedBack toggleModalSelect={this.toggleModalSelect} {...props} />} />
                            <Route path="/admin/dashboard" render={(props) => <Dashboard  toggleModalSelect={this.toggleModalSelect} {...props} />} />
                            <Route path="/admin/inboxes/:contactId" render={(props) => <Inboxes toggleSideBarClose toggleModalSelect={this.toggleModalSelect} {...props} />} />
                            <Route path="/admin/my-feed" render={(props) => <MyFeed toggleModalSelect={this.toggleModalSelect} {...props} />} />
                            <Route path="/admin/search-collaboration" render={(props) => <SearchCollabs toggleModalSelect={this.toggleModalSelect} {...props} />} />
                            <Route path="/admin/search-business" render={(props) => <SearchBusiness toggleModalSelect={this.toggleModalSelect} {...props} />} />
                            <Route path="/admin/my-posted-collaboration" render={(props) => <MyPostedCollabs toggleModalSelect={this.toggleModalSelect} {...props} />} />
                            <Route path="/admin/my-favourites" render={(props) => <MyFavourites toggleModalSelect={this.toggleModalSelect} {...props} />} />
                            <Route path="/admin/my-profile" render={(props) => <MyProfile toggleModalSelect={this.toggleModalSelect} {...props} />} />
                            <Route path="/admin/company/:companyId" render={(props) => <CompanyPage toggleModalSelect={this.toggleModalSelect} {...props} />} />
                            <Route path='/admin/:other' render={() => <h1 className='huge bold color_red text-center mt-130'>Not Found</h1>} />
                        </Switch>
                    </Content>
                </Main>
            </AdminPageWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        collaborationState: state.collaboration,
        loginState: state.login_data
    }
}


export default connect(mapStateToProps)(AdminPage);
