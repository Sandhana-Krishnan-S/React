// Card.jsx
import React from 'react'
import './Grid.css'

const Card = () => {
    const productList = [{
        id : 1,
        name: 'yo',
        description : 'fxgchvj',
        price : 'dxgfchvj',
        image : {}
      } , {
        id : 2,
        name: 'trgfedc',
        description : 'drftygu',
        price : 'ghcvjb',
        image : {}
      } , {
        id : 3,
        name: 'fghj',
        description : 'gfchvjb',
        price : 'fgchvjb',
        image : {}
      } , {
        id : 4,
        name: 'fgchvjbk',
        description : 'dsfghjk',
        price : 'sdfghjk',
        image : {}
      } , {
        id : 5,
        name: 'sdfghjcfv',
        description : 'dszfxgchvj',
        price : 'sadfgh',
        image : {}
      } , {
        id : 6,
        name: 'dsfghj',
        description : 'dsfghj',
        price : 'dfghjk',
        image : {}
      } , {
        id : 7,
        name: 'dfghj',
        description : 'fdsghj',
        price : 'fdghj',
        image : {}
      }];
  const productsPerRow = 3; // Replace this with your logic

  // Split the productList into rows based on the specified number of products per row
  const rows = [];
  for (let i = 0; i < productList.length; i += productsPerRow) {
    rows.push(productList.slice(i, i + productsPerRow));
  }

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="product-row">
          {row.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              {/* Add other product details here */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Card;
