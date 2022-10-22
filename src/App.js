import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const productList = [
    {
      price: 99999,
      name: "The Psychology of Money",
      quantity: 0
    },
    {
      price: 9999,
      name: "War of Lanka",
      quantity: 0
    }
  ]

  return (
    <React.Fragment>
      <Navbar />
      <main className='container mt-5'>
        <ProductList productList={productList} />
      </main>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
