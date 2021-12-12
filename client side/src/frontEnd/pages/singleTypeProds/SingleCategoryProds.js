import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import {Box} from '@mui/material'
import {useParams} from 'react-router-dom'
import Categories from '../../components/categories/Categories'

import OtherProdsPage from './OtherProdPage'
import MobilePage from './MobilePage'
import GrocerryProds from './GrocerryProds'


const SingleCategoryProducts = () => {
    const {parentCategory , subCate } = useParams();

    return (
        <>
            <Navbar/>
            <Box style={{marginTop: '45px'}} >
                <Categories/>
            </Box>
            <Box style={{marginTop: '-50px'}}>
                {
                    parentCategory === 'Electronics' ? (
                            <MobilePage parent={parentCategory} sub={subCate} />
                    ) : (
                        ( parentCategory === 'Men' || parentCategory === "Women" )  ? (
                            <GrocerryProds parent={parentCategory} sub={subCate} />
                        ) : (
                            <OtherProdsPage parent={parentCategory} sub={subCate} />
                        )
                    )
                }
            </Box>
        </>
    )
}

export default SingleCategoryProducts;