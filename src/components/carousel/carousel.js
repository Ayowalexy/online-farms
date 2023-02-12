import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Banner from '../../assets/Brown-minimalist.gif'
import Green from '../../assets/eco.jpg'

import './carousel.scss'
function Example(props)
{
    var items = [
        {
            "imageUrl": Banner,
        
        },
        {
            "imageUrl": Green,
        }
    ]

    return (
        <Carousel  indicators={false}
        navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
            style: {
                bottom: '0',
                top: '50px',
                left: '50px',
                right: '50px'
            }
        }}
        >
            {
                items.map( (imageUrl, i) => <Item key={i} item={imageUrl} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
           <div className='banner'>
           <div className='banner-img' style={{backgroundImage: `url(${props.item.imageUrl})`}}>
           
           </div>
           </div>

            <Button className="CheckButton">
            </Button>
        </Paper>
    )
}

export default Example;