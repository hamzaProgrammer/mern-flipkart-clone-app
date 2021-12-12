import React  from 'react';
import Navbar from '../../components/navbar/Navbar'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Product from '../../components/cateDetails/CateDetailsProd'
import Categories from '../../components/categories/Categories'
import {Box} from '@mui/material'

const SingleCateProds = () => {
    const {under5k , under10k , under15k , under20k} = useSelector( state => state.prodReducer)
    const {size} = useParams();
  return (
    <>
        <Navbar  />
        <Box style={{marginTop:'45px' ,marginBottom : '-50px' }}>
            <Categories  />
        </Box>
        {
            size === 'size=5' && (
                under5k?.map((item) => (
                    <Product item={item} />
                ))
            )
        }
        {
            size === 'size=10' && (
                under10k?.map((item) => (
                    <Product item={item} />
                ))
            )
        }
        {
            size === 'size=15' && (
                under15k?.map((item) => (
                    <Product item={item} />
                ))
            )
        }
        {
            size === 'size=20' && (
                under20k?.map((item) => (
                    <Product item={item} />
                ))
            )
        }
    </>
  );
}

export default SingleCateProds;
