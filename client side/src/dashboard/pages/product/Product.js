import React, { useState , useEffect } from 'react'
import {
    Box,
    Typography,
    Button,
    Grid,
    TextField,
    TextareaAutosize
} from '@mui/material'
import { useLocation } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import { updateProduct } from '../../../server_api/Api'
import {storage}  from '../../Firebase'
import {makeStyles} from '@mui/styles'
import {useDispatch , useSelector} from 'react-redux'
import {getSingProd} from '../../../actions/prodActions'
import {useParams} from 'react-router-dom'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '50px',
        marginLeft: '-30px',
        marginRight: '30px',
        marginBottom: '15px',
    },
    head : {
        fontSize : '30px',
        fontWeight: 700,
        color: '#d35400',
        marginLeft: '300px',
    },
    createBtn : {
        fontSize: '18px',
        backgroundColor: '#30336b',
        textTransform : 'none',
        color: '#fff',
        fontWeight: 600
    },
    prod: {
        marginTop: '20px',
        padding : '20px',
        paddingTop: '-30px',
        paddingBottom: '-30px',
        boxShadow: '2px 6px 39px -15px #000000',
    },
    prodImStock:{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
    },
    prodName : {
        fontSize : '18px',
        fontWeight: 600,
        marginTop: '10px',
        marginLeft: '10px'
    },
    prodDetails : {
        marginTop: '0px',
    },
    prodDetailLeft : {
        display : 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        marginLeft: '-15px',
        paddingTop: '8px',
        fontSize: '20px',
        paddingLeft: '15px'
    },
    prodDetailLeftHead : {
        color: 'black',
        fontSize: '15px',
        marginBottom : '5px',
    },
    prodDetailrightHead : {
        color: 'grey',
        fontSize: '15px',
        marginBottom : '5px',
    },
    editProdSec : {
        marginTop: '25px',
        padding: '20px',
        marginBottom : '25px',
        boxShadow: '2px 6px 39px -15px #000000',
    },
    button: {
            display: 'block',
            marginTop: '20px',
    },
    formControl: {
        margin: '20px',
        minWidth: 120,
    },
    uploadedImg : {
        width:'100px',
        height: '100px',
        borderRadius: '10px',
    },
    uploadIcon : {
        fontSize : '35px',
        marginLeft: '10px',
        color: '#4834d4',
    },
    uploadBtn :{
        color: '#fff',
        fontSize: '17px',
        width: '150px',
        marginTop: '30px',
        marginLeft: '400px',
        backgroundColor: '#130f40',
        fontWeight: 600,
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#30336b'
        }
    },
    inputsDet :{
        marginBottom : '15px'
    },
}))
const Produt = () => {
    const classes = useStyles()

    const dispatch = useDispatch();
    const {singleProduct} = useSelector(state => state.prodReducer)
    const {categories} = useSelector(state => state.cateReducer)

    const {id} = useParams()
    const [currntData, setCurrntData] = useState(singleProduct[0])

    const myStatus = ['active' , 'InActive'];
    const [ myPics , setPics ] = useState(currntData?.productPictures)

    // for getting sent movie details
    const location = useLocation()
    const navigate = useNavigate();

    const [ error , setError ] = useState('')
    const [progress, setProgress] = useState(100)


    // for sendig data fro updating
    const handleSendData = async () => {
        try {
            const { data } = await updateProduct(currntData , currntData?._id)
            if(data?.message !== ''){
                setError(data?.message)
                alert(data?.error)
            }else{
                setError('')
                alert("Movie Details Updated SuccesssFully")
                navigate('/admin/products/allProduct')
            }
            dispatch(getSingProd(id, dispatch))
        }catch (error) {
            console.log("Error is in Product.js : ", error)
        }
    }

    // for update handling pics
    const handlePictures = async (gotUrl , ind) => {
        let newArr = [...myPics];
        newArr[ind] = gotUrl;

        await setPics(newArr);
        await setCurrntData({...currntData , productPictures : newArr });
    }

    // deleting pics
    const delPics = async (url) => {
        const newArr = await myPics.filter(item => item !== url)
        await setPics(newArr)
        await setCurrntData({...currntData , productPictures : newArr });
    }

    // for uploading Profile Pic to Firebase
    const uploadImage = (postedImg , index) => {

        const fileName = new Date().getTime() + postedImg.name
        const uploadedTask = storage.ref(`/FlipKartApp/ProductImages/${fileName}`).put(postedImg)

        uploadedTask.on("state_changed",
            (snapshot) => {
                const progress1 = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(progress1)
                console.log(" file is " + progress1 + "% done")
            },
            (err) => {
                console.log(err)
            },
            () => {
                uploadedTask.snapshot.ref.getDownloadURL().then((url) => {
                    handlePictures(url , index)
                })
            }
        )
    }

    // getting product
    useEffect(() => {
        dispatch(getSingProd(id , dispatch))
    },[location ,dispatch , id])


    // for changing data
    const handleChange = (event) => {
        setCurrntData({...currntData , [event.target.name] : event.target.value });
    };

    return (
        <>
            <Box className={classes.root}>
                <Typography style={{fontSize: '17px' , fontWeight: 600 , color:'red', marginLeft: '350px' }}>{error}</Typography>
                    <Grid container style={{marginTop: '20px' ,}}>
                        <Grid item xs={12} className={classes.prod} >
                        <Typography className={classes.head}>Product Details</Typography>

                            <Grid container className={classes.prodDetails} style={{marginTop: '40px'}} >
                                <Grid item xs={6} style={{paddingLeft: '30px'}}>
                                    <Box className={classes.prodDetailLeft}>
                                        <Box style={{display: 'flex' , flexDirection: 'column'}}>
                                            <Typography className={classes.prodDetailLeftHead} style={{fontSize: '18px', fontWeight: 600}}>Product ID:</Typography>
                                            <Typography  className={classes.prodDetailrightHead} style={{fontSize: '17px', fontWeight: 500 , color: '#2c3e50' , maxWidth: '300px'}} >{currntData?._id}</Typography>
                                        </Box>
                                        <Box style={{display: 'flex' , flexDirection: 'column'}}>
                                            <Typography className={classes.prodDetailLeftHead} style={{fontSize: '18px', fontWeight: 600, marginTop: '20px'}}>Product Price:</Typography>
                                            <TextField variant="standard" className={classes.prodDetailrightHead} style={{fontSize: '17px', fontWeight: 500 , color: '#2c3e50' , maxWidth: '300px'}} value={currntData?.price} name="price"  onChange={(e) => handleChange(e)} />
                                        </Box>
                                        <Box style={{display: 'flex' , flexDirection: 'column'}}>
                                            <Typography className={classes.prodDetailLeftHead} style={{fontSize: '18px', fontWeight: 600, marginTop: '20px'}}>Product Category:</Typography>
                                             <FormControl style={{width: '300px'}}>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={currntData?.category}
                                                    label="Age"
                                                    name="category"
                                                    onChange={handleChange}
                                                >
                                                    {
                                                        categories?.map((item) => (
                                                            item?._id === currntData?.category ? (
                                                                <MenuItem value={item?._id} name="category" selected>{item?.name}</MenuItem>
                                                            ) : (
                                                                <MenuItem value={item?._id} name="category">{item?.name}</MenuItem>
                                                            )
                                                        ))
                                                    }
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                        <Box style={{display: 'flex' , flexDirection: 'column'}}>
                                            <Typography className={classes.prodDetailLeftHead} style={{fontSize: '18px', fontWeight: 600}}>Product Name:</Typography>
                                            <TextField variant="standard" className={classes.prodDetailrightHead} style={{fontSize: '17px', fontWeight: 500 , color: '#2c3e50' , maxWidth: '300px'}} value={currntData?.name} name="name"  onChange={(e) => handleChange(e)} />
                                        </Box>
                                        <Box style={{display: 'flex' , flexDirection: 'column'}}>
                                            <Typography className={classes.prodDetailLeftHead} style={{fontSize: '18px', fontWeight: 600,  marginTop: '20px'}}>Product Quantity:</Typography>
                                            <TextField variant="standard" className={classes.prodDetailrightHead} style={{fontSize: '17px', fontWeight: 500 , color: '#2c3e50' , maxWidth: '300px'}} value={currntData?.quantity} name="quantity"  onChange={(e) => handleChange(e)} />
                                        </Box>
                                        <Box style={{display: 'flex' , flexDirection: 'column'}}>
                                            <Typography className={classes.prodDetailLeftHead} style={{fontSize: '18px', fontWeight: 600, marginTop: '20px'}}>Product Status:</Typography>
                                            <FormControl style={{width: '300px'}}>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={currntData?.status}
                                                    label="stus"
                                                    name="status"
                                                    onChange={handleChange}
                                                >
                                                    {
                                                        myStatus?.map((item) => (
                                                            currntData?.status === item ? (
                                                                    <MenuItem value={item} name="status" selected>{currntData?.status}</MenuItem>
                                                            ) : (
                                                                    <MenuItem value={item} name="status"  >{item}</MenuItem>
                                                            )
                                                        ))
                                                    }
                                                </Select>
                                            </FormControl>
                                        </Box>
                                </Grid>
                            </Grid>
                            <Box style={{display: 'flex' , flexDirection: 'column' , maxWidth: '500px' , marginLeft: '200px'}}>
                                <Typography className={classes.prodDetailLeftHead} style={{fontSize: '18px', fontWeight: 600, marginTop: '20px'}}>Product Description:</Typography>
                                <TextareaAutosize minRows={5}  className={classes.prodDetailrightHead} style={{fontSize: '17px', fontWeight: 500 , color: '#2c3e50'}} value={currntData?.desc} name="desc"  onChange={(e) => handleChange(e)} />
                            </Box>
                            <Box style={{display: 'flex' , flexDirection: 'column' , maxWidth: '500px' , marginLeft: '200px'}}>
                                <Typography className={classes.prodDetailLeftHead} style={{fontSize: '18px', fontWeight: 600, marginTop: '20px'}}>Product Pictures:</Typography>
                                <Box style={{display: 'flex'}}>
                                {
                                    myPics?.map((item , ind) => (
                                        <Box style={{display: 'flex', flexDirection: 'column'}}>
                                            <img style={{width: '120px' , height: '120px' , marginRight: '10px'}} src={item} className={classes.prodDetailrightHead}  alt="Product Images" />
                                            <Box style={{display: 'flex' , justifyContent: 'space-around'}}>
                                                <label style={{color: 'green' , cursor: 'pointer'}} for={item?._id} >
                                                    <ChangeCircleIcon/>
                                                    <input type="file" id={item?._id} style={{display: 'none'}}  onChange={(e) => uploadImage(e.target.files[0] , ind)}  />
                                                </label>
                                                <DeleteForeverIcon style={{color: 'red' , cursor : 'pointer'}} onClick={() => delPics(item)} />
                                            </Box>
                                        </Box>
                                    ))
                                }
                                </Box>
                            </Box>
                            {
                                progress === 100 ? (
                                    <Button variant="contained" style={{marginLeft: '400px' , marginTop: '30px', fontWeight: 600 , backgroundColor : '#192a56'}} onClick={handleSendData} >Update Now</Button>
                                ) : (
                                    <Typography  className={classes.prodDetailrightHead} style={{ marginLeft: '400px', marginTop: '30px' , fontSize: '20px', fontWeight: 600 , color: '#27ae60'}} >Please Wait... </Typography>
                                )
                            }
                        </Grid>
                    </Grid>
               </Box>
        </>
    )
}

export default Produt
