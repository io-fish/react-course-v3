import React from 'react';
import ReactDOM from 'react-dom/client';

// function Greeting() {
//     return <h1>Hello World!</h1>;
// }

// function Greeting() {
//     return React.createElement('h1', {}, 'hello world!');
// }


// function Greeting() {
//     return (
//         <div>
//             <h1>Hello World!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     )
// }

function Greeting() {
    return React.createElement(
        'div',
        {},
        React.createElement('h1', {}, 'Hello World!'),
        React.createElement('h2', {}, 'It is ' + new Date().toLocaleTimeString())
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />)
