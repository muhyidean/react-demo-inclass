import './NewProduct.css';
import { useState } from 'react';
import axios from 'axios';

const NewProduct = (props) => {

    const [productState, setProductState] = useState(
        {
            name: "",
            price: ""
        }
    )

    const onChange = (events) => {
        const updatedProduct = { ...productState, [events.target.name]: events.target.value };
        setProductState(updatedProduct);
    }

    const addButtonClicked = () => {
        axios.post('http://localhost:8080/api/v1/products', productState)
            .then(response => {
                setProductState({name: "", price: ""});
                props.changeFetchFlag();
            })
            .catch()

        
    }

    return (
        <div className="NewProduct">
            <h1> Add Product</h1>

            <label>Name</label>
            <input type="text" label={'name'} name={'name'} onChange={onChange} value={productState.name} />

            <label>Price</label>
            <input type="text" label={'price'} name={'price'} onChange={onChange} value={productState.price} />

            <button onClick={addButtonClicked} > Add Product</button>
        </div>
    );

}

export default NewProduct