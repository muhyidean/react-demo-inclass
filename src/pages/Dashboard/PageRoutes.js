import { Navigate, Route, Routes } from "react-router-dom";
import NewProduct from "../../components/NewProduct/NewProduct";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Products from "../../containers/Products/Products";

const PageRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/products" /> } />
            <Route path="products" element={<Products />} > 
                <Route path=":id" element={<ProductDetails />} />
            </Route>
            <Route path="create-product" element={<NewProduct />} />
        </Routes>
    );

}

export default PageRoutes;