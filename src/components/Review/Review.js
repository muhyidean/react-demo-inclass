import React from 'react';
import './Review.css'

const Review =(props) => {
    return (
        <div className='Review'>
            {props.comment}
        </div>

    );

}

export default Review;