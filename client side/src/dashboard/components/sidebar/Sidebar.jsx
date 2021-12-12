import React from 'react'
import { Box  ,Button, Typography } from '@mui/material'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Link } from 'react-router-dom'
import {makeStyles} from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    sidebarMain: {
        maxWidth: '280px',
        height: '75vh',
        position: 'sticky',
        top: '75px',
        display : 'flex',
        marginTop: '100px',
        flexDirection: 'column',
        //overflowY: "scroll"
    },
    inner : {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '30px',
        marginBottom: '20px'
    },
    button : {
        marginLeft: '-50px',
        maxWidth: '100%',
        color: '#2d3436',
        fontWeight: 600,
        fontSize: '15px',
        borderRadius: '10px',
        '&:hover' : {
            backgroundColor : 'rgba(228,228,250)'
        },
        '&:active': {
            backgroundColor: 'rgba(228,228,250)'
        }
    },
    active: {
        backgroundColor: 'rgba(228,228,250)'
    }
}))
const Sidebar = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.sidebarMain}>
                <Box className={classes.inner}>
                    <Typography className={classes.typo1} style={{color:'#a29bfe' , fontSize: '17px' , fontWeight : 500}}>Dashboard</Typography>
                    <Button
                        component={Link}
                        to="/admin"
                        className={`${classes.button} ${classes.active}`}
                        startIcon={<LineStyleIcon style={{marginLeft: '-25px'}}  />}
                        >
                        App Home
                    </Button>
                    </Box>

                <Box className={classes.inner}>
                    <Typography className={classes.typo1} style={{color:'#fd9644' , fontSize: '17px' , fontWeight : 700}}>Categories</Typography>
                    <Button
                        className={`${classes.button}`}
                        component={Link}
                        to = "/admin/addCategory"
                        startIcon={<PermIdentityIcon style={{marginLeft: '-30px'}} />}
                        >
                           Add Parent
                    </Button>
                    <Button
                        className={classes.button}
                        component={Link}
                        to = "/admin/addSubCategory"
                        startIcon={<PlayCircleOutlineIcon />}
                        >
                        Add Sub
                    </Button>
                     <Button
                        className={classes.button}
                        component={Link}
                        to = "/admin/allCategories"
                        startIcon={<PlayCircleOutlineIcon />}
                        >
                        All Parent Categories
                    </Button>
                </Box>


                <Box className={classes.inner}>
                    <Typography className={classes.typo1} style={{color:'#fd9644' , fontSize: '17px' , fontWeight : 700}}>Brands</Typography>
                    <Button
                        className={`${classes.button}`}
                        component={Link}
                        to = "/admin/brands/addNew"
                        startIcon={<PermIdentityIcon style={{marginLeft: '-30px'}} />}
                        >
                           Add New
                    </Button>
                    <Button
                        className={classes.button}
                        component={Link}
                        to = "/admin/brands/allBrands"
                        startIcon={<PlayCircleOutlineIcon />}
                        >
                        All Brands
                    </Button>
                </Box>

                <Box className={classes.inner}>
                    <Typography className={classes.typo1} style={{color:'#a29bfe' , fontSize: '17px' , fontWeight : 500}}>Products</Typography>
                    <Button
                        className={`${classes.button}`}
                        component={Link}
                        to = "/admin/products/addProduct"
                        startIcon={<MailOutlineIcon style={{marginLeft: '-0px'}} />}
                        >
                        Add Product
                    </Button>
                    <Button
                        className={classes.button}
                        component={Link}
                        to = "/admin/products/allProduct"
                        startIcon={<DynamicFeedIcon />}
                        >
                        All Products
                    </Button>
                </Box>

                 <Box className={classes.inner}>
                    <Typography className={classes.typo1} style={{color:'#a29bfe' , fontSize: '17px' , fontWeight : 500}}>USERS</Typography>
                    <Button
                        className={`${classes.button}`}
                        component={Link}
                        to="/admin/users"
                        startIcon={<WorkOutlineIcon />}
                        >
                        All Users
                    </Button>
                </Box>

                <Box className={classes.inner}>
                    <Typography className={classes.typo1} style={{color:'#a29bfe' , fontSize: '17px' , fontWeight : 500}}>Admins</Typography>
                    <Button
                        className={`${classes.button}`}
                        component={Link}
                        to = "/admin/allAdmins"
                        startIcon={<WorkOutlineIcon />}
                        >
                        View All
                    </Button>
                    <Button
                        className={classes.button}
                        component={Link}
                        to = "/admin/newUser"
                        startIcon={<TimelineIcon />}
                        >
                        Add New
                    </Button>
                </Box>

            </Box>
        </>
    )
}

export default Sidebar
