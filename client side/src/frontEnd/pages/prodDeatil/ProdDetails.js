import React , {useState , useEffect} from 'react';
import Navbar from '../../components/navbar/Navbar'
import {Grid , List , ListItem, Button , Box } from '@mui/material'
import styled from 'styled-components'
import ReactImageZoom from 'react-image-zoom';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaidIcon from '@mui/icons-material/Paid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../../components/footer/Footer'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Categories from '../../components/categories/Categories'
import {useParams} from 'react-router-dom'
import {singleProduct} from '../../../server_api/Api'
import {useSelector, useDispatch} from 'react-redux'
import {addProduct} from '../../../reducers/cartReducer'



const ImageSec = styled.div`
    margin-left: 30px;
    margin-top: 70px;
`;

const DetailBox = styled.div `
    display: flex;
    margin-top: 70px;
    margin-left: 50px;
    flex-direction: column
`;

const MainText = styled.h6`
    color: #95a5a6;
    font-size:15px;
`;

const ProdName = styled.h6 `
    color: #2c3e50;
    font-size:16px;
    font-weight: 550;
    margin-top: 5px;
`;

const PriceName = styled.h6 `
    color: #27ae60;
    font-size:14px;
    margin-top: 20px;
    font-weight: 550;
`;

const PriceBox = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    max-width: 250px;
`;

const SellPrice = styled.span`
    font-size: 22px;
    font-weight: 550;
    color: #2d3436
`;

const DelPrice = styled.span `
    font-size: 16px;
    font-weight: 550;
    padding-top: 2px;
    text-decoration: line-through;
    color: #7f8c8d;
`;

const Offer = styled.span `
    font-size: 15px;
    font-weight: 550;
    padding-top: 2px;
    color: #2ecc71
`;

const AllOffers = styled.div`
    display: flex;
    margin-top: 20px;
    flex-direction: column
`;

const OfferHead = styled.h6`
    font-size: 17px;
    color: #2d3436;
    margin-bottom: 10px;
`;

const MyOffer = styled.div`
    display: flex;
    margin-top: 10px;
`;

const OfferText = styled.span`
    font-size: 14px;
    margin-left: 10px;
    color: #353b48;
`;

const SizesBox = styled.div`
    display: flex;
    margin-top: 50px;
`;

const SizesText = styled.h6`
    font-size: 16px;
    color: #576574;
    padding-top: 5px;
`;

const SizeBox = styled.div `
    margin-left: 50px;
    display: flex;
    width: 150px;
    justify-content : space-between
`;

const Size = styled.span`
    border: 1px solid #8395a7;
    width: 35px;
    font-size: 18px;
    height: 30px;
    padding: 5px;
    text-align: center;
    font-weight: 600
`;

const OfferImage = styled.img`
    width: 500px;
    margin-top: 30px;
    height: 150px;
    margin-bottom: 50px;
`;

const ListMyText = styled.h6`
    font-size: 15px;
    color: #576574;
    font-weight: 600;
    padding-top: 10px;
`;

const ListItemRight = styled.h6 `
    font-size: 14px;
    color: #1e272e;
    font-weight: 550;
    padding-bottom: 5px;
    padding-top: 10px;
`;

const ButtonImage = styled.div`
    display: flex;
`;

const MoreProducts = styled.div`
    display: flex;
    background-color: #FFFFFF;
    flex-direction: column;
    padding-left: 30px;
    margin-bottom: 30px;
`;

const Head = styled.h6`
    font-size: 22px;
    padding: 30px;
    margin-top: 20px;
    border-top: 2px solid #d2dae2;
`;

const Product = styled.div`
    display: flex;
    max-width: 350px;
    cursor: pointer;
    background-color: #FFFFFF;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const ProductLeft = styled.img`
    width: 130px;
    height: 150px;
`;

const ProductRight = styled.div`
    display: flex;
    padding-top: 20px;
    padding-left: 15px;
    flex-direction: column;
`;

const MainHeadProd = styled.h6`
    font-size: 16px;
    color: #1e272e
`;

const SubHeadProd = styled.h6 `
    font-size: 12px;
    color: #27ae60;
    padding-top: 10px;
`;


const ListImages = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
`;

export default function ProductDeatils() {
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3.2,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 5,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }

    const [ quantity , setQuantity ] = useState(1)
    const dispatch = useDispatch();


    const handleQty = (type) => {
        if(type === "inc"){
            setQuantity(quantity + 1)
        }else{
            quantity > 1 && setQuantity(quantity - 1)
        }
    }

    // adding to cart
    const handleCart = (id, name, image, price, qtyInHand ) => {
            dispatch(addProduct({ product: {
                id,
                name,
                image,
                price,
                qtyInHand,
                sentQty : 1,
            } , quantity }))
        }


    const [ prodData , setProdData ]  = useState([])
    const [ crntImg , setCrntImg ] = useState('https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')
    const props = {width: 350, height: 470, zoomWidth: 750, zoomHeight: 500 ,  img:  crntImg};


    const {id} = useParams();

    const {allProducts} = useSelector(state => state.prodReducer)

    // getting product
    useEffect(() => {
        const getProduct = async () => {
            const {data} = await singleProduct(id);
            setProdData(data?.gotProduct[0])
            setCrntImg(data?.gotProduct[0]?.productPictures[0])
        }
        getProduct();
    },[id])

    return (
        <>
            <Navbar/>
            <Box style={{marginTop: '45px'}} >
                <Categories/>
            </Box>
            <Grid container style={{marginTop: '-25px' , backgroundColor: '#FFFFFF'  }} >
                <Grid item xs={1}>
                    <ListImages>
                        {
                            prodData?.productPictures?.map((item) => (
                                <img src={item}  alt="Prod Cover" width="80" style={{marginLeft: '15px', marginBottom: '15px'}} height="100" onClick={() => setCrntImg(item)}  />
                            ))
                        }
                    </ListImages>
                </Grid>
                <Grid item xs={3.2}>
                    <ImageSec>
                        <ReactImageZoom {...props} />
                        <ButtonImage>
                            <Button variant="contained" style={{backgroundColor: '#ffa801' , fontWeight: 600 , width: '270px' , height: '50px' , marginLeft: '10px',  fontSize: '14px' }}  startIcon={<ShoppingCartIcon style={{fontSize: '22px'}} />} onClick={() => handleCart(prodData?._id , prodData?.name , prodData?.productPictures[0] , prodData?.orgPrice , prodData?.quantity )}  >Add to cart</Button>
                            <Button variant="contained" style={{backgroundColor: '#ff3f34' , fontWeight: 600 , minWidth: '150px' , height: '50px' , marginLeft : '10px' , fontSize: '17px'  }} startIcon={<PaidIcon style={{fontSize: '22px'}} />} >Buy Now</Button>
                        </ButtonImage>
                    </ImageSec>
                </Grid>
                <Grid item xs={7.8}>
                    <DetailBox>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                            style={{fontSize: '12px' , marginBottom: '10px'}}
                        >
                            <Link underline="hover" key="1" color="inherit" href="/" >
                                {prodData?.subCate}
                            </Link>,
                            <Link
                                underline="hover"
                                key="2"
                                color="inherit"
                                href="/getting-started/installation/"
                            >
                                {prodData?.brand}
                            </Link>,
                            <Typography key="3" style={{fontSize: '12px' , fontWeight: 550}} color="text.primary">
                                {prodData?.name}
                            </Typography>,
                        </Breadcrumbs>

                        <ProdName>
                            {prodData?.name}
                        </ProdName>
                        <PriceName>
                            Special Price
                        </PriceName>

                        <PriceBox>
                            <SellPrice>
                                Rs. {prodData?.orgPrice}
                            </SellPrice>
                                {
                                    prodData?.marktPrice && (
                                        <DelPrice>
                                            Rs {prodData?.marktPrice}
                                        </DelPrice>
                                    )
                                }
                            <Offer>
                                {prodData?.offer}
                            </Offer>
                        </PriceBox>

                        <AllOffers>
                            <OfferHead>
                                Available Offers
                            </OfferHead>
                            <MyOffer>
                                <LocalOfferIcon style={{color: '#2ecc71'}} />
                                <OfferText> <strong>Special Price </strong> Get extra 11% off (price inclusive of discount)</OfferText>
                            </MyOffer>
                            <MyOffer>
                                <LocalOfferIcon style={{color: '#2ecc71'}} />
                                <OfferText> <strong>Bank Offer </strong> 0% Instant Discount on RBL Bank Credit and Debit Cards</OfferText>
                            </MyOffer>
                            <MyOffer>
                                <LocalOfferIcon style={{color: '#2ecc71'}} />
                                <OfferText> <strong>Special Price </strong> Get extra 11% off (price inclusive of discount)</OfferText>
                            </MyOffer>
                            <MyOffer>
                                <LocalOfferIcon style={{color: '#2ecc71'}} />
                                <OfferText> <strong>Bank Offer </strong> 0% Instant Discount on RBL Bank Credit and Debit Cards</OfferText>
                            </MyOffer>
                        </AllOffers>

                        <SizesBox>
                            <SizesText>
                                Sizes
                            </SizesText>
                            <SizeBox>
                                {
                                    prodData?.sizes?.map((item) => (
                                        <Size>{item}</Size>
                                    ))
                                }
                            </SizeBox>
                        </SizesBox>

                        <OfferImage src="https://assets.thehansindia.com/h-upload/2021/10/14/1117163-flipkart.webp" alt="Offer" />
                         <Accordion  style = {
                             {
                                 maxWidth: '800px',
                                 borderTop: '2px solid #c8d6e5',
                                 borderBottom: '2px solid #c8d6e5',
                                 boxShadow: 'none'
                             }
                         } >
                            <AccordionSummary
                                expandIcon={<AddIcon  style={{color: '#576574' , fontWeight: 600}} />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                style={{height: '80px'}}
                            >
                                <Typography style={{fontWeight: 600 , fontSize: '22px'}} >Product Details</Typography>
                            </AccordionSummary>
                            <AccordionDetails style={{display: 'flex'}} >
                                <List>
                                    <ListItem>
                                        <ListMyText>Color</ListMyText>
                                    </ListItem>
                                     <ListItem>
                                        <ListMyText>Fabric</ListMyText>
                                    </ListItem>
                                     <ListItem>
                                        <ListMyText>Pattern</ListMyText>
                                    </ListItem>
                                     <ListItem>
                                        <ListMyText>Style Code </ListMyText>
                                    </ListItem>
                                     <ListItem>
                                        <ListMyText>Ideal For</ListMyText>
                                    </ListItem>
                                     <ListItem>
                                        <ListMyText>Pack of</ListMyText>
                                    </ListItem>
                                </List>
                                <List style={{marginLeft: '150px'}} >
                                    <ListItem>
                                        <ListItemRight>Black , Blue</ListItemRight>
                                    </ListItem>
                                     <ListItem>
                                        <ListItemRight>Pure Cotton</ListItemRight>
                                    </ListItem>
                                     <ListItem>
                                        <ListItemRight>Solid</ListItemRight>
                                    </ListItem>
                                     <ListItem>
                                        <ListItemRight>UKSYTG5875</ListItemRight>
                                    </ListItem>
                                     <ListItem>
                                        <ListItemRight>Men</ListItemRight>
                                    </ListItem>
                                     <ListItem>
                                        <ListItemRight>Pack of</ListItemRight>
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                    </DetailBox>
                </Grid>
            </Grid>

            <MoreProducts>
                <Head>You might be interested in</Head>
                <Carousel
                    responsive = {
                        responsive
                    }
                >
                    {
                        allProducts?.map((item) => (
                            item?.parentCate === prodData?.parentCate && (
                                <div style={{boxShadow: 'none', border: '1px solid transparent'}} >
                                    <Product>
                                        <ProductLeft src={item?.productPictures[0]}  alt="Product Cover" />
                                        <ProductRight>
                                            <MainHeadProd>{item?.name}</MainHeadProd>
                                            <SubHeadProd>{item?.offer}</SubHeadProd>
                                            <Button variant="contained" style={{width: '120px' , marginTop:'10px'}}  component = {
                                                Link
                                            }
                                            to = {
                                                `/products/productDetails/${item?._id}`
                                            }  >Shop Now</Button>
                                        </ProductRight>
                                    </Product>
                                </div>
                            )
                        ))
                    }
                </Carousel>
            </MoreProducts>
            <Footer/>
        </>
    );
}
