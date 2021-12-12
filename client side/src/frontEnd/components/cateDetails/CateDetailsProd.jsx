import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button} from '@mui/material'
import Typography from '@mui/material/Typography';

export default function Product({item}) {
    return (
        <>
        <Card sx={{ maxWidth: 300 , paddingTop: '10px' , paddingRight: '0px' , borderShadow: 'none' , marginTop: '75px' ,marginLeft: '30px'}}>
        <CardMedia
            component="img"
            height="180"
            style={{padding: '5px' , objectFit: 'cover'}}
            image={item[0][0]?.productPictures[0]}
            alt="green iguana"
        />
        <CardContent>
            <Typography  gutterBottom style={{fontSize: '16.5px' , wordWrap: "break-word"  ,  fontWeight: 550 , color:'#2c3e50' , textAlign: 'center'}} component="div"  >
            {item[0][0]?.name}
            </Typography>
            <Typography  gutterBottom style={{fontSize: '15.5px' , wordWrap: "break-word"  ,  fontWeight: 500 , color:'#27ae60' , paddingLeft: '40px'}} component="div"  >
                40-70%Off+Extra 10%Off
            </Typography>
            <Button variant="contained" style={{marginLeft: '60px' , backgroundColor: '#e67e22' , fontWeight: 600 , marginTop: '15px'}} >View Details</Button>
        </CardContent>
        </Card>
    </>
  );
}
