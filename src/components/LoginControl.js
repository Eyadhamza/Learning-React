import React from 'react';
import {Greetings,LoginButton,LogoutButton} from "../index";


class LoginControl extends React.Component{

    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn : false}
    }


    handleLoginClick(){
        this.setState({isLoggedIn : false})

    }
    handleLogoutClick(){
        this.setState({isLoggedIn : true})
    }
    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        const isLoggedIn = true;
        let button;

        if (isLoggedIn){
            button =  <button >Log out</button>

        }
        else{
            button =  <button >Login</button>

        }
       return <div>
           <Greetings isLoggedIn={isLoggedIn}>
               {button}
           </Greetings>
       </div>
    }


}

export default LoginControl;
