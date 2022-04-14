import { useContext } from "react";
import { Selected } from "../../store/Selected";


const Product = (props) => {

    const setSelected = useContext(Selected);
    return (
        <div className="Content" onClick={ () => {setSelected(props.id)}}>
            <h1>{props.name}</h1>
            <div className="Field">
                {props.price}
            </div>
        </div>
    );

}

export default Product;