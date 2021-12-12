import React , { useState } from 'react'
import {
    Box,
    Typography,
    Button,
    Grid
} from '@mui/material'
import {makeStyles} from '@mui/styles'
import {addNewMyBrand} from '../../../actions/BrandsActions'
import TextField from '@mui/material/TextField';
import {useDispatch } from 'react-redux'

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
    const [ name , setname ] = useState('')

    // for Sending Category Data to server
    const handleSubmit = async () => {
        if(!name){
                alert("!!!  Please Fill  required Field !!!")
        }else{
            try {
                dispatch(addNewMyBrand({name}))
                setname('')
            }catch (error) {
                console.log("Error is : ", error)
            }
        }
    }

    return (
        <>
            <Box className={classes.root} >
                <Typography className={classes.head}>Add New Brand</Typography>
                 <Grid container direction="row" className={classes.prodComps} >
                    <Grid item xs={4}>
                        <Box className={classes.fileInput}>
                            <Typography variant="body1" style={{fontWeight: 700 , marginBottom:'10px' , paddingLeft: '12px'}}>Brand Name</Typography>
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
                <Button variant="contained" type="file" className={classes.uploadBtn1} onClick={handleSubmit} >Add NOW</Button>
            </Box>
        </>
    )
}

export default NewProduct