import axios from "axios";
import { useEffect,useState } from "react";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import "./HomePage.css";

export function HomePage({cart}) {
  const [products, setProducts] = useState([]);

  //ensures that request to the backend is only sent once when needed done by the empty array
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });

  },[]);

  return (
    <>
      <title>Ecommerce Store</title>

      <Header cart={cart}/>
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
