import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import DonutChart from "react-svg-donut-chart"

import Avatar from './Avatar';
import Button from './Button';


const Box = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);    
    width: 278px;
    margin-right: 30px;
    height: 100%;
    flex-shrink: 0;
`
const TopBar = styled.div`
    text-transform: uppercase;
    height: 57px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EDF4FF;
    font-weight: bold;
    font-size: 13px;
`
const Body = styled.div`
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Ring = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
    width: 124px;
    height: 124px;
    overflow: hidden;
`
const DonutContainer = styled.div`
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
`

const ChatSidebar = ({ percent = 70 }) => {
    const dataPie = [
        { value: 100 - percent, stroke: "#fff", strokeWidth: 12 },
        { value: percent, stroke: "#9EDA9C", strokeWidth: 12 },
    ]
    return (
        <Box>
            <TopBar>
                my profile completed
            </TopBar>
            <Body>
                <div className="mb-35">
                    <Ring>
                        <DonutContainer>
                            <DonutChart data={dataPie} />
                        </DonutContainer>

                        <div className="absolute">
                            <Avatar
                                boxShadow={'inset 0px 0px 5px rgba(0, 0, 0, 0.15)'}
                                size={'90px'}
                                alt={`${percent}%`}
                                fontSize='36px'
                                background='#fff'
                            />
                        </div>

                    </Ring>
                </div>
                <Link to='my-profile'>
                    <Button
                        variant='secondary'
                        color='#2434A1'
                        width='124px'
                    >
                        View Now
                </Button></Link>
            </Body>
        </Box>
    );
}

export default ChatSidebar;
