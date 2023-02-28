import React from 'react'
import HeroSection from '../components/HeroSection'

const Home = () => {
    const Store = "Store"
    return (
        <div className='container pt-4'>
            <HeroSection title={Store} />
        </div>
    )
}

export default Home
