import React from 'react'
import styled from 'styled-components'
import {Grid} from '@mui/material'
import FilterSec from './FiltersSec'
import Product from './Product'
import {useSelector} from 'react-redux'

const TextSec = styled.p`
    font-size: 12px;
    color: #878787;
    margin-top: 40px;
    padding: 15px;
`;

const RightSec = styled.div`
    display: flex;
    flex-direction : column;
    margin-top: 50px;
    background-color: #FFFFFF;
`;

const ProdName = styled.h1`
    font-size: 15px;
    color: #212121;
    padding: 15px
`;


const MobileDetailsPage = ({parent, sub}) => {
    const {allProducts} = useSelector(state => state.prodReducer)

    return (
        <>
            <Grid container style={{padding: '10px'}} >
                <Grid item xs={2.5}>
                    <FilterSec/>
                </Grid>
                <Grid item xs={9.5}>
                    <RightSec>
                        <TextSec>
                            If Indian people are given with a choice to select their favourite season, it can be assumed that many would choose winters over summers. After all, sitting in front of a bonfire with a hot beverage sounds more appealing than cursing the ceiling fan for not throwing enough cool air. Now, you can get rid of the latter this summer by installing a split air conditioner in your room. Whether you opt for a 1.5 ton split AC or one with a larger capacity, you will be able to enjoy the benefits to the brim only if you buy one that suits the dimensions of your place in which you want to install it. Also, as the prices vary according to the capacities and features, you can buy one that matches both your budget and requirements. For example, if you compare the split AC 1.5 ton price of one brand with an air conditioner from a different brand, then along with the price, you might also notice changes in the specification list. So, we suggest you check all these points thoroughly on the site. These air conditioners can be purchased on Flipkart from several brands. Some of them are MarQ by Flipkart, Blue Star, Voltas, Samsung, and Lloyd.
                        </TextSec>
                        <ProdName>{sub}</ProdName>
                        {
                            allProducts?.map((item) => (
                                ( item?.subCate === sub || item?.parentCate === parent ) && (
                                        <Product item={item} />
                                )
                            ))
                        }
                    </RightSec>
                </Grid>
            </Grid>
        </>
    )
}

export default MobileDetailsPage;