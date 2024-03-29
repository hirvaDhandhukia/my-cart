// this is a functional component
// sab products ke naam ismai render ho rahe hai
import React from 'react';
import Product from './Product';

export default function ProductList(props) {
  // console.log(props);
  return (

    props.productList.length > 0 ? 

    props.productList.map((product,i)=>{
      return <Product product={product} 
                      key={i} 
                      index = {i}
                      incrementQty={props.incrementQty} 
                      decrementQty={props.decrementQty} 
                      removeItem={props.removeItem}
              />
    })

    : <h1>No Products exists in the Cart</h1>
  )
}
