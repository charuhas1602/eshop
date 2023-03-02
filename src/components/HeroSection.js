import React from 'react'
import { Button } from 'react-bootstrap'

const HeroSection = ({ title, image }) => {
    return (
        <div className='d-flex justify-content-center flex-wrap-reverse py-2'>
            <div className="col-md-6 pb-2 px-2">
                <div className="fs-1">
                    {title}
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nostrum quibusdam dolore rem eaque quae. Nostrum deleniti, voluptates, illum repellat quo, magni laudantium dolores ex dignissimos consequatur culpa voluptatum a!
                </p>
                <Button>Shop</Button>
            </div>
            <div className="col-md-6 pb-2 px-2">
                <figure>
                    <img className="img-fluid" src={image} alt="" srcSet={image} />
                </figure>
            </div>
        </div>
    )
}

export default HeroSection
