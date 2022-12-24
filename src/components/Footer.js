import React from 'react';

export default function Footer(props) {
  return (
    <div className='row fixed-bottom'>
      <button 
        className='btn btn-danger col-2'
        onClick={() => {props.resetQuantity()}}
      >
        Reset quantity
      </button>
      <div className='col-8 bg-dark'>
        <h4 className='text-white text-center'>
          {props.totalAmount}
        </h4>
      </div>
      <button className='btn btn-primary col-2'>Pay Now</button>
    </div>
  )
}
