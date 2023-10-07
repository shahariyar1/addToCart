import React from 'react';
import { add, multiply } from '../Utilities/Utilities';

const Shoes = () => {
    const x = 10;
    const y = 20;
    const total = add(x, y);
    const a = 4;
    const b = 5;
    const result = multiply(a, b);
    return (
        <div>
             <h1>there is all are shoes</h1>
             <p>here is addition</p>
            <p>Add :{total} </p>
            <p>here is multiplication</p>
            <p>Add : {result}</p>
        </div>
    );
};

export default Shoes;