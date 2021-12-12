import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import styled from 'styled-components'
import {makeStyles} from '@mui/styles'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const AllCategories = styled.div`
    display: flex;
    background-color: #FFFFFF;
    max-height: 50px;
    padding-left: 15px;
    padding-right: 15px
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
    }
}))

export const SimpleMenu = () => {
    const classes = useStyles();
    const {categories} = useSelector(state => state.cateReducer)
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

  return (
      <>
      <AllCategories>
      {
          categories?.map((item) => (
              <FormControl sx={{ m: 1, width: 130 , marginLeft: '50px' }}  >
                <Select
                  value={age}
                  onChange={handleChange}
                  style={{maxHeight: '30px' , marginTop: '-10px' , border: 'none' , fontWeight: 500 ,fontStyle:'none' , fontSize: '14px'}}
                  displayEmpty
                  className={classes.root}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem  value="" style={{cursor: 'none'}} >
                    {item?.name}
                  </MenuItem>
                  {
                    item?.children?.map((Inneritem) => (
                      <MenuItem  component={Link} to={`/products/${item?.name}/${Inneritem}`}  >{Inneritem}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
          ))
      }

      
    </AllCategories>
    </>
  );
}

export default SimpleMenu;