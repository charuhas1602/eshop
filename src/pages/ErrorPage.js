import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className='container pt-4 mh-80'>
            Error Page 404-error 
            <div className="pt-2">
                <Link to="/">
                    <Button variant='danger'>Home</Button>
                </Link>

            </div>
        </div>
    )
}

export default ErrorPage
