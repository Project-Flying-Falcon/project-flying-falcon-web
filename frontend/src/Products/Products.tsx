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

const emptyProducts: Product[] = [];

function Products() {
    const [products, setProducts]: [Product[], (products: Product[]) => void] = useState(emptyProducts);

    useEffect(() => {
        axios.get<Product[]>("http://localhost:5022/catalog",
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response: any) => setProducts(response.data))
            .catch((error: any) => console.log(error));
    }, []);

    return (
        <div className="content">
            <ul className="products">
                {products.map((product) => (
                    <li key={product.id}>
                        <div className="product">
                            <img
                                className="product-image"
                                src={product.imageUrl}
                                alt="product"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;