import React from 'react'
import styled from 'styled-components';
import {Grid} from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {List , Typography} from '@mui/material'
import {Link} from 'react-router-dom'

const ProdImageDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const ProdImage = styled.img`
    width: 100%;
    cursor: pointer;
    height: 140px;
`;

const DetailSec = styled.div`
    display: flex;
    flex-direction : column;
    padding: 10px;
`;

const ProdName = styled.span`
    font-size: 18px;
    font-weight: 550;
    font-family: Arial;
    color: #212121;
    text-transform : uppercase;
`;

const ProdListDet = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 470px;
`;

const PriceSec = styled.div`
    display: flex;
    flex-direction: column
`;

const AssuredPrice = styled.div`
    display: flex;
    justify-content: space-between;
`;

const MerktPriceDiv = styled.div `
    display: flex;
    margin-top: 15px;
    padding-left: 20px;
`;

const Price = styled.span`
    font-size: 22px;
    font-weight: 600;
    font-family: Roboto;
    color: #212121
`;

const MarktPrice = styled.span `
    font-size: 17px;
    font-weight: 550;
    font-family: Roboto;
    margin-left: -20px;
    color: #212121;
    text-decoration: line-through
`;

const Offer = styled.span`
    font-size: 14px;
    color: #05c46b;
    font-weight: 600;
    padding-left: 10px;
`;

const SecuredImg = styled.img`
    width: 100px;
    height: 25px;
`;

const Product = ({item}) => {
    return (
        <>
            <Grid container style={{borderBottom : '1px solid #d2dae2' ,paddingTop: '20px'}} >
                <Grid item xs={2.5}>
                    <ProdImageDiv>
                        <img style={{width: '100%' ,  cursor: 'pointer', height: '140px' }}  src={item?.productPictures[0]}  alt="Prod Cover"   />
                        <FormGroup  style = {
                            {
                                fontSize: '10px',
                                color: '#878787',
                                paddingTop: '20px'
                            }
                        } >
                            <FormControlLabel control={<Checkbox style={{color: '#878787'}} />} label="Add to favroute"  />
                        </FormGroup>
                    </ProdImageDiv>
                </Grid>
                <Grid item xs={6}>
                    <DetailSec>
                        <Typography style={{fontSize: '18px', fontWeight: 550 , color: '#212121', textTransform : 'uppercase' , textDecoration: 'none'}}  component={Link} to={`/products/productDetails/${item?._id}`} >{item?.name}</Typography>
                        <ProdListDet>
                            <List >
                                {item?.desc}
                            </List>
                        </ProdListDet>
                    </DetailSec>
                </Grid>
                <Grid item xs={2.5}>
                    <PriceSec>
                        <AssuredPrice>
                            <Price>Rs {item?.orgPrice}</Price>
                            <SecuredImg src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="Secrured Cover" />
                        </AssuredPrice>
                        <MerktPriceDiv>
                            <MarktPrice>Rs {item?.marktPrice}</MarktPrice>
                            <Offer>{item?.offer}</Offer>
                        </MerktPriceDiv>
                    </PriceSec>
                </Grid>
            </Grid>
        </>
    )
}

export default Product
