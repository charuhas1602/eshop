import React from 'react'

const Services = () => {
    return (
        <>
            <div className=" pt-3" style={{ backgroundColor: "#fff" }}>
                <div className="fs-2 text-center">Services</div>
                <div className='d-flex justify-content-center flex-wrap'>
                    <div className="col-md-4 p-2 ">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="col-12 bg-secondary text-white text-center d-flex justify-content-center align-items-center px-2 py-5 border rounded">
                                <p>Money back Gurantee</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2 d-flex flex-column justify-content-center order-12 ">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="col-12 bg-secondary text-white text-center d-flex justify-content-center align-items-center px-2 py-3 border rounded">
                                <p>Super Fast delivery</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="col-12 bg-secondary text-white text-center d-flex justify-content-center align-items-center px-2 py-3 border rounded">
                                <p>Non-Contact Shipping</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-2 order-1">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="col-12 bg-secondary text-white text-center d-flex justify-content-center align-items-center px-2 py-5 border rounded">
                                <p>Super Secure Payment System</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Services
