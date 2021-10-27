import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { buyProduct, cancelProduct } from './actions';

import Navbar from "./components/navbar";
import ProductCard from "./components/product-card";

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  const [selectedItem, setSelectedItem] = useState(0);

  const [products, setProducts] = useState([
    {
      id: 1,
      stock: 10,
    },
    {
      id: 2,
      stock: 5,
    },
    {
      id: 3,
      stock: 15,
    },
  ]);

  const dispatch = useDispatch()

  const handleBuy = (product) => {
    const newProducts = [];
    for (let i = 0; i < products.length; i++) {
      const currentProduct = products[i]; // 0, 1, 2
      if (currentProduct.id === product.id) {
        currentProduct.stock = currentProduct.stock - 1;
        newProducts.push(currentProduct);
      } else {
        newProducts.push(currentProduct);
      }
    }

    setProducts(newProducts);
    dispatch(buyProduct())
  };

  const handleRemove = (product) => {
    setProducts((currentProducts) => {
      const updatedProducts = currentProducts.map((item) => {
        if (item.id === product.id) {
          item.stock += 1;
          return item;
        }
        return item;
      });

      return updatedProducts;
    });

    dispatch(cancelProduct())
  };


  return (
    <React.Fragment>
      <Navbar />
      <ProductContainer>
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onBuy={() => handleBuy(product)}
              onCancel={() => handleRemove(product)}
            />
          );
        })}
      </ProductContainer>
    </React.Fragment>
  );
}

export default App;
