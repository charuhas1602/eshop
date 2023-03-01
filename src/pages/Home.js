import React from 'react'
import HeroSection from '../components/HeroSection'
import Services from '../components/Services'
import Trusted from '../components/Trusted'

const Home = () => {
    const Store = "Store"
    const imageUrl =`https://media.istockphoto.com/id/1314292277/photo/indian-diwali-shopping.jpg?s=612x612&w=0&k=20&c=Zz2gfPtv_XlHE2hzgffUyPNni8e-Kc9mDPFnFCeZ8k0=`
    return (
        <div className='container pt-4 mh-80'>
            <HeroSection title={Store} image={imageUrl}/>
            <Services />
            <Trusted />
        </div>
    )
}

export default Home
