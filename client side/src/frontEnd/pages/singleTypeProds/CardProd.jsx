import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Brand = styled.h5`
    font-size: 14px;
    color: #878787;
    margin-bottom : 5px;
`;

const NameDiv = styled.h5 `
    display: flex;
    margin-bottom: 10px;
`;

const SecImg = styled.img`
    width: 50px;
    height: 20px;
    margin-left: 10px;
`;

const Price = styled.span`
    font-size: 16px;
    font-weight: 550;
`;

const MrktPrice = styled.span `
    font-size: 14px;
    text-decoration: line-through;
    padding-left: 10px;
    padding-top: 2px;
    color: #878787
`;

const Offer = styled.span `
    font-size: 14px;
    color: #05c46b;
    font-weight: 600;
    padding-left: 10px;
`;

const CardProd = ({item}) => {
  return (
    <>
      <Card sx={{ maxWidth: 300 }}  style={{boxShadow: 'none'}}>
        <CardMedia
            image={item?.productPictures[0]}
            alt="green iguana"
            style={{objectFit: 'contain' , minHeight: '250px' , maxWidth: '200px' }}
            component={Link} to={`/products/productDetails/${item?._id}`}
        />
        <CardContent>
            <Brand>{item?.brand}</Brand>
            <NameDiv>
                <Typography gutterBottom style={{fontSize: '14px' , color: '#212121' , maxWidth: '180px', fontWeight: 550 }} component="div">
                    {item?.name}
                </Typography>
                <SecImg src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="Secured Photo" />
            </NameDiv>
            <NameDiv>
                <Price>Rs {item?.orgPrice}</Price>
                <MrktPrice>Rs {item?.marktPrice}</MrktPrice>
                <Offer>{item?.offer}</Offer>
            </NameDiv>
        </CardContent>
    </Card>
    </>
  );
}

export default CardProd;
