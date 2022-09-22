import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./Header";
import Card from "./Card";


let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <div className = "container">
        <Header />
        <Card />
    </div>
)