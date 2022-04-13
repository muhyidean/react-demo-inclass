import './NewProduct.css';
import { useRef } from 'react';
import axios from 'axios';


const NewProduct = (props) => {

    const newProductForm = useRef();

    const addButtonClicked = () => {
        const form = newProductForm.current;
        const data = {
            name: form['name'].value,
            price: form['price'].value
        }
        axios.post('http://localhost:8080/api/v1/products', data)
            .then(response => {
                props.changeFetchFlag();
            })
            .catch()
    }

    return (
        <div className="NewProduct">
            <form ref={newProductForm}>
                <h1> Add Product</h1>

                <label>Name</label>
                <input type="text" label={'name'} name={'name'} />

                <label>Price</label>
                <input type="text" label={'price'} name={'price'} />
            </form>

            <button onClick={addButtonClicked} > Add Product</button>
        </div>
    );

}

export default NewProduct