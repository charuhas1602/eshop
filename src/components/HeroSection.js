import React from 'react'
import { Button } from 'react-bootstrap'

const HeroSection = ({ title }) => {
    return (
        <div className='d-flex'>
            <div className="col-6">
                <div className="fs-1">
                    {title}
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nostrum quibusdam dolore rem eaque quae. Nostrum deleniti, voluptates, illum repellat quo, magni laudantium dolores ex dignissimos consequatur culpa voluptatum a!
                </p>
                <Button>Shop</Button>
            </div>
            <div className="col-6">
                <figure>
                    <img class="img-fluid" src="https://media.istockphoto.com/id/1314292277/photo/indian-diwali-shopping.jpg?s=612x612&w=0&k=20&c=Zz2gfPtv_XlHE2hzgffUyPNni8e-Kc9mDPFnFCeZ8k0=" alt="" srcset="" />
                </figure>
            </div>
        </div>
    )
}

export default HeroSection
