import React , { useState , useEffect } from 'react'
import {
    Box,
    Typography,
    Button,
    Grid
} from '@mui/material'
import {makeStyles} from '@mui/styles'
import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useSelector , useDispatch} from 'react-redux'
import {addNewSubCategory, AddSubMyCategory} from '../../../actions/categoryActions'
import {useLocation} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    root : {
        marginTop: '120px',
        padding: '20px',
        boxShadow: '2px 6px 39px -15px #000000',
        marginLeft: '270px',
        paddingLeft : '50px',
        width: '350px',
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
    const {categories} = useSelector(state => state.cateReducer)
    const dispatch = useDispatch();
    const classes = useStyles();
    const navigate = useNavigate();
    const [ name , setname ] = useState('')
    const [ parentId , setParentId ] = useState(null)
    const location = useLocation();

    // for Sending Movie Data to server
    const handleSubmit = async () => {
        if(!name && !parentId){
                alert("!!!  Please Fill  required Field !!!")
        }else{
            try {
                dispatch(AddSubMyCategory({name,parentId},parentId))
                setname('')
                setParentId('')
            }catch (error) {
                console.log("Error is : ", error)
            }
        }
    }

    useEffect(() => {
        dispatch(addNewSubCategory(dispatch))
    }, [location,dispatch])
    return (
        <>
            <Box className={classes.root} >
                <Typography className={classes.head}>Add New Sub Category</Typography>
                 <Grid container direction="row" className={classes.prodComps} >
                    <Grid item xs={4}>
                        <Box className={classes.fileInput}>
                            <TextField
                                id="standard-password-input"
                                label="Sub-Category"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                style={{width: '220px', marginTop: '-10px', marginBottom: '20px'}}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <Typography variant="body1" style={{fontWeight: 700 , marginBottom:'10px' , paddingLeft: '12px'}}>Select Parent Category</Typography>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={parentId}
                                    label="Age"
                                    onChange={(e) => setParentId(e.target.value)}
                                >
                                {
                                    categories ? (
                                        categories?.map((item) => (
                                            <MenuItem value={item?._id}>{item?.name}</MenuItem>
                                        ))
                                    ) : (
                                        <MenuItem >No Categories</MenuItem>
                                    )
                                }
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
                    <Button variant="contained" type="file" className={classes.uploadBtn1} onClick={handleSubmit} >ADD NOW</Button>
            </Box>
        </>
    )
}

export default NewProduct