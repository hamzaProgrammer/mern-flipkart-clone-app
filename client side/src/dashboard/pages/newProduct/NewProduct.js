import React , { useState } from 'react'
import {
    Box,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Grid
} from '@mui/material'
import { addProduct } from  '../../../server_api/Api'
import {storage}  from '../../Firebase'
import {makeStyles} from '@mui/styles'
import {getAllProducts} from '../../../actions/prodActions'
import {useNavigate} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux'
import { EditorState } from 'draft-js';
import {
  convertToRaw,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const useStyles = makeStyles((theme) => ({
    root : {
        marginTop: '50px',
        padding: '20px',
        boxShadow: '2px 6px 39px -15px #000000',
        marginRight: '30px',
        marginLeft: '-30px',
        paddingLeft : '30px',
        backgroundColor: '#FAFAFA',
        maxWidth: '100%',
        marginBottom: '25px'
    },
    head : {
        fontSize : '22px',
        fontWeight: 600,
        marginBottom: '55px'
    },
    prodComps : {
        display : 'flex',
        flexDirection: 'row',
        marginTop: '30px'
    },
    inputs : {
        width: '300px',
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
        width: '200px',
        marginLeft: '400px',
        backgroundColor: '#130f40',
        fontWeight: 700,
        marginTop: '30px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#30336b'
        }
    },
    fileInput: {
    width: '97%',
    marginLeft: '20px',
    marginBottom: '50px',
    },
}))


const sizes = [
    'S',
    'M',
    'L',
    'XS',
    'XL',
    'XXS',
    'XXL',
];

const NewProduct = () => {
    const classes = useStyles();

    const dispatch = useDispatch()
    const {categories} = useSelector(state => state.cateReducer)
    const {allBrands} = useSelector(state => state.BrandsReducer)
    const {admin} = useSelector(state => state.userReducer)

    const navigate = useNavigate();
    const initValue = {
        name: '',
        desc: '',
        updatedAt: null,
        parentCate: '',
        subCate: '',
        brand: '',
        quantity: '',
        sizes: [],
        offer: '',
        productPictures: [],
        reviews: [],
        status: '',
        orgPrice: 0,
        marktPrice: '',
        createdBy: admin?._id
    }
    const [ prodInfo , setProductInfo ] = useState(initValue)

    const [ success , setSuccess ] = useState('')

    const [ progress , setProgress ] = useState(0)

    const handleChange = (e) => {
        setProductInfo({...prodInfo , [e.target.name]: e.target.value})
    }

    // uploading to firebase
    const upload =  (myImg) => {
        const fileName = new Date().getTime() + myImg.name
        const uploadedTask = storage.ref(`/tempImages/${fileName}`).put(myImg)
        uploadedTask.on
        ("state_changed",
            (snapshot) => {
                setProgress(snapshot.bytesTransferred / snapshot.totalBytes * 100);
        },
        (err) => {console.log(err)},
            () => {
                uploadedTask.snapshot.ref.getDownloadURL().then((url) => {
                    setProductInfo((prev) => { return { ...prev , productPictures : [...prev.productPictures, url]  } })
                })
            }
        )
    }

    // for Sending Movie Data to server
    const handleSubmit = async () => {
        if (!prodInfo.name || !prodInfo.desc || !prodInfo.subCate || !prodInfo.productPictures.length > 0  || !prodInfo.status || !prodInfo.orgPrice) {
                alert("!!!  Please Fill All required Fields !!!")
        }else{
            try {
                const {data} = await addProduct(prodInfo)
                dispatch(getAllProducts());
                setSuccess(data?.message)
                setProgress('')
                setProductInfo(initValue)
                //window.location.reload(true)
            }catch (error) {
                console.log("Error is : ", error)
            }
        }
    }

    // editor
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');

        // sizes
    const [personName, setPersonName] = React.useState([]);
    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
        if (options[i].selected) {
            value.push(options[i].value);
            setProductInfo({...prodInfo , sizes : value})
        }
        }
        setPersonName(value);
    };

    return (
        <>{console.log(prodInfo)}
            <Box className={classes.root} >
            {
                ( progress > 0 && progress < 100 ) && (
                    <Typography variant="body2" style={{color: 'crimson'}}>Photo is {progress}% uploaded</Typography>
                )
            }
            {
                progress === 100 && (
                    <Typography variant="body2" style={{color: 'green'}}>Photo is {progress}% uploaded</Typography>
                )
            }
            {
                success !== '' && (
                    <Typography variant="body2" style={{color: 'green', marginLeft: '300px' , fontWeight: 600, fontSize: '20px'}}>{success}</Typography>
                )
            }
                <Typography className={classes.head}>Add New Product</Typography>

                 <Grid container direction="row" className={classes.prodComps} >
                    <Grid item xs={4}>
                        <TextField
                            label="Product Name"
                            variant="outlined"
                            className={classes.inputs}
                            name="name"
                            value={prodInfo.name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Stock"
                            variant="outlined"
                            className={classes.inputs}
                            style={{maxWidth: '300px' , marginLeft: '0px'}}
                            name="quantity"
                            value={prodInfo.quantity}
                            type="Number"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl required  style={{width: '300px'}}>
                            <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={prodInfo.parentCate}
                                label="Category"
                                name="category"
                                //onChange={handleChange}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                categories?.map((item) => (
                                    item?.children?.map((Inner) => (
                                        <MenuItem  onClick={(e) => setProductInfo({...prodInfo , parentCate : item?.name , subCate : Inner}) } >{Inner}</MenuItem>
                                    ))
                                ))
                            }
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Grid container direction="row" className={classes.prodComps} >
                    <Grid item xs={4}>
                        <TextField
                            label="Selling Price($)"
                            variant="outlined"
                            className={classes.inputs}
                            name = "orgPrice"
                            value={prodInfo?.orgPrice}
                            type="Number"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Market Price"
                            variant="outlined"
                            className={classes.inputs}
                            style={{maxWidth: '300px' , marginLeft: '0px'}}
                            name="marktPrice"
                            value={prodInfo.marktPrice}
                            type="Number"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Box className={classes.fileInput}>
                            <Typography variant="body1" style={{fontWeight: 700 , marginBottom:'0px' , paddingLeft: 'grey'}}>Product Image  </Typography>
                            <input type="file" className={classes.input} onChange={(e) => upload(e.target.files[0])}  />
                        </Box>
                    </Grid>
                </Grid>

                <Grid container direction="row" className={classes.prodComps} style={{marginTop: '45px'}} >
                    <Grid item xs={4}>
                        <FormControl required  style={{width: '300px'}}>
                            <InputLabel id="demo-simple-select-required-label">Brands</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={prodInfo.brand}
                                label="Brands"
                                name="brand"
                                //onChange={handleChange}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                allBrands?.map((item) => (
                                    <MenuItem  onClick={(e) => setProductInfo({...prodInfo , brand : item?.name }) } >{item?.name}</MenuItem>
                                ))
                            }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl required  style={{width: '300px' , marginTop: '00px'}}>
                            <InputLabel id="demo-simple-select-required-label">Status</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={prodInfo?.status}
                                label="Status"
                                name="status"
                                onChange={handleChange}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="active" selected>Active</MenuItem>
                            <MenuItem value="inActive">InActive</MenuItem>aa
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="Offer (If any)"
                            variant="outlined"
                            className={classes.inputs}
                            style={{maxWidth: '300px' , marginLeft: '0px'}}
                            name="offer"
                            value={prodInfo.offer}
                            type="text"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={setEditorState}
                            onChange={(e) => setProductInfo({...prodInfo , desc: value})}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                        />
                    </Grid>
                    <FormControl sx={{ m: 1, minWidth: 300, maxWidth: 300 }}>
                        <InputLabel shrink htmlFor="select-multiple-native">
                        Sizes
                        </InputLabel>
                        <Select
                            multiple
                            native
                            value={personName}
                            onChange={handleChangeMultiple}
                            label="Native"
                            inputProps={{
                                id: 'select-multiple-native',
                            }}
                        >
                        {sizes.map((name) => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                        </Select>
                    </FormControl>
                </Grid>

                {
                progress === 100 && (
                    <>
                        <Button variant="contained" className={classes.uploadBtn1} onClick={handleSubmit} >Upload Product</Button>
                    </>
                )
            }
            </Box>
        </>
    )
}

export default NewProduct