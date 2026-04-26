
import { useState, useEffect } from "react";
import axios from "axios";



type Product = {
    id: number;
    name: string;
    description: string;
    brand: string;
    price: number;
    rating: number;
    numberOfReviews: number;
    imageUrl: string;
}

const emptyProducts: Product [] = [];


function Products() {
  return (
    <div className="content">
      <ul className="products"></ul>
    </div>
  );

const [products, setProducts]: [Product[], (products: Product[]) => void] = useState(emptyProducts);

  useEffect(()=> {
    axios.get<Product[]>("http://localhost:5500/catalog", 
        {
            headers: {
                "Content-Type":"application/json",
            },
        })
        .then((response)=>setProducts(response.data))
        .catch((error) => console.log(error));
        }, []);

}

export default Products;