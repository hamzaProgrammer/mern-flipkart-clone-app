import React from 'react'
import { Box , Grid } from '@mui/material'
import Navbar from '../../components/navbar/Navbar'
import MainOffers from '../../components/mainCategories/MainCategories'
import MainCarousel from '../../components/mainCarousel/mainCarousel'
import Timer from '../../components/deals/DealsSesc'
import RightSecImg from '../../components/rightDealsec/RightDealSec'
import DealCrousel from '../../components/dealCarousel/Carousel'
import MensDeals from '../../components/mensDeals/Mensdealcarousel'
import ToDeals from '../../components/topDealsSec/Topdealcarousel'
import DummyData from '../../components/flipkartDetails/DummyDetails'
import Footer from '../../components/footer/Footer'


const Home = () => {
    return (
        <>
            <Navbar/>
            <MainOffers/>
            <Box style={{paddingLeft: '10px' , paddingRight: '10px'}}>
                <MainCarousel/>
                <Grid container>
                    <Grid item xs={9.7} style={{paddingRight: '10px'}}>
                        <Timer/>
                        <DealCrousel/>
                    </Grid>
                    <Grid item xs={2.2}>
                        <RightSecImg/>
                    </Grid>
                </Grid>
                <MensDeals/>
                <ToDeals/>
            </Box>
            <DummyData/>
            <Footer/>
        </>
    )
}

export default Home
