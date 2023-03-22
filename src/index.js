import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Book from './Book';
import Age from './Age'
import Props from './Props'
import { number } from 'prop-types';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <Counter/> */}
        <Book/>
        {/* <Age age={20}/>
        <Age/> */}
        {/* <Props propArray={[1, 2, 3]}/> */}
        {/* <Props 
            propArray={[3,4,5]}
            propFunc={number => {
                return number * -1;
            }}
            propNumber={500}
            propObject={{book: "Książka 2"}}
            propString="Tekst 2"/> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
