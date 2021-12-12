import React , {useState} from 'react'
import {
    Box,
    Typography,
    TextField,
    Button
} from '@mui/material'
import {useNavigate} from 'react-router-dom';
import {makeStyles} from '@mui/styles'
import  styled  from  'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'
import {addNewUser} from '../../../actions/userActions'

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop: '70px',
        padding: '20px',
        boxShadow: '2px 6px 39px -15px #000000',
        marginRight: '30px',
        marginLeft: '350px',
        paddingLeft : '30px',
        maxWidth: '700px',
    },
    head : {
        fontSize : '22px',
        fontWeight: 600,
    },
    prodComps : {
        display : 'flex',
        flexDirection: 'column',
        marginTop: '30px'
    },
    inputs : {
        width: '300px',
        marginTop : '20px',
        marginLeft: '20px'
    },
    uploadBtn: {
        color: '#fff',
        fontSize: '14px',
        width: '100px',
        marginLeft: '100px',
        backgroundColor: '#130f40',
        fontWeight: 600,
        marginTop: '30px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#30336b'
        }
    }
}))

const Header = styled.h6`
    font-size : 50px;
    color: #3498db;
    font-style: italic;
    margin-left: 220px;

`;

const AlterText = styled.p`
    font-size : 18px;
    color: #2C3A47;
    font-weight: 600;
    margin-left : 165px;
    margin-top: 20px;
`;

const initValue = {
    firstname : '',
    lastname : '',
    username : '',
    email : '',
    password : '',
    role : 'user',
    contactNo : '',
    profPic : '',
}

const SignIn = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [ userData , setUserData ] = useState(initValue)
    const dispatch = useDispatch();
    const { isFetching , error , success } = useSelector(state => state.userReducer)


    // sending data to backend
    const handleInfo = async () => {
        dispatch(addNewUser(userData , dispatch))
        //navigate('/signin')
    }

    return (
        <>
            <Box className={classes.root} >
                <Header className={classes.head}>Flipkart</Header>
                {
                    isFetching ? (
                            <Typography style={{fontSize: '12px' , fontWeight: 600 , color:'#6ab04c' , marginLeft: '70px' }}>Please Wait ... </Typography>
                    ) : (
                        error ? (
                            <Typography style={{fontSize: '12px' , fontWeight: 600 , color:'red' , marginLeft: '70px' }}>Oops! Something went wrong </Typography>
                        ) : (
                            <Typography style={{fontSize: '12px' , fontWeight: 600 , color:'#6ab04c' , marginLeft: '70px' }}>User Signed In SuccessFully !!!</Typography>
                        )
                    )
                }
                <Box className={classes.prodComps} >
                    <Box style={{display: 'flex'}}>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            className={classes.inputs}
                            style={{marginBottom: '30px'}}
                            value={userData?.firstname}
                            name="firstname"
                            onChange={(e) => setUserData({...userData ,[e.target.name]:e.target.value})}
                        />
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            className={classes.inputs}
                            style={{marginBottom: '30px', marginLeft : '30px'}}
                            name="lastname"
                            type="text"
                            value={userData?.lastname}
                            onChange={(e) => setUserData({...userData ,[e.target.name]:e.target.value})}
                        />
                    </Box>
                    <Box style={{display: 'flex'}}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            className={classes.inputs}
                            style={{marginBottom: '30px'}}
                            value={userData?.username}
                            name="username"
                            onChange={(e) => setUserData({...userData ,[e.target.name]:e.target.value})}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            className={classes.inputs}
                            style={{marginBottom: '30px' , marginLeft : '30px'}}
                            value={userData?.email}
                            name="email"
                            onChange={(e) => setUserData({...userData ,[e.target.name]:e.target.value})}
                        />
                    </Box>
                    <Box style={{display : 'flex'}}>
                        <TextField
                            label="Password"
                            variant="outlined"
                            className={classes.inputs}
                            style={{marginBottom: '30px'}}
                            value={userData?.password}
                            name="password"
                            type="password"
                            onChange={(e) => setUserData({...userData ,[e.target.name]:e.target.value})}
                        />
                        <TextField
                            label="Contact No."
                            variant="outlined"
                            className={classes.inputs}
                            style={{marginBottom: '30px' , marginLeft : '30px'}}
                            value={userData?.contactNo}
                            name="contactNo"
                            onChange={(e) => setUserData({...userData ,[e.target.name]:e.target.value})}
                        />
                    </Box>

                    <Button variant="contained" type="file" style={{backgroundColor : '#182C61' , fontWeight : 700 , marginLeft : '270px' }} className={classes.uploadBtn} onClick={handleInfo} > Sign UP</Button>
                    <Link to={'/signin'}>
                        <AlterText>Already have an Account? Sign In Now </AlterText>
                    </Link>
                </Box>

            </Box>
        </>
    )
}

export default SignIn