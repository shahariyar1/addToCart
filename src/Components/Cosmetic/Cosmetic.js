import React from 'react';
import './Cosmetic.css';
const Cosmetic = (props) => {
    const {index,picture,age} =props.cosmetic;

    const addToCart = (index) => {
        console.log('this is event',index);
    };
    

    return (
        <div className='product'>
           <p> ID : {index}</p>
            <img src = {picture} alt='' />
           <h1> Age : {age}</h1>
           <button onClick = {() => addToCart(index)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;