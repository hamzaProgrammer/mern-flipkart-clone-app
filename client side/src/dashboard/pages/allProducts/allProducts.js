import React , { useState , useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box  , Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import {makeStyles} from '@mui/styles'
import {useSelector , useDispatch} from 'react-redux'
import {getAllProducts , getDeleteProducts} from '../../../actions/prodActions'
import {useLocation , Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    avatar : {
        display : 'flex',
        marginRight: '20px',
        marginLeft:'-50px'
    },
    userImage : {
        width:'32px',
        height: '32px',
        borderRadius: '50%',
        objectFit:'cover',
        marginRight:'10px',
        marginTop: '10px'
    },
    deleteBtn: {
        marginLeft: '20px',
        color: 'red',
        cursor: 'pointer'
    }
}))
const UserLists = () => {
    const {allProducts} = useSelector(state => state.prodReducer)
    const dispatch = useDispatch();
    const location = useLocation();
    const classes = useStyles();
    const [allCategories, setCategories] = useState(allProducts);

    useEffect(() => {
        dispatch(getAllProducts(dispatch))
    }, [location,dispatch])

    const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    {
        field: 'name',
        headerName: 'Name',
        minWidth: 250,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 250,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => {
            return (
                <>
                    <Button  variant = "contained"
                        color = "primary"
                        size = "small"
                        style={{backgroundColor: '#2980b9', fontWeight: 600, borderRadius: '5px'}}
                        component={Link}
                        to={`/admin/products/edit/${params.row._id}`}
                        >
                        Edit
                    </Button>
                    <DeleteIcon
                        className={classes.deleteBtn}
                        onClick= { () => dispatch(getDeleteProducts(params.row._id))}
                    />
                </>
            )
        }
    }
    ];



    return (
        <>
            <Box>
                <div style={{ height: 400, width: '100%' , marginTop: '80px', marginLeft: '-50px' }}>
                    <DataGrid
                        rows={allCategories}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        disableSelectionOnClick
                        getRowId={r=>r._id}
                    />
                </div>
            </Box>
        </>
    )
}

export default UserLists
