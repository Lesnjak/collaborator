import React, {useState} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'
import IconButton from '../components/IconButton';
import {ReactComponent as Logo} from '../../../assets/icons/Collabbed_logo.svg';
import {ReactComponent as MenuOpen} from '../../../assets/icons/menu_open_i.svg';
import {ReactComponent as MenuClose} from '../../../assets/icons/menu_close.svg';
import {ReactComponent as Post} from '../../../assets/icons/email.svg';
import {ReactComponent as Dashboard} from '../../../assets/icons/dashboard.svg';
import {ReactComponent as PersonSearch} from '../../../assets/icons/person_search.svg';
import {ReactComponent as BusinessSearch} from '../../../assets/icons/vallet.svg';
import {ReactComponent as Posted} from '../../../assets/icons/list.svg';
import {ReactComponent as Favorite} from '../../../assets/icons/heart.svg';
import {ReactComponent as Profile} from '../../../assets/icons/person_blue.svg';
import {ReactComponent as MyFeed} from '../../../assets/icons/my-feed.svg';
import {ReactComponent as Star} from '../../../assets/icons/star_sidebar.svg';

const Wrapper = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;    
    height: 100%;
    min-height: 100vh;
    width: ${({isOpen}) => isOpen ? '350px' : '70px'} ;
    overflow: hidden;
    background-color: #fff;
    padding: 13px 0 13px 0;
    top: 0;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.15);
    transition:width 0.3s ease;
    align-items: flex-start;
    overflow: hidden;
    z-index:10;
    @media (max-width: 768px) {
      width: ${({isOpen}) => isOpen ? '350px' : '0'} ;
      box-shadow: 0px 0px 7px ${({isOpen}) => isOpen ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0)'};
    }
        @media (max-width: 400px) {
      width: ${({isOpen}) => isOpen ? '100%' : '0'} ;
    }
    
`
const ControllsScroll = styled.div`

`
const Controlls = styled.div`
    margin-top: 40px;
    white-space: nowrap;
    overflow-y: auto;
    overflow-x: hidden;
    padding-left: 13px;
    width: 100%;
        &::-webkit-scrollbar-track {
        background-color: #FFF;
    }

    &::-webkit-scrollbar{
        width: 2px;
        background-color: #FFF;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #999FAE;
        position: relative;
        left: 10px
    }
     svg {
            path {
            transition: 0.3s;
            }
        }
    .align-center{
    margin-bottom: 30px;
        &:hover .link{
         background-color: #5075D6;        
        svg {
            path {
                fill: #fff;
            }
        }
    }
    }

    .link {
        background-color: #F3F4F6;
        border-radius: 50%;
        transition: 0.2s;
    }
    

    .active{
        p {
            font-weight: bold;
        }

        .link {
            background-color: #5075D6;        

            svg {
                path {
                    fill: #fff;
                }
                
            }
        }
    }
`
const ArrowWrapper = styled.div`
    padding: 15px;
    position: absolute;
    right: 4%;
    top: 49%;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 50%;
    border: 1px solid transparent;
    animation: showArrow 0.7s;
    &:hover{
    border: 1px solid #eee;
    }
    @keyframes showArrow{
    from{
        opacity: 0;
    }
    60%{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
    }
`
const Arrow = styled.div`
    width: 10px;
    height: 10px;
    border-top: 2px solid #31384E;
    z-index:10;
    border-left: 2px solid #31384E;
    transform: rotate(-45deg);
`
const CloseWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 13px;
    padding-right: 13px;
`
const Label = styled.a`
    display: none;
    margin-left: 40px;
    .logo{
            path{
                fill: #2434A1;
            }
    }
    @media (max-width: 768px) {
      display: block;
    }
`


const SideBar = ({toggleSideBar, isOpen}) => {
    const lastContact = localStorage.getItem('lastContact') || 'all';
    return (
        <Wrapper isOpen={isOpen}>
            <CloseWrapper>
                <IconButton onClick={toggleSideBar()}>
                    {!isOpen ? <MenuOpen/> : <MenuClose/>}
                </IconButton>
                <Label href='/'>
                    <Logo height={24} width={114} className='logo'/>
                </Label>
            </CloseWrapper>


            <Controlls>
                <ControllsScroll>
                    <NavLink onClick={toggleSideBar(false)} exact to='/admin/dashboard'
                             className='flexbox align-center'>
                        <IconButton className='link'>
                            <Dashboard width={24} height={24}/>
                        </IconButton>
                        <p className='ml-25'>Dashboard</p>
                    </NavLink>

                    <NavLink onClick={toggleSideBar(false)} to={`/admin/inboxes/${lastContact}`}
                             className='flexbox align-center'>
                        <IconButton className='link'>
                            <Post/>
                        </IconButton>
                        <p className='ml-25'>Inbox</p>
                    </NavLink>

                    <NavLink onClick={toggleSideBar(false)} exact to='/admin/my-feed' className='flexbox align-center'>
                        <IconButton className='link'>
                            <MyFeed/>
                        </IconButton>
                        <p className='ml-25'>My feed</p>
                    </NavLink>

                    <NavLink onClick={toggleSideBar(false)} exact to='/admin/search-collaboration'
                             className='flexbox align-center'>
                        <IconButton className='link'>
                            <PersonSearch/>
                        </IconButton>
                        <p className='ml-25'>Search Collaboration</p>
                    </NavLink>

                    <NavLink onClick={toggleSideBar(false)} exact to='/admin/search-business'
                             className='flexbox align-center'>
                        <IconButton className='link'>
                            <BusinessSearch/>
                        </IconButton>
                        <p className='ml-25'>Search Business</p>
                    </NavLink>

                    <NavLink onClick={toggleSideBar(false)} exact to='/admin/my-posted-collaboration'
                             className='flexbox align-center'>
                        <IconButton className='link'>
                            <Posted/>
                        </IconButton>
                        <p className='ml-25'>My Posted Collaborations</p>
                    </NavLink>

                    <NavLink onClick={toggleSideBar(false)} exact to='/admin/my-favourites'
                             className='flexbox align-center'>
                        <IconButton className='link'>
                            <Favorite/>
                        </IconButton>
                        <p className='ml-25'>My Favourites</p>
                    </NavLink>

                    <NavLink onClick={toggleSideBar(false)} exact to='/admin/my-profile'
                             className='flexbox align-center'>
                        <IconButton className='link'>
                            <Profile/>
                        </IconButton>
                        <p className='ml-25'>My Profile</p>
                    </NavLink>
                    <NavLink onClick={toggleSideBar(false)} exact to='/admin/feed-back'
                             className='flexbox align-center'>
                        <IconButton className='link'>
                            <Star/>
                        </IconButton>
                        <p className='ml-25'>My Feedback</p>
                    </NavLink>
                </ControllsScroll>
                {isOpen && <ArrowWrapper onClick={toggleSideBar(false)}><Arrow isOpen={isOpen}/></ArrowWrapper>}
            </Controlls>
        </Wrapper>
    );

}

export default SideBar;
