import React from 'react';

class Input extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {name : ''}


        this.handleClick = this.handleClick.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(e){

        this.setState(({name : e.target.value}))

    }
    handleClick(e){
        this.validateInput(this.state.name)
    }
    render() {
        return <div>
            <div>
                {this.state.name}
            </div>

            <input type="text" name="fname" onInput = {this.handleInput}/>


            <button type="submit" onClick={this.handleClick}>submit</button>


        </div>

    }

    validateInput(value){

        if (value !== "eyad") {
            alert("Name must be eyad");

            return false;
        }

    }
}


export default Input;
