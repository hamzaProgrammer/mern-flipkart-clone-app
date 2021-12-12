import React from 'react'
import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const MyImage = styled.img`
    max-height: 300px;
    width: 100%;
    margin-top: 20px;
`;

const mainCarousel = () => {
    const images = ['https://www.gizmochina.com/wp-content/uploads/2020/11/poco-m3-main-1-600x600.jpg' ,
        'https://cdn.vox-cdn.com/thumbor/3pGXnfonsnp2ax8OBrOk7AOi91U=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21863340/DSCF7373.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYUgUCrghnmx6KykK0fzrQKpr_eCEHHdQWYw&usqp=CAU'
        ]
    return (
        <>
                <Carousel style = {
                {
                    backgroundColor: '#FAFAFA'
                }
            }
            navButtonsProps = {
                { // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                    style: {
                        backgroundColor: '#FAFAFA',
                        color: 'black',
                        height: '110px',
                        width: '50px',
                        marginTop: '-50px',
                        borderRadius: 0
                    }
                }
            }
            NextIcon = {<ChevronRightIcon style={{color: 'black' , height: '50px' , width: '50px'}} />}
            PrevIcon = {<KeyboardArrowLeftIcon style={{color: 'black' , height: '50px' , width: '50px'}}/>}
            autoPlay = {true}
            >
                    {
                        images?.map((item) => (
                            <MyImage  src={item} alt="Prod Cover"  />
                        ))
                    }
                </Carousel>
        </>
    )
}

export default mainCarousel
