import React from 'react';
import styled from 'styled-components'
import {Box} from '@mui/material'
import Slider from '@mui/material/Slider';
import Accordian from '../../components/accordian/Accordian'


const LeftDiv = styled.div `
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin-top: 50px;
    background-color: #FFFFFF
`;

const Head = styled.h6 `
    font-size: 17px;
    font-weight:600;
    height: 40px;
    color: #212121
`;

const HeadPrice = styled.h6 `
    font-size: 14px;
    font-weight:600;
    height: 40px;
    color: #212121
`;

const HeadSec = styled.div `
    border-bottom : 1px solid #bdc3c7;
    padding: -15px
`;

const AccodBox = styled.div `
    margin-top: 10px;
    border-top: 1px solid #bdc3c7
`;

function valuetext(value) {
    return `${value}°C`;
}


const FiltersSec = () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  return (
    <>
        <LeftDiv>
            <HeadSec>
                <Head>Filters</Head>
            </HeadSec>
            <Box sx={{ width: 210 }} style={{marginTop: '20px' , marginBottom : '1px solid #212121'}} >
            <HeadPrice>Price</HeadPrice>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>
            <AccodBox>
                <Accordian/>
            </AccodBox>
        </LeftDiv>
    </>
  );
}

export default FiltersSec;
