import React from "react";

export default function Product(props) {

  return (
    <div className="row">
      <div className="col-5">
        <h4>
          {props.product.name}
          <span className="badge bg-secondary m-2">₹{props.product.price}</span>
        </h4>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button 
            type="button" 
            className="btn btn-danger"
            onClick={() => {props.decrementQty(props.index)}}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button 
            type="button" 
            className="btn btn-success"       
            onClick={() => {props.incrementQty(props.index)}}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-4">
        <h4>
          {props.product.quantity * props.product.price}
        </h4>
      </div>
    </div>
  );
}
