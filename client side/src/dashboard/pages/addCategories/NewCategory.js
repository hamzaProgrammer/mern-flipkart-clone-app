import React , { useState , useEffect } from 'react'
import {
    Box,
    Typography,
    Button,
    Grid
} from '@mui/material'
import { createCategories } from  '../../../server_api/Api'
import {makeStyles} from '@mui/styles'
import {useNavigate , useLocation} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import {useDispatch , useSelector} from 'react-redux'
import {updateSingleCategory , getSingleCategory} from '../../../actions/categoryActions'
import {getSingleOfCategories} from '../../../server_api/Api'

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop: '120px',
        padding: '20px',
        boxShadow: '2px 6px 39px -15px #000000',
        marginLeft: '270px',
        paddingLeft : '30px',
        width: '300px',
        marginBottom: '25px'
    },
    head : {
        fontSize : '22px',
        fontWeight: 600,
        marginBottom: '55px',
        color: '#3c40c6',
    },
    prodComps : {
        display : 'flex',
        flexDirection: 'row',
        marginTop: '30px'
    },
    inputs : {
        width: '320px',
        marginBottom : '20px'
    },
    uploadBtn: {
        color: '#fff',
        fontSize: '16px',
        width: '160px',
        marginLeft: '400px',
        backgroundColor: '#130f40',
        fontWeight: 700,
        marginTop: '30px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#30336b'
        }
    },
    uploadBtn1: {
        color: '#fff',
        fontSize: '16px',
        width: '120px',
        marginLeft: '60px',
        backgroundColor: '#130f40',
        fontWeight: 700,
        marginTop: '30px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#30336b'
        }
    },
    fileInput: {
    width: '200px',
    marginLeft: '10px',
    marginBottom: '50px',
    },
}))



const NewProduct = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {currntCategory} = useSelector(state => state.cateReducer)
    const navigate = useNavigate();
    const [ name , setname ] = useState('')
    const [ parentId , setParentId ] = useState(currntCategory[0]?.parentId || null)
    const [ children , setChildren ] = useState(null)


    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');

    // for Sending Category Data to server
    const handleSubmit = async () => {
        if(!name){
                alert("!!!  Please Fill  required Field !!!")
        }else{
            try {
                const {data} = await createCategories({name,parentId,children})
                console.log("Data : ",data)
                setname('')
            }catch (error) {
                console.log("Error is : ", error)
            }
        }
    }

    // for Sending Category Data to server
    const handleUpdateSubmit = async () => {
        if(!name){
                alert("!!!  Please Fill  required Field !!!")
        }else{
            try {
                dispatch(updateSingleCategory({name,parentId,children},id))
                setname('')
                navigate('/admin/allCategories')
            }catch (error) {
                console.log("Error is : ", error)
            }
        }
    }

    // getting CAtegory Details
    useEffect(() => {
        if(id){
            dispatch(getSingleCategory(id))
            setname(currntCategory[0]?.name)
        }
    }, [dispatch, id])


    return (
        <>{console.log(name)}
            <Box className={classes.root} >
                <Typography className={classes.head}>Add New Category</Typography>
                 <Grid container direction="row" className={classes.prodComps} >
                    <Grid item xs={4}>
                        <Box className={classes.fileInput}>
                            <Typography variant="body1" style={{fontWeight: 700 , marginBottom:'10px' , paddingLeft: '12px'}}>Category Name</Typography>
                            <TextField
                                id="standard-password-input"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                style={{width: '220px', marginTop: '-10px'}}
                                autoComplete="current-password"
                                variant="standard"
                            />
                        </Box>
                    </Grid>
                </Grid>
                    {
                        id ? (
                            <Button variant="contained" type="file" className={classes.uploadBtn1} onClick={handleUpdateSubmit}  style={{width: '150px' , marginLeft: '40px'}} >Update Now</Button>
                        ) : (
                            <Button variant="contained" type="file" className={classes.uploadBtn1} onClick={handleSubmit} >Add NOW</Button>
                        )
                    }
            </Box>
        </>
    )
}

export default NewProduct