import React from 'react'
import './success.css'

const SuccessPage = () => {
  return (
    <div className=' success-comp-wrapper container-fluid bg-secondary-subtle vh-100 vw-100 d-flex justify-content-center align-content-center'>
    <div className='success-container rounded-5 w-50 h-50 m-auto shadow align-middle'>
    <p className=' text-success fs-2 fw-bold custom-success'>Successful Booking!</p>
    </div>
    </div>
  )
}

export default SuccessPage
