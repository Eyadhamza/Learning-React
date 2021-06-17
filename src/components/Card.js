import React from 'react';

class Card extends React.Component{

    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }
    tick(){
        this.setState({
            date : new Date()
        })
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(),1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)

    }

    render() {
       return <div>
            <h1>hello </h1>

            <div>
                <h1>NOW IT'S {this.state.date.toLocaleTimeString()}</h1>
            </div>
        </div>;
    }


}

export default Clock;
