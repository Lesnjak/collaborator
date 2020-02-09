import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const Paper = styled.div`
    width: 350px;
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 100%;
    right: 0px;
    z-index: 15;
`
const Body = styled.div`
    border-bottom: 1px solid rgba(60, 62, 68, 0.2);
`
const Item = styled.p`
    padding: 16px 24px;
    font-size: 14px;
    font-weight: normal;
    color: #31384E;
`

const ProfileMenu = ({ logout }) => {
    return (
        <Paper>
            <Body>
                <Link to='/admin/my-profile'>
                    <Item>
                        My profile
                    </Item>
                </Link>

                <Item>
                    Price Plans & Services
                </Item>
            </Body>

            <Item onClick={logout}>
                Log Out
            </Item>
        </Paper>
    );
}

export default ProfileMenu;