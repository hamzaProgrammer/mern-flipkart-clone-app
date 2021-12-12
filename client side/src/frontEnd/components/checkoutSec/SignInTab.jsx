import React , {useState} from 'react'
import styled from 'styled-components'
import {TextField , Button , Typography , Grid} from '@mui/material'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import StarIcon from '@mui/icons-material/Star';
import {CheckUser} from '../../../server_api/Api'
import {LoginCommonUser} from '../../../actions/userActions'
import {useDispatch , useSelector} from 'react-redux'
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {addNewUser} from '../../../actions/userActions'



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 500,
  bgcolor: 'background.paper',
  border: '0px solid transparent',
  boxShadow: 24,

};

const MyBox = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    max-width: 700px;
    margin-left: 50px;
`;

const LeftSec = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`;


const MyText = styled.span`
    font-size: 12px;
    color: #95a5a6;
    margin-top: 30px;
`;

const AllOffers = styled.div `
    display: flex;
    margin-top: 20px;
    flex-direction: column;
    width: 300px;
`;

const OfferHead = styled.h6 `
    font-size: 17px;
    color: #2d3436;
    margin-bottom: 10px;
`;

const MyOffer = styled.div `
    display: flex;
    margin-top: 10px;
`;

const OfferText = styled.span `
    font-size: 11px;
    margin-left: 10px;
    text-transform: capitalize;
    color: #353b48;
    font-weight: 600
`;



const SignInTab = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');

     const [ newEmail , setNewEmail ] = useState('');
     const [ newPassword , setNewPassword ] = useState('');

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.userReducer)

    const [ showSignUp , setShowSignUp ] = useState(false);
    const [ EmailMsg , setShowShowMsg ] = useState( user ?  false : true );
    const [ showPass , setShowPass ] = useState(false);


    // handlig data
    const handleClick = async () => {
        const {data} = await CheckUser(email);
        if(data.message === 'User Not Found'){
            setShowShowMsg(false)
            setShowSignUp(true)
        }else{
            setShowShowMsg(false)
            setShowPass(true)
        }
    }

    const handleSubmit = async () => {
        dispatch(LoginCommonUser({email,password}))
        if(user){
            setShowSignUp(false)
            setShowShowMsg(false)
            setShowPass(false)
        }
    }


    return (
        <>
            <MyBox>
                <LeftSec>
                    {
                        EmailMsg ? (
                            <>
                                <TextField id="standard-basic" style={{minWidth: '250px'}} label="Email Please ..." variant="standard" onChange={(e) => setEmail(e.target.value)} />
                                <MyText>By Continuing you agree our <strong style={{color: '#222f3e'}} > Terms of Use </strong> and <strong style={{color: '#222f3e'}} > Conditions  use of Policy. </strong> </MyText>
                                <Button variant="contained" style={{backgroundColor: '#ff9f1a' , color: '#FFFFFF' , marginTop: '20px' , fontWeight: 600 , fontSize: '15px'}} onClick={handleClick} >continue</Button>
                            </>
                        ) : (
                            <Typography variant="h6" style={{color: '#009432'}} >User Already Signed In</Typography>
                        )
                    }
                    {
                        showPass && (
                            <>
                                <TextField id="standard-basic" style={{minWidth: '250px'}} label="Email Password ..." variant="standard" onChange={(e) => setPassword(e.target.value)} />
                                <Button variant="contained" style={{backgroundColor: '#ff9f1a' , color: '#FFFFFF' , marginTop: '20px' , fontWeight: 600 , fontSize: '15px'}} onClick={handleSubmit} >Sign In</Button>
                            </>
                        )
                    }
                    {
                        showSignUp && (
                            <>
                            <Button style={{backgroundColor: '#ED4C67' , color: '#FFFFFF' , marginTop: '20px' , fontWeight: 600 , fontSize: '15px'}} onClick={handleOpen}>Sign Up Now</Button>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                <Box sx={style}>
                                    <Grid container>
                                        <Grid  item xs = {
                                        5
                                        }
                                        >

                                        </Grid>
                                        <Grid item xs={7}>
                                            <Box  style = {
                                            {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                minHeight: '500px',
                                                background: '#FAFAFA',
                                                padding: '30px'
                                            }
                                            } >
                                                <TextField id="standard-basic" style={{marginBottom: '20px'}} label="Enter Email"  onChange={(e) => setNewEmail(e.target.value)} variant="standard" />
                                                <TextField id="standard-basic" style={{marginBottom: '20px'}} label="Enter Username" variant="standard" />
                                                <TextField id="standard-basic" style={{marginBottom: '20px'}} label="Enter Password" onChange={(e) => setNewPassword(e.target.value)}  type="password" variant="standard" />
                                                <TextField id="standard-basic" style={{marginBottom: '20px'}} label="Confirm Password" type="password" variant="standard" />
                                                <Button variant="contained" style={{backgroundColor: '#ff6348' , fontWeight: 600}} onClick={() => dispatch(addNewUser({newEmail , newPassword}))} >Sign Up Now</Button>
                                                <Button variant="contained" style={{backgroundColor: 'white' , color: '#5352ed' , marginTop: '10px' , fontWeight : 600}} onClick={() => setShowShowMsg(true) } >Existing User? Sign In Now</Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                </Fade>
                            </Modal>
                            </>
                        )
                    }
                    {/* {
                        user && (
                            
                        )
                    } */}
                </LeftSec>
                <LeftSec>
                    <AllOffers>
                            <OfferHead>
                                Available Offers
                            </OfferHead>
                            <MyOffer>
                                <AirportShuttleIcon style={{color: '#2874F0'}} />
                                <OfferText> Easily track orders and hassle free returns</OfferText>
                            </MyOffer>
                            <MyOffer>
                                <NotificationsActiveIcon style={{color: '#2874F0'}} />
                                <OfferText> 0% Instant Discount on RBL Bank Credit and Debit Cards</OfferText>
                            </MyOffer>
                            <MyOffer>
                                <StarIcon style={{color: '#2874F0'}} />
                                <OfferText>  Get extra 11% off (price inclusive of discount)</OfferText>
                            </MyOffer>
                        </AllOffers>

                </LeftSec>
            </MyBox>
        </>
    )
}

export default SignInTab
