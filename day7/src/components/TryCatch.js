import React from 'react';

export default function TryCatch({ fruit }) {
  let content = fruit;

  try {
    if (fruit === 'onion') {
      throw new Error('Not a Fruit');
    }
  } 
  catch (e) {
    console.log('Not a Fruit');
    content = 'Error: Not a Fruit';
  } finally {
    content += ' Finaly';
  }

  return (
    <div>
      {content}
    </div>
  );
}
