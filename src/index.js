import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from "./Welcome";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from "./components/Clock";
import Input from "./Input"
import CardList from "./components/CardList";


ReactDOM.render(<div> <CardList/> </div>,document.getElementById('root'))


reportWebVitals();
