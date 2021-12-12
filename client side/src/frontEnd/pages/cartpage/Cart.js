import React from 'react';
import Navbar from '../../components/navbar/Navbar'
import {Grid } from '@mui/material'
import LeftSection from '../../components/cartPage/LeftSection'
import RightSec from '../../components/cartPage/RightSection'
import Footer from '../../components/footer/Footer'


const Cart = () => {

  return (
    <>
      <Navbar/>
      <Grid container style={{paddingLeft: '50px' , marginRight: '50px' , marginTop: '40px' , marginBottom: '30px' }} >
          <Grid item xs={7.8} >
                <LeftSection />
          </Grid>
          <Grid item xs={4} style={{marginLeft: '20px'}} >
              <RightSec/>
          </Grid>
      </Grid>
      <Footer/>
    </>
  );
}

export default Cart;
