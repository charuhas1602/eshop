import React from 'react'
import { useProductcontext } from '../context/ProductContext'
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const FeatureProducts = () => {
    const { isLoading, featureProducts } = useProductcontext()
    // console.log(isLoading, featureProducts)
    if (isLoading) { return <div>Loading...</div> }

    return (
        <>
            <h4 className='text-center py-3'>Feature Products</h4>
            <div className='d-flex justify-content-evenly align-content-center gap-2 flex-wrap'>
                {featureProducts.map(el => {
                    return (
                        <NavLink to={`/singleproduc/${el.id}`} key={el.id} className="text-decoration-none ">
                            <Card style={{ width: '20rem' }} className="mr-2 text-black bg-slate-200 hover:scale-105">
                                <Card.Body>
                                    <Card.Title>{el.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{el.company}</Card.Subtitle>
                                    <Card.Text>
                                        {el.description.substr(0, 100)}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavLink>
                    )
                })}
            </div>
        </>
    )
}

export default FeatureProducts
