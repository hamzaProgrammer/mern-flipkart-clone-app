import React from 'react'
import styled from 'styled-components'
import TimerIcon from '@mui/icons-material/Timer';
import Countdown from "react-countdown";
import {Button } from '@mui/material'

const MySec = styled.div`
    width: 100%;
    background-color: #F9F9F9;
    margin-bottom: 1px;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const DealText = styled.h6`
    font-weight: 600;
    font-size: 27px;
    color: #212121;
    font-weight: 600
`;

const LeftSec = styled.div`
    display: flex;
`;

const Timer = styled.h6`
    margin-top: 9px;
    font-size: 17px;
    padding-left: 10px;
    color: #2c3e50
`;

const Completionist = () => <span>!Oops Offer Time  Over</span>;
const renderer = ({ hours, minutes, seconds, completed }) => (
    completed ? (
            <Completionist />
    ) : (
        <span>
            {hours}h:{minutes}m:{seconds}s
        </span>
    )
)

const DealsSesc = () => {
    return (
        <>
            <MySec>
                <LeftSec>
                    <DealText>Deals of the Day</DealText>
                    <TimerIcon style={{color: '#e74c3c' , marginLeft: '20px' , marginTop: '7px'}} />
                    <Timer>
                        <Countdown date={Date.now() + 5000000} renderer={renderer} />
                    </Timer>
                </LeftSec>
                <LeftSec>
                    <Button variant="contained" style={{fontWeight: 600}} >View All</Button>
                </LeftSec>
            </MySec>
        </>
    )
}

export default DealsSesc
