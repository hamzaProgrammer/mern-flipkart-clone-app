import React from 'react';
import Navbar from '../../components/navbar/Navbar'
import {Grid } from '@mui/material'
import LeftSection from '../../components/checkoutSec/LeftSide'
import DetCard from '../../components/cartPage/RightSection'
import styled from 'styled-components'

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -50px;
`;


const Cart = () => {
  return (
    <>
      <Navbar/>
      <Grid container style={{paddingLeft: '50px' , marginRight: '50px' , marginTop: '80px' , marginBottom: '30px' }} >
          <Grid item xs={7.8} >
                <LeftSection />
          </Grid>
          <Grid item xs={4} style={{marginLeft: '20px'}} >
              <RightBox>
                <DetCard  />
              </RightBox>
          </Grid>
      </Grid>
    </>
  );
}

export default Cart;
