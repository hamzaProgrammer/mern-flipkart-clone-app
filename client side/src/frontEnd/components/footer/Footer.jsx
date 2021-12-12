import React from 'react'
import { List  } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import styled from 'styled-components'
import Button from '@mui/material/Button';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import StarsIcon from '@mui/icons-material/Stars';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const MyBox = styled.div`
    display: flex;
    background-color: #172337;
    padding: 30px;
    padding-left: 50px;
    border-bottom: 1px solid white
`;

const MyListItem = styled.span`
    font-size: 11px;
    color: white;
    text-transform: capitalize;
    font-weight: 550
`;


const Headtext = styled.span`
    font-size: 13px;
    font-weight: 500;
    padding-left: 18px;
    color: #a4b0be;
    padding-bottom: 25px;
`;

const LowerBox = styled.div `
    display: flex;
    background-color: #172337;
    justify-content: space-around;
    padding: 30px;
    padding-left: 50px;
`;

const BoxImages = styled.div`
    display: flex;
`;


const Footer = () => {
    return (
        <>
            <MyBox>
                <List  >
                    <Headtext>ABOUT</Headtext>
                    <ListItem>
                        <MyListItem >Contact Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >About Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >Contact Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >About Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >Contact Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >About Us</MyListItem>
                    </ListItem>
                </List>
                <List style={{marginLeft: '75px'}} >
                    <Headtext>HELP</Headtext>
                    <ListItem>
                        <MyListItem >Contact Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >About Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >Contact Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >About Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >Contact Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >About Us</MyListItem>
                    </ListItem>
                </List>
                <List style={{marginLeft: '75px'}} >
                    <Headtext>POLICY</Headtext>
                    <ListItem>
                        <MyListItem >Contact Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >About Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >Contact Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >About Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >Contact Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >About Us</MyListItem>
                    </ListItem>
                </List>
                <List style={{marginLeft: '75px'}} >
                    <Headtext>SOCIAL</Headtext>
                    <ListItem>
                        <MyListItem >Contact Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >About Us</MyListItem>
                    </ListItem>
                    <ListItem>
                        <MyListItem >Contact Us</MyListItem>
                    </ListItem>
                </List>
                <List style={{marginLeft: '90px' , paddingLeft: '20px' ,  borderLeft: '1px solid white' , maxHeight: '150px'}} >
                    <Headtext>Mail Us At:</Headtext>
                    <ListItem>
                        <MyListItem >
                        Flipkart Internet Private Limited,<br/>
                        Buildings Alyssa, Begonia &<br/>
                        Clove Embassy Tech Village,<br/>
                        Outer Ring Road, Devarabeesanahalli Village,<br/>
                        Bengaluru, 560103,<br/>
                        Karnataka, India<br/>
                        </MyListItem>
                    </ListItem>
                </List>
                <List style={{marginLeft: '10px'}} >
                    <Headtext>Registered Office Address:</Headtext>
                    <ListItem>
                        <MyListItem >
                        Flipkart Internet Private Limited,<br/>
                        Build `ings Alyssa, Begonia &<br/>
                        Clove Embassy Tech Village,<br/>
                        Outer Ring Road, Devarabeesanahalli Village,<br/>
                        Bengaluru, 560103,<br/>
                        Karnataka, India<br/>
                        CIN : U51109KA2012PTC066107<br/>
                        Telephone: 1800 202 9898`<br/>
                        </MyListItem>
                    </ListItem>
                </List>
            </MyBox>
            <LowerBox>
                <Button variant="text" style={{color: 'white' , fontWeight: 600 , textTransform : 'none'}} startIcon={<BusinessCenterIcon style={{color: 'yellow'}}  />}>
                    Sell on Flipkart
                </Button>
                <Button  variant = "text"
                style = {
                    {
                        color: 'white',
                        fontWeight: 600,
                        textTransform: 'none'
                    }
                }
                startIcon = {
                        < StarsIcon style = {
                            {
                                color: 'yellow'
                            }
                        }
                        />}>
                    Advertise
                </Button>
                <Button variant="text" style={{color: 'white' , fontWeight: 600 , textTransform : 'none'}} startIcon={<CardGiftcardIcon style={{color: 'yellow'}}  />}>
                    Gift Cards
                </Button>
                <Button variant="text" style={{color: 'white' , fontWeight: 600 , textTransform : 'none'}} startIcon={<HelpOutlineIcon style={{color: 'yellow'}}  />}>
                    Help Center
                </Button>
                <MyListItem style={{paddingTop: '14px'}} >© 2007-2021 Flipkart.com</MyListItem>
                <BoxImages>
                    <img width="300" height="50"  src="data:image/jpeg;base64,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" alt="Cover"  />
                </BoxImages>
            </LowerBox>
        </>
    )
}

export default Footer
