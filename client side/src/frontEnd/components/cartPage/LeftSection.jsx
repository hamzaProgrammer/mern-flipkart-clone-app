import React from 'react';
import styled from 'styled-components'
import Product from './CartProduct'
import {Button} from '@mui/material'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import {useSelector , useDispatch} from 'react-redux'

const MyBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 42px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 15px;
    background-color: #FFFFFF;
    border: 0.4px solid #ecf0f1;
`;

const CartHead = styled.h6`
    font-size: 18px;
    font-weight: 600;
`;

const LocatDiv = styled.div`
    display: flex;
`;

const CartProdsDiv = styled.div`
    display: flex;
    background-color: #FFFFFF;
    flex-direction: column;
`;

const LeftSection = () => {
    const dispatch = useDispatch();
    const {products} = useSelector(state => state.cartReducer)
  return (
    <>
      <MyBox>
            <CartHead>
                My Cart(0)
            </CartHead>
            <LocatDiv>
                <AddLocationIcon style={{color: 'crimson' ,marginTop: '-2px'}} />
                <CartHead>
                    Deliver To
                </CartHead>
            </LocatDiv>
      </MyBox>
        <CartProdsDiv>
            {
                products?.map((item) => (
                    <Product item={item} />
                ))
            }
            <Button variant="contained" style={{marginLeft: '600px' , marginTop: '15px' , marginBottom: '15px' , maxWidth: '200px' , height: '50px', fontSize: '17px' ,  backgroundColor: '#e15f41' , fontWeight: 600 , borderRadius: 'none'}} >place order</Button>
        </CartProdsDiv>
    </>
  );
}

export default LeftSection;
