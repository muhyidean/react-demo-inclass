import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import Review from "../Review/Review";
import './ProductDetails.css';

const ProductDetails = (props) => {

    const [productDetail, setProductDetail] = useState({});


    useEffect(
        () => {
            axios.get('http://localhost:8080/api/v1/products/' + props.id + '/reviews')
                .then(response => {
                    setProductDetail(response.data)
                    console.log("RESPONSE:", response.data)
                })
                .catch(err => console.log(err.message))
        },
        [props.id])


    const deleteButtonClicked = (id) => {
        axios.delete('http://localhost:8080/api/v1/products/' +id)
            .then(response => {
                props.changeFetchFlag();
            })
            .catch(err => {
                console.error(err);
            })
    }


    const space = <Fragment>&nbsp;&nbsp;</Fragment>;

    let productDetailsDisplay = null;
    if (props.id != 0) {

        productDetailsDisplay = (

            <div className="ProductDetail">
                <div>
                    Product Details
                </div>
                <h1> {productDetail.name}</h1>
                <div >
                    {productDetail.price}
                    <br />
                    <div style={{ textAlign: "left" }}>
                        {space} Reviews <br />
                        {productDetail.reviews != null ? productDetail.reviews.map(review => {
                            return <Review comment={review.comment} key={review.id}/>
                        }) : null}
                    </div>



                </div>
                <button onClick={ () => {deleteButtonClicked(props.id)}}> Delete</button>
            </div>
        );
    }

    return productDetailsDisplay



}

export default ProductDetails;