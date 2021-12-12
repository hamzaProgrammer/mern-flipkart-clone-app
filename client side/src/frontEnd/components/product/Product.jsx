import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'

export default function Product({item}) {
  return (
    <Card sx={{ maxWidth: 200 , paddingTop: '10px' , paddingRight: '0px' , borderShadow: 'none' }}  >
      <CardMedia
        style={{padding: '5px', minHeight: '160px'}}
        image={item?.productPictures[0]}
        alt="green iguana"
        component={Link} to={`/products/productDetails/${item?._id}`}
      />
      <CardContent>
        <Typography  gutterBottom style={{fontSize: '13.5px' , wordWrap: "break-word"  ,   fontWeight: 550 , color:'#2c3e50' , textAlign: 'center'}} component="div"  >
          {item?.name}
        </Typography>
        {
          item?.offer ? (
            <Typography  gutterBottom style={{fontSize: '13.5px' ,   textAlign: 'center' ,  wordWrap: "break-word"  ,  fontWeight: 500 , color:'#27ae60'}} component="div"  >
              {item?.offer}
            </Typography>
          ) : (
            <Typography  gutterBottom style={{fontSize: '13.5px' , wordWrap: "break-word"  , height: '20px',   fontWeight: 500 , color:'#27ae60'}} component="div"  >
            
            </Typography>
          )
          
        }
        <Typography  gutterBottom style={{fontSize: '13px' , wordWrap: "break-word"  ,  fontWeight: 500 , color:'#7f8c8d' , textAlign: 'center'}} component="div"  >
            #{item?.brand}
        </Typography>
      </CardContent>
    </Card>
  );
}
