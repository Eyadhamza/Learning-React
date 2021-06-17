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
import LoginControl from "./components/LoginControl";



function UserGreetings()
{
    return <h1>hello user</h1>;
}
function GuestGreetings()
{
    return <h1>hello guest</h1>;
}

function Greetings(props)
{
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn){

        return <div>
            <button >Log out</button>
            <UserGreetings/>
        </div>

    }
    else {
        return <div>
            <button >Log in</button>
            <GuestGreetings/>
        </div>
    }
}

ReactDOM.render(<div> <LoginControl/> <Greetings/></div>,document.getElementById('root'))
// ReactDOM.render(<div> <CardList/> </div>,document.getElementById('root'))




reportWebVitals();

export  {Greetings}

