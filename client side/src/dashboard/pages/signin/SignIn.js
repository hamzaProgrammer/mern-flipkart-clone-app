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
import { useDispatch , useSelector } from 'react-redux'
import {LoginUser} from '../../../actions/userActions'

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop: '100px',
        padding: '20px',
        boxShadow: '2px 6px 39px -15px #000000',
        marginRight: '30px',
        marginLeft: '500px',
        paddingLeft : '30px',
        maxWidth: '380px',
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
        marginTop : '20px'
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
    font-size : 45px;
    color: #3498db;
    font-style: italic;
    margin-left: 80px;

`;


const SignIn = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isFetching , adminError  , adminSuccess } = useSelector(state => state.userReducer)

    const [ userInfo , setUserInfo ]= useState({
        email: '',
        password: '',
    });

    const handleInfo = async () => {
        await dispatch(LoginUser(userInfo, dispatch))
        navigate('/admin')
    }

    return (
        <>
            <Box className={classes.root} >
                <Header className={classes.head}>Flipkart</Header>
                {
                    isFetching ? (
                            <Typography style={{fontSize: '12px' , fontWeight: 600 , color:'#6ab04c' , marginLeft: '70px' }}>Please Wait ... </Typography>
                    ) : (
                        adminError ? (
                            <Typography style={{fontSize: '12px' , fontWeight: 600 , color:'red' , marginLeft: '70px' }}>Oops! Something went wrong </Typography>
                        ) : (
                            adminSuccess && (
                                <Typography style={{fontSize: '12px' , fontWeight: 600 , color:'#6ab04c' , marginLeft: '70px' }}>User Signed In SuccessFully !!!</Typography>
                            )
                        )
                    )
                }
                <Box className={classes.prodComps} >
                    <TextField
                        label="Email"
                        variant="outlined"
                        className={classes.inputs}
                        style={{marginBottom: '30px'}}
                        value={userInfo?.email}
                        name="email"
                        onChange={(e) => setUserInfo({...userInfo ,[e.target.name]:e.target.value})}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        className={classes.inputs}
                        value={userInfo?.password}
                        style={{marginBottom: '30px'}}
                        name="password"
                        type="password"
                        onChange={(e) => setUserInfo({...userInfo ,[e.target.name]:e.target.value})}
                    />

                    <Button variant="contained" type="file" style={{backgroundColor : '#d35400' , fontWeight : 700 , marginLeft : '100px' }} className={classes.uploadBtn} onClick={handleInfo} > Sign In</Button>
                </Box>

            </Box>
        </>
    )
}

export default SignIn