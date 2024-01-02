import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({ cat, filters, sord }) => {
  console.log(cat, filters, sord);

  const [pro, setProducts] = useState([]);
  const [filteredProduct, setFilterdProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {

 console.log(cat , "cat");

      async function fetchData() {
        try {
          const response = await axios.get(cat ? `http://localhost:5000/product?category=${cat}` : "http://localhost:5000/product");
          // Handle successful response
          console.log(response.data);
          setProducts(response.data);
        } catch (error) {
          // Handle error
          console.log('Error:', error);
        }
      }

      fetchData();
    }
    getProducts()
  }, [cat])
  
  console.log(pro, 'p');
  
  useEffect(() => {
    cat &&
    setFilterdProduct(
      pro.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key] && item[key].includes(value)
        )
      )
    );
    
      console.log(setFilterdProduct , "sfp");
    }, [pro, cat, filters]);
    
    
  useEffect(() => {
    if (sord === "newest") {
      setFilterdProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sord === "asc") {
      setFilterdProduct((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilterdProduct((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sord]);

    
  return (
    <Container>
      {console.log(filteredProduct, "fp")}
      {cat ? filteredProduct.map((item) => (
        <Product item={item} key={item.id} />
        )) : pro.slice(0,8).map((item) => (
          <Product item={item} key={item.id} /> )) }
    </Container>
  );
};

export default Products;