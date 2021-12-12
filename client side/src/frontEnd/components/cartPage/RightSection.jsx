import React from 'react';
import styled from 'styled-components'
import ShieldIcon from '@mui/icons-material/Shield';
import {useSelector} from 'react-redux'

const PriceSec = styled.div`
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    margin-right: 80px;
    background-color: #FFFFFF;
    padding-bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Text = styled.h6`
    font-size: 15px;
    height: 28px;
    color: #222f3e
`;

const TextDelivery = styled.h6 `
    font-size: 15px;
    height: 28px;
    color: #10ac84
`;

const TextHead = styled.h6 `
    font-size: 15px;
    height: 28px;
    color: #535c68;
    font-weight: 600;
`;

const TotalAmt = styled.h6 `
    font-size: 17px;
    height: 28px;
    color: #222f3e;
    font-weight: 600;
`;

const TextDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 15px;
    padding-bottom: 10px
`;


const FinalDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 25px;
    margin-right: 25px;
    padding-top: 15px;
    padding-bottom: 10px;
    border-top: 0.5px solid #576574;
    border-bottom: 0.5px solid #576574;
`;

const HeaderDiv = styled.div `
    display: flex;
    justify-content: space-between;
    margin-left: 25px;
    margin-right: 25px;
    padding-top: 15px;
    padding-bottom: 10px;
    border-bottom: 0.5px solid #576574;
`;

const OfferText = styled.span`
    font-size: 14px;
    font-weight: 550;
    color: #10ac84;
`;

const PayMentDiv = styled.div`
    display: flex;
    max-width: 360px;
    padding: 5px;
    margin-top: 15px;
`;

const PayText = styled.p`
    font-size: 13px;
    color: #7f8fa6;
    padding-left: 7px;
`;


const RightSection = () => {
  const {total} = useSelector(state => state.cartReducer)
  return (
    <>
        <PriceSec>
            <HeaderDiv>
              <TextHead>PRICE DETAILS</TextHead>
            </HeaderDiv>
            <TextDiv>
              <Text>Price</Text>
              <Text>Rs. {total ? total : 0 }</Text>
            </TextDiv>
            <TextDiv>
              <Text>Delivery Charges</Text>
              <TextDelivery>FREE</TextDelivery>
            </TextDiv>
            <FinalDiv>
              <TotalAmt>Total Amount</TotalAmt>
              <TotalAmt>Rs. {total ? total : 0}</TotalAmt>
            </FinalDiv>
            <TextDiv>
              <OfferText>You will save Rs.{total ? '188' : 0}  on this order</OfferText>
            </TextDiv>
        </PriceSec>
        <PayMentDiv>
            <ShieldIcon style={{color: '#e1b12c'}} />
            <PayText>Safe and Secure Payment Methods, easy returns. 100% authentice products.</PayText>
        </PayMentDiv>
    </>
  );
}

export default RightSection;
