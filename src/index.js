import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from "./Welcome";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from "./Clock";
import Input from "./Input"

// let user = {
//     'name':'eyad',
//     'avatar':'http://image'
//
// }
//
// const element1 = <img  alt="image" src={user.avatar}/>;

// let name = 'pi';
//
// const element = <h1> hello { name } </h1>;


//const element1 = <Welcome name="eyad" faculty="CIS" ></Welcome>;
ReactDOM.render(<div> <Input/> <Clock/> </div>,document.getElementById('root'))




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
