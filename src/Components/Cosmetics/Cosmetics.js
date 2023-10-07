import React, {useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
  const[cosmetic , setCosmetic] = useState([])
  useEffect(() =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setCosmetic(data))
  }, [])

    return (
        <div>
           {
            cosmetic.map(item =><Cosmetic cosmetic = {item}></Cosmetic> )
            
            }
        </div>
    );
};

export default Cosmetics;