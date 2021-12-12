import React , {useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box  , Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import {makeStyles} from '@mui/styles'
import {useSelector , useDispatch} from 'react-redux'
import {gettingCategories , deletingCategory} from '../../../actions/categoryActions'
import {useLocation , Link} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
    avatar : {
        display : 'flex',
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
    const {categories} = useSelector(state => state.cateReducer)
    const dispatch = useDispatch();
    const location = useLocation();
    const classes = useStyles();

    useEffect(() => {
        dispatch(gettingCategories(dispatch))
    }, [location,dispatch])

    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
        },
        {
            field: 'parentId',
            headerName: 'Parent Category',
            width: 250,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 250,
            renderCell: (params) => {
                return (
                    <>
                        <Button  variant = "contained"
                        color = "primary"
                        size = "small"
                        component={Link}
                        style={{backgroundColor: '#2980b9'}}
                        to={`/admin/addCategory?id=${params.row._id}`}
                        >
                            Edit
                        </Button>
                        <DeleteIcon
                            className={classes.deleteBtn}
                            onClick= { () => dispatch(deletingCategory(params.row._id))}
                        />
                    </>
                )
            }
        }
    ];



    return (
        <>
            <Box>
                <div style={{ height: 400, width: '100%' , marginTop: '80px' }}>
                    <DataGrid
                        rows={categories}
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
