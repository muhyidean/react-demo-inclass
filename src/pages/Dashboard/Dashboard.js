import React, { useState ,useEffect} from "react";
import NewProduct from "../../components/NewProduct/NewProduct";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Products from "../../containers/Products/Products";
import { Selected } from "../../store/Selected";
import { ThemeColorContext } from "../../store/ThemeColor";




const Dashboard = () => {

    const [themeColorState, setThemeColorState] = useState({ color: "red" });
    const [fetchFlag, setFetchflag] = useState(true);
    const [selectedState, setSelectedState] = useState(0);

    const changeFetchFlag = () => {
        setFetchflag(!fetchFlag);
    }

    const setSelected = (id) => {
        setSelectedState(id);
    }

    const reviewColorHandler = () => {
        if (themeColorState.color === "red") {
            setThemeColorState({ color: "blue" });
        }
        else {
            setThemeColorState({ color: "red" });
        }
    }

    useEffect(() => {
        return () => {
          console.log("Something was unmounted");
        };
      }, [fetchFlag]);

    return (
        <div>
           <Selected.Provider value={setSelected} > 
            <ThemeColorContext.Provider value={themeColorState}>
                <div className="Product">
                    <Products
                        // setSelected={setSelected} 
                        fetchFlag={fetchFlag}
                        />
                </div>
                <button onClick={reviewColorHandler} >Change color</button>
                <div >
                    <ProductDetails
                        id={selectedState}
                        changeFetchFlag={changeFetchFlag}/>
                </div>
                <div>
                <NewProduct changeFetchFlag={changeFetchFlag}/>
                   {/* {fetchFlag?<NewProduct
                        changeFetchFlag={changeFetchFlag} />:null}  */}
                </div>
            </ThemeColorContext.Provider>
            </Selected.Provider>
        </div>
    );

}


export default Dashboard;