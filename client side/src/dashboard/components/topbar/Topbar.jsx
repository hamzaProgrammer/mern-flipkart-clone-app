import React , {useState  } from 'react';
import {makeStyles} from '@mui/styles'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {useNavigate} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '15px',
  },
  title: {
    width:"200px",
    height : "30px"
  },
  search: {
    position: 'relative',
    borderRadius: '2px',
    backgroundColor: '#0b0b0b',
    '&:hover': {
      backgroundColor: '#0b0b0b',
    },
    marginRight: '30px',
    marginLeft: 0,
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: 'auto',
    // },
  },
  searchIcon: {
    padding: '15px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    marginLeft:  '100px',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${10}`,
    //transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // },
  },
  sectionDesktop: {
    display: 'none',
    // [theme.breakpoints.up('md')]: {
    //   display: 'flex',
    // },
  },
  sectionMobile: {
    display: 'flex',
    // [theme.breakpoints.up('md')]: {
    //   display: 'none',
    // },
  },
  navbarBtn : {
      backgroundColor: "#0b0b0b",
      color: '#fff',
      textTransform: 'capitalize',
      margin: '5px 5px',
      '&:hover': {
          backgroundColor: "#d63031"
      }
  },
  profilePic : {
      width: '40px',
      height: '45px',
      borderRadius: '50%'
  },
  changeNav:{
    backgroundColor: "#0b0b0b",
    '& $threeIcons': {
        color: '#fff'
    }
  },
  navColor :{
    background: 'transparent',
    boxShadow: 'none',
  },
  btnsOrig : {
    color: '#fff',
    textTransform: 'capitalize',
    '&:hover':{
      background: 'red',
    }
  },
  threeIcons: {
      color: 'grey',
      fontSize: '27px'
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const RegisteredUser = JSON.parse(localStorage.getItem('Admin'));


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
            <ExitToAppIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
            <ExitToAppIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
            <ExitToAppIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
            <ExitToAppIcon />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );


  const [ isScrolled , setisScrolled ] = useState(false)

  window.onscroll = () => {
    if(window.pageYOffset === 0){
        setisScrolled(false)
    }else{
      setisScrolled(true)
    }
  }

   const logOut = () => {
     localStorage.removeItem('Admin');
     navigate('/')
   }
  return (
    <div className={classes.grow}  >
      <AppBar position="fixed" className={ isScrolled ? classes.changeNav : classes.navColor}>
        <Toolbar className={isScrolled ?  classes.changeNav : classes.navColor }>


          <img className={classes.title}   alt="Logo" src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-com-logo-internet-ltd-state-of-kerala-10.png"   />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            <img
                className={classes.title}
                style={{width:"50px" , height: '40px' , borderRadius: '50%' }}
                alt="Admin Cover"
                src={RegisteredUser?.myResult?.adminPhoto || 'data:image/jpeg;base64,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'} />
             <IconButton aria-label="show 17 new notifications" color="inherit" onClick={logOut} style={{marginTop: '-10px'}} >
                <ExitToAppIcon  className={classes.threeIcons} style={{marginTop: '-20px'}} />
                <p style={{color:'crimson', marginTop: '-20px' }} >Logout</p>
            </IconButton>

          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
