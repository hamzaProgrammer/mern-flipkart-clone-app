import React from 'react'
import styled from 'styled-components'
import TimerIcon from '@mui/icons-material/Timer';
import {Button } from '@mui/material'

const MySec = styled.div`
    width: 100%;
    background-color: #F9F9F9;
    margin-bottom: 1px;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-top: 20px;
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


const DealsSesc = () => {
    return (
        <>
            <MySec>
                <LeftSec>
                    <DealText>Men's Footware</DealText>
                </LeftSec>
                <LeftSec>
                    <Button variant="contained" style={{fontWeight: 600}} >View All</Button>
                </LeftSec>
            </MySec>
        </>
    )
}

export default DealsSesc
