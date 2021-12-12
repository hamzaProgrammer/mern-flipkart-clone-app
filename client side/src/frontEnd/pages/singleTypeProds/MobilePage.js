import React from 'react'
import ProdCarousel from '../../components/categoryWisecarousel/CategoryCarousel'
import {useSelector} from 'react-redux'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Product from '../../components/categoryWisecarousel/Product'
import Deal from '../../components/categoryWisecarousel/MainPart'


const MobilePage = ({parent, sub}) => {
    const {allProducts} = useSelector(state => state.prodReducer)
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 7,
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
    };
    
    return (
        <>
            <Deal title="Products Under 5k" />
            <Carousel
                    responsive = {
                        responsive
                    }
                >
                {
                    allProducts?.map((item) => (
                        ( ( item?.subCate === sub || item?.parentCate === parent ) && (item?.orgPrice <= 5000 ) ) && (
                                <div style={{boxShadow: 'none', border: '1px solid transparent' , marginLeft: '15px'}} ><Product item={item} /></div>
                    )
                    ))
                }
            </Carousel>

            <Deal title="Products Under 10k" />
            <Carousel
                    responsive = {
                        responsive
                    }
                >
                {
                    allProducts?.map((item) => (
                        ( ( item?.subCate === sub || item?.parentCate === parent ) && (item?.orgPrice <= 10000 && item?.orgPrice >= 5000 ) ) && (
                                <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product item={item} /></div>
                    )
                    ))
                }
            </Carousel>

            <Deal title="Products Under 15k" />
            <Carousel
                    responsive = {
                        responsive
                    }
                >
                {
                    allProducts?.map((item) => (
                        ( ( item?.subCate === sub || item?.parentCate === parent ) && (item?.orgPrice <= 15000 && item?.orgPrice >= 10000 ) ) && (
                                <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product item={item} /></div>
                    )
                    ))
                }
            </Carousel>

            <Deal title="Products Under 20k" />
            <Carousel
                    responsive = {
                        responsive
                    }
                >
                {
                    allProducts?.map((item) => (
                        ( ( item?.subCate === sub || item?.parentCate === parent ) && (item?.orgPrice >= 20000) ) && (
                                <div style={{boxShadow: 'none', border: '1px solid transparent' , marginLeft: '15px' }} ><Product item={item} /></div>
                    )
                    ))
                }
            </Carousel>
            
        </>
    )
}

export default MobilePage