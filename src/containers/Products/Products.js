import { useState, useEffect, useContext } from "react";
import Product from "../../components/Product/Porduct";
import axios from "axios";
import { Selected } from "../../store/Selected";
import { Link } from "react-router-dom";
import ProductDetails from "../../components/ProductDetails/ProductDetails";


const Products = (props) => {

    const setSelected = useContext(Selected);

    console.log("PRODUCTS UPDATE");

    const [products, setProducts] = useState(
        [
            { id: 1, name: "iphone 13", price: 1100 },
            { id: 2, name: "s22", price: 1150 },
            { id: 3, name: "Pixel", price: 1200 }
        ]
    )
    const fetchProducts = () => {
        axios.get('http://localhost:8080/api/v1/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        fetchProducts()
    },
        [props.fetchFlag])


    const productList = products.map(product => {
        return (
            <Link to={`${product.id}`} key={product.id}>
                <Product
                    name={product.name}
                    price={product.price}
                    id={product.id}
                    key={product.id}
                />
            </Link>
        );
    });

    return <div className="Product">
        {productList}
        <ProductDetails />
    </div>
}

export default Products;