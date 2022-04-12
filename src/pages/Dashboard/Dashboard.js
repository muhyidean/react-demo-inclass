import React, { useState } from "react";
import NewProduct from "../../components/NewProduct/NewProduct";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Products from "../../containers/Products/Products";



const Dashboard = () => {

    const [fetchFlag, setFetchflag] = useState(true);
    const [selectedState, setSelectedState] = useState(0);

    const changeFetchFlag = () => {
        setFetchflag(!fetchFlag);
    }

    const setSelected = (id) => {
        setSelectedState(id);
    }

    return (
        <div>
            <div className="Product">
                <Products
                    setSelected={setSelected}
                    fetchFlag={fetchFlag} />
            </div>
            <div >
                <ProductDetails
                    id={selectedState}
                    changeFetchFlag={changeFetchFlag}
                />
            </div>
            <div>
                <NewProduct
                    changeFetchFlag={changeFetchFlag} />
            </div>
        </div>
    );

}


export default Dashboard;