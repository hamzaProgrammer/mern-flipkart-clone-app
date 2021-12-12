import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Box ,Button , Grid ,TextField } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import {makeStyles} from '@mui/styles'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import myStyled from 'styled-components'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ReorderIcon from '@mui/icons-material/Reorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedeemIcon from '@mui/icons-material/Redeem';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import StorefrontIcon from '@mui/icons-material/Storefront';


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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'white',
  color: '#576574',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minWidth: '550px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    minWidth: '500px',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const TextOne = myStyled.h6`
    color: white;
    font-size: 25px;
    margin-bottom: 70px;
    font-weight: 700
`;

const TextTwo = myStyled.h6 `
    color: #d2dae2;
    font-size: 20px;
    font-weight: 500
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "&  .MuiOutlinedInput-notchedOutline": {
      border: "1px solid transparent",
      borderRadius: "5px 5px 0 0"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "0px solid transparent",
      borderRadius: "5px 5px 0 0"
    },
    "&.Mui-focused  .MuiOutlinedInput-notchedOutline": {
      border: "0px solid transparent",
      borderRadius: "5px 5px 0 0"
    },
    '& .MuiSvgIcon-root': {
      display: 'none',
      maxWidth: '1px'
    },
  },
  myWidth: {
    width: '120px',
  }
}))

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <ShoppingCartIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // for modal for signin Up
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // for signin in
  const [openIn, setOpenIn] = React.useState(false);
  const handleOpenIn = () => setOpenIn(true);
  const handleCloseIn = () => setOpenIn(false);

  return (
    <>
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" style={{maxHeight: '20px'}} >
        <Toolbar style={{backgroundColor: '#2874F0' , maxHeight: '30px'}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' , marginLeft: '160px' } }}
          >
            <img src="https://www.bigcommerce.com/blog/wp-content/uploads/2020/01/flipkart.jpg" width="80px" height="50px" alt="Logo" />
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for products , brands and more ..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' , marginLeft: '70px' , display: 'flex' , justifyContent:'space-between'} }}>

            <FormControl sx={{ m: 1, minWidth: 120  }}>
              <Select
                className={`${classes.root} ${classes.myWidth}`}
                value={age}
                component={Button}
                onChange={handleChange}
                style={{backgroundColor:'#FFFFFF' , color : '#2874F0' , height: '35px'  , fontWeight: 600 , textTransform:'none' , marginTop: '-2px' }}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="" style={{cursor: 'none'}} >
                  Login
                </MenuItem>
                <MenuItem value={10} style={{fontWeight: 600 , width: '260px' , fontSize: '13px'}} >New Customer?  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <Button variant="text" style={{fontWeight: 600 , textTransform: 'none'}} >Sign Up</Button> </MenuItem>
                <MenuItem value={20} style={{borderTop: '1px solid #d2dae2' }} >
                   <Button variant="text" style={{fontWeight: 400 , fontSize: '14px' , color: '#212121' , textTransform: 'none' }} startIcon={<AccountCircleIcon style={{color: '#212121'}} />}>
                        My Profile
                  </Button>
                </MenuItem>
                <MenuItem value={20} style={{borderTop: '1px solid #d2dae2' }} >
                   <Button variant="text" style={{fontWeight: 400 , fontSize: '14px' , color: '#212121' , textTransform: 'none' }} startIcon={<LocalOfferIcon style={{color: '#212121'}} />}>
                        Flikart plus Zone
                  </Button>
                </MenuItem>
                <MenuItem value={20} style={{borderTop: '1px solid #d2dae2' }} >
                   <Button variant="text" style={{fontWeight: 400 , fontSize: '14px' , color: '#212121' , textTransform: 'none' }} startIcon={<ReorderIcon style={{color: '#212121'}} />}>
                        Orders
                  </Button>
                </MenuItem>
                <MenuItem value={20} style={{borderTop: '1px solid #d2dae2' }} >
                   <Button variant="text" style={{fontWeight: 400 , fontSize: '14px' , color: '#212121' , textTransform: 'none' }} startIcon={<AccountCircleIcon style={{color: '#212121'}} />}>
                        WishList
                  </Button>
                </MenuItem>
                <MenuItem value={20} style={{borderTop: '1px solid #d2dae2' }} >
                   <Button variant="text" style={{fontWeight: 400 , fontSize: '14px' , color: '#212121' , textTransform: 'none' }} startIcon={<FavoriteBorderIcon style={{color: '#212121'}} />}>
                        Rewards
                  </Button>
                </MenuItem>
                <MenuItem value={20} style={{borderTop: '1px solid #d2dae2' }} >
                   <Button variant="text" style={{fontWeight: 400 , fontSize: '14px' , color: '#212121' , textTransform: 'none' }} startIcon={<RedeemIcon style={{color: '#212121'}} />}>
                        Gifts
                  </Button>
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120  }}  >
              <Select
                className={`${classes.root} ${classes.myWidth}`}
                value={age}
                component={Button}
                onChange={handleChange}
                style={{backgroundColor:'#2874F0' , color : '#FFFFFF' , height: '35px'  , fontWeight: 600 , textTransform:'none' , marginTop: '-2px' }}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value="" style={{cursor: 'none'}} >
                  More
                </MenuItem>
                <MenuItem value={20} style={{borderTop: '1px solid #d2dae2' }} >
                   <Button variant="text" style={{fontWeight: 400 , fontSize: '14px' , color: '#212121' , textTransform: 'none' }} startIcon={<NotificationsNoneIcon style={{color: '#212121'}} />}>
                        Notification Prefrences
                  </Button>
                </MenuItem>
                <MenuItem value={20} style={{borderTop: '1px solid #d2dae2' }} >
                   <Button variant="text" style={{fontWeight: 400 , fontSize: '14px' , color: '#212121' , textTransform: 'none' }} startIcon={<BusinessCenterIcon style={{color: '#212121'}} />}>
                        Sell on Flipkart
                  </Button>
                </MenuItem>
                <MenuItem value={20} style={{borderTop: '1px solid #d2dae2' }} >
                   <Button variant="text" style={{fontWeight: 400 , fontSize: '14px' , color: '#212121' , textTransform: 'none' }} startIcon={<LiveHelpIcon style={{color: '#212121'}} />}>
                        24 * 7 Customer Care
                  </Button>
                </MenuItem>
                <MenuItem value={20} style={{borderTop: '1px solid #d2dae2' }} >
                   <Button variant="text" style={{fontWeight: 400 , fontSize: '14px' , color: '#212121' , textTransform: 'none' }} startIcon={<StorefrontIcon style={{color: '#212121'}} />}>
                        Advertise
                  </Button>
                </MenuItem>
                <MenuItem value={20} style={{borderTop: '1px solid #d2dae2' }} >
                   <Button variant="text" style={{fontWeight: 400 , fontSize: '14px' , color: '#212121' , textTransform: 'none' }} startIcon={<CloudDownloadIcon style={{color: '#212121'}} />}>
                        Download App
                  </Button>
                </MenuItem>

              </Select>
            </FormControl>

            <LoadingButton
              color="secondary"
              loadingPosition="start"
              style={{backgroundColor : '#2874F0' , color : '#fff' , height: '35px' , marginTop: '7px' , textTransform:'none' , fontSize : '16px' , fontWeight: 600 , marginLeft: '-5px'}}
              startIcon={<ShoppingCartIcon />}
              variant="text"
            >
              Cart
            </LoadingButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>

      {/* Modal for signin Up */}
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
                        <Box  style = {
                          {
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: '500px',
                            background: '#2874F0',
                            padding: '30px'
                          }
                        } >
                            <TextOne  > Looks like you 're new here!</TextOne>
                            <TextTwo>Sign up with your mobile number to get started</TextTwo>
                        </Box>
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
                            <TextField id="standard-basic" style={{marginBottom: '20px'}} label="Enter Email" variant="standard" />
                            <TextField id="standard-basic" style={{marginBottom: '20px'}} label="Enter Username" variant="standard" />
                            <TextField id="standard-basic" style={{marginBottom: '20px'}} label="Enter Password" type="password" variant="standard" />
                            <TextField id="standard-basic" style={{marginBottom: '20px'}} label="Confirm Password" type="password" variant="standard" />
                            <Button variant="contained" style={{backgroundColor: '#ff6348' , fontWeight: 600}} >Sign Up Now</Button>
                            <Button variant="contained" style={{backgroundColor: 'white' , color: '#5352ed' , marginTop: '10px' , fontWeight : 600}} onClick={handleOpenIn} >Existing User? Sign In Now</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            </Fade>
        </Modal>
        

        {/* For signin In user */}
        <Modal
            aria-labelledby="transition-modal-title1"
            aria-describedby="transition-modal-description1"
            open={openIn}
            onClose={handleCloseIn}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={openIn}>
            <Box sx={style}>
                <Grid container>
                    <Grid  item xs = {
                      5
                    }
                     >
                        <Box  style = {
                          {
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: '500px',
                            background: '#2874F0',
                            padding: '30px'
                          }
                        } >
                            <TextOne  > Login</TextOne>
                            <TextTwo>Give access to your Orders , Wishlist and Recommendations</TextTwo>
                        </Box>
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
                            <TextField id="standard-basic" style={{marginBottom: '20px'}} label="Enter Email" variant="standard" />
                            <TextField id="standard-basic" style={{marginBottom: '20px'}} label="Enter Passwor" variant="standard" />
                            <Button variant="contained" style={{backgroundColor: '#ff6348' , fontWeight: 600}} >Sign In Now</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            </Fade>
        </Modal>
        </>
  );
}
