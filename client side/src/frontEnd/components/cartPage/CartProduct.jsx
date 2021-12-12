import React from 'react';
import styled from 'styled-components'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {Button} from '@mui/material'
import { deleteProduct , updateCart } from '../../../reducers/cartReducer'
import {useSelector , useDispatch} from 'react-redux'


const MainDiv = styled.div`
    display: flex;
    padding: 10px;
    background-color: #FFFFFF;
`;

const ProdImage = styled.img`
    width: 100px;
    height: 150px;
`;

const TextSec = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-top: 30px;
`;

const ProdName = styled.h6`
    font-size: 16px;
    color: #1e272e;
    font-weight: 550;
    max-width: 550px;
`;

const ProdPrice = styled.h6 `
    font-size: 18px;
    padding-top: 10px;
    color: black;
    font-weight: 600;
    margin-top: 7px;
`;

const ProdDeliver = styled.h6 `
    font-size: 15px;
    padding-top: 10px;
    color: #1e272e;
    padding-left: 550px;
`;

const Buttons = styled.div`
    display: flex;
    border-bottom: 1px solid #ecf0f1;
    padding-left:30px;
    text-align: center;
    background-color: #FFFFFF;
    padding-top: 22px;
`;

const CartBtns = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #FFFFFF;
    width: 100px;
    padding-top: 7px;
`;

const CartBtn = styled.div `
    width: 30px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #808e9b;
    color: black;
    cursor: pointer;
    font-weight: 600;
    text-align: center
`;


const CartQty = styled.h6 `
    width: 30px;
    border: 1px solid #808e9b;
    height: 25px;
    font-size: 15px;
    padding-top: 3px;
    text-align: center
`;

const PriceDiv = styled.div`
    display: flex;
    justify-content:space-between;
    max-width: 180px;
`;

const DisPrice= styled.span`
    font-size: 15px;
    text-decoration: line-through;
    padding-top: 19px;
    color: #535c68;
    font-weight: 550
`;

const Offer = styled.span `
    font-size: 15px;
    font-weight: 550;
    padding-top: 19px;
    color: #2ecc71
`;

const CartProduct = ({item}) => {
    const dispatch = useDispatch();


    // deleting Item
    const deleteItem = (id, price) => {
        dispatch(deleteProduct({
            id : id , price: price
        }))
    }


    // updating Quantity
    const updateMyQty = (product, type) => {
        dispatch(updateCart({ product, type }))
    }
  return (
    <>
        <MainDiv>
            <ProdImage src={item?.image} alt="Product Cover" />
            <TextSec>
                <ProdDeliver> Deliver In 3-5 Days</ProdDeliver>
                <ProdName>{item?.name}</ProdName>
                <PriceDiv>
                    <ProdPrice>Rs {item?.price * item?.sentQty }  <span style={{fontSize: '12px' , color: '#7f8c8d', marginLeft: '10px'}}>({item?.price } * {item?.sentQty} )</span>   </ProdPrice>
                </PriceDiv>
            </TextSec>
        </MainDiv>
        <Buttons>
            <CartBtns>
                <CartBtn>
                    <RemoveIcon onClick={() => updateMyQty(item , "dec" )}  style={{width: '15px'}} />
                </CartBtn>
                <CartQty>
                    {item?.sentQty}
                </CartQty>
                 <CartBtn>
                    <AddIcon onClick={() => updateMyQty(item, "inc" )}  style={{width: '15px'}} />
                </CartBtn>
            </CartBtns>
            <Button variant="text" style={{marginLeft: '10px' , fontWeight: 700 , color: '#1e272e' , paddingBottom: '15px'}} >Save for Later</Button>
            <Button variant="text" style={{marginLeft: '10px' , fontWeight: 700 , color: '#1e272e' , paddingBottom: '15px'}} onClick={() => deleteItem(item?._id , item?.orgPrice * item?.sentQty)} >Remove</Button>
        </Buttons>
    </>
  );
}

export default CartProduct;
