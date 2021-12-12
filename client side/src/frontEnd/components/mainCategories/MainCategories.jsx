import React from 'react'
import {Box , Button} from '@mui/material'
import styled from 'styled-components'
import MenuItem from '@mui/material/MenuItem';
import {makeStyles} from '@mui/styles'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'

const MyBox = styled.div`
    padding-left: 40px;
    padding-top: 55px;
    display: flex;
    background-color: #F9F9F9;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const useStyles = makeStyles((theme) => ({
    root: {
          "&  .MuiOutlinedInput-notchedOutline": {
              border: "0px solid transparent",
              borderRadius: "5px 5px 0 0"
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "0px solid transparent",
              borderRadius: "5px 5px 0 0"
          },
          "&.focused .MuiOutlinedInput-notchedOutline": {
              border: "0px solid transparent",
              borderRadius: "5px 5px 0 0"
          },
          "&.clicked .MuiOutlinedInput-notchedOutline": {
            border: "0px solid transparent",
            borderRadius: "5px 5px 0 0"
          },
          '& .MuiSvgIcon-root': {
              display: 'none',
              maxWidth: '1px'
          },
    }
}))

const MainCategories = () => {
    const data = [
        {
            pic: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100' , name: 'Top Offers'
        },
        {
            pic: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100',
            name: 'Grocery'
        },
        {
            pic: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
            name: 'Mobiles'
        },
    ];

    const dataOne = [
        {
            pic: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
            name: 'Electonics'
        },
        {
            pic: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100', name: 'Fashion'
        },
        {
            pic: 'https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100', name: 'Home'
        },
        {
            pic: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100',
            name: 'Appliances'
        },
        {
            pic: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100',
            name: 'Travel'
        },
        {
            pic: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100', name: 'Toys and more'
        },
    ];
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <MyBox>
                {
                    data?.map((item) => (
                        <Box style={{display: 'flex' ,flexDirection: 'column', width: '130px' , alignItems: 'center' , backgroundColor : '#F9F9F9'}}>
                            <img src={item?.pic} alt="Photos" width="70" height="60" />
                            <Button variant="contained" style={{backgroundColor: '#F9F9F9' , color: '#212121' , fontWeight: 600 , fontSize: '12px' , boxShadow: 'none' , textTransform: 'none' , marginTop: '5px' }} >{item?.name}</Button>
                        </Box>
                    ))
                }
                {
                    dataOne?.map((item) => (
                        <Box style={{display: 'flex' ,flexDirection: 'column', width: '130px' , alignItems: 'center' , backgroundColor : '#F9F9F9'}}>
                            <img src={item?.pic} alt="Photos" width="70" height="60" />
                            <FormControl sx={{ m: 1, width: 100 }} style={{ marginLeft: '10px'}} >
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    style={{maxHeight: '50px' , marginTop: '-10px' , border: 'none' , fontWeight: 550 , fontStyle:'none' , fontSize: '12px' , width: '120px' ,  textAlign: 'center' ,  }}
                                    displayEmpty
                                    className={classes.root}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                <MenuItem  value="">
                                    {item?.name}
                                </MenuItem>
                                <MenuItem  value={10}>My Phone</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        </Box>
                    ))
                }
            </MyBox>
        </>
    )
}

export default MainCategories
