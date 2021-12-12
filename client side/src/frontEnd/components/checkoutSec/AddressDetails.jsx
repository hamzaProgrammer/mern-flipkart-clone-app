import React , {useState} from 'react';
import styled from 'styled-components'
import {Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import {TextField , TextareaAutosize} from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const AddressDiv = styled.div`
    display: flex;
    flex-direction: column;
`;


const Address = styled.p`
    font-size: 15px;
    color: #353b48;
    width: 670px;
    padding-right: 15px;
`;

const MyBox = styled.div`
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
    max-width: 600px;
    margin-left: 100px;
`;

const LeftSec = styled.div`
    display: flex;
    padding: 15px;
    flex-direction: column;
`;

const AddressType = styled.h5`
    font-size: 15px;
    font-weight: 600;
    margin-left: 100px;
    margin-bottom: -20px;
    color: #1e3799
`;

const AddressInnerDiv = styled.div`
    display: flex;
    border-bottom: 1px solid #3c6382;
    padding-bottom: 10px;
`;


const AddressDetails = () => {
    const [ showSec , setShowSec ] = useState(false)
  return (
    <>
        <AddressDiv>
            <AddressInnerDiv>
                <Address>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</Address>
                <Button variant="contained" onClick={() => setShowSec(true)}   style={{maxWidth: '180px' , height: '30px',  backgroundColor: '#1e3799' , fontWeight: 600 }} >Choose this</Button>
            </AddressInnerDiv>
            <Button variant="contained" onClick={() => setShowSec(true)} startIcon={<AddIcon style={{color: '#FFFFFF'}} />}  style={{maxWidth: '210px' , backgroundColor: '#e84118' , fontWeight: 600 , marginTop: '20px'}} >Add New Address</Button>
            {
                showSec && (
                    <>
                        <MyBox>
                            <LeftSec>
                                <TextField id="outlined-basic" label="Name" variant="outlined" />
                                <TextField id="outlined-basic" label="Pincode" style={{marginTop: '15px' , width: '250px'}} variant="outlined" />
                            </LeftSec>
                            <LeftSec>
                                <TextField id="outlined-basic" label="10-digits Mobile No." variant="outlined" />
                                <TextField id="outlined-basic" label="Locality" style={{marginTop: '15px' , width: '250px'}} variant="outlined" />
                            </LeftSec>
                        </MyBox>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={5}
                            placeholder="Enter Address in Detail..."
                            style={{ width: 500 , marginLeft : '140px' , marginTop: '15px' }}
                        />
                        <MyBox>
                            <LeftSec>
                                <TextField id="outlined-basic" label="City | District" variant="outlined" />
                            </LeftSec>
                            <LeftSec>
                                <TextField id="outlined-basic" label="State" variant="outlined" />
                            </LeftSec>
                        </MyBox>
                        <AddressType>Address Type</AddressType>
                        <MyBox>
                            <LeftSec>
                                <FormControl component="fieldset">
                                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                        <FormControlLabel value="female" control={<Radio />} label="Home (All Day delivery)" />
                                        <FormControlLabel value="male" control={<Radio />} label="Work (Delivery Between 10 AM - 5 PM)" />
                                    </RadioGroup>
                                </FormControl>
                            </LeftSec>
                        </MyBox>
                        <MyBox>
                            <LeftSec>
                                <Button variant="contained" startIcon={<AddIcon style={{color: '#FFFFFF'}} />}  style={{maxWidth: '250px' , backgroundColor: '#0a3d62' , fontWeight: 600 , marginTop: '20px'}} >save and deliver here</Button>
                            </LeftSec>
                            <LeftSec>
                                <Button variant="contained"   style={{maxWidth: '100px' , marginLeft: '-80px',   backgroundColor: '#eb2f06' , fontWeight: 600 , marginTop: '20px'}} onClick={() => setShowSec(false)} >cancel</Button>
                            </LeftSec>
                        </MyBox>
                    </>
                )
            }
        </AddressDiv>
    </>
  );
}

export default AddressDetails;
