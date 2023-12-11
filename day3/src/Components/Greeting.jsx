import React from 'react';

const Greeting = () => {
    const name = "John";
    const date = new Date().toLocaleDateString('en-us' , {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }
    );
    return (
        <div>
            <h2>Hello, {name}!</h2>
            <p>Welcome to our website. Today is {date}.</p>
        </div>
    )
}

export default Greeting;
