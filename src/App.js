import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  // this is the prop object
  const products = [
    {
      price: 450,
      name: "Think like a Monk",
      quantity: 0
    },
    {
      price: 390,
      name: "The Mountain is you",
      quantity: 0
    },
    {
      price: 499,
      name: "Atomic Habits",
      quantity: 0
    }
  ]

  let [productList , setProductList] = useState(products)

  const incrementQty = (index) => {
    // productList ki ek copy 'newProductList' mai aa gai, with the use of the spread operator
    let newProductList = [...productList]
    newProductList[index].quantity++;
    setProductList(newProductList);
  }

  const decrementQty = (index) => {
    let newProductList = [...productList]
    newProductList[index].quantity > 0 ? newProductList[index].quantity-- : newProductList[index].quantity=0;
    setProductList(newProductList);
  }


  return (
    <React.Fragment>
      <Navbar />
      <main className='container mt-5'>
        <ProductList 
          productList={productList}
          incrementQty={incrementQty}
          decrementQty={decrementQty}
        />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
