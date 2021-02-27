
import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
   

    return (
        
          
          <div className = "shop-container">
              <div className ="product-container">
              <ul>
               {
                   products.map(pd => <Product product ={pd}>{}</Product>)
               }
           </ul>  
              </div>
              <div className ="cart-container">
                  <h3>This is car</h3>
              </div>
          </div>
           
    );
};

// const Shop = () => {
//     const first10 = fakeData.slice(0, 10);
//     const [products, setstate] = useState(first10);
//     const [cart, setCart] = useState([]);

//     const handleAddProduct = (product) => {
//         const newCart = [...cart, product];
//         setCart(newCart);
//     }

//     return (
//         <div className='shop-container'>
//             <div className="product-container">
//                 {
//                     products.map(product => <Product handleAddProduct={handleAddProduct} pd={product} key={product.key}></Product>)
//                 }
//             </div>
//             <div className="cart-container">
//                 <Cart cart={cart}></Cart>
//             </div>
//         </div>
//     );
// };


export default Shop;