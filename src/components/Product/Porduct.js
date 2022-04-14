import { useContext } from "react";
import { Selected } from "../../store/Selected";


const Product = (props) => {

    return (
        <div className="Content" >
            <h1>{props.name}</h1>
            <div className="Field">
                {props.price}
            </div>
        </div>
    );

}

export default Product;