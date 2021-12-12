import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from '../product/Product'
import Deals from './TopDeals'

const MyCarousel = () => {
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
            <Deals/>
            <div style={{backgroundColor: '#FFFFFF'}}>
                <Carousel
                    responsive = {
                        responsive
                    }
                >
                    <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product/></div>
                    <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product/></div>
                    <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product/></div>
                    <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product/></div>
                    <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product/></div>
                    <div style={{boxShadow: 'none',  border: '1px solid transparent'}} ><Product/></div>
                    <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product/></div>
                    <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product/></div>
                    <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product/></div>
                    <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product/></div>
                    <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product/></div>
                    <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product/></div>
                    <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product/></div>
                    <div style={{boxShadow: 'none', border: '1px solid transparent'}} ><Product/></div>
                </Carousel>
            </div>
        </>
    )
}

export default MyCarousel
