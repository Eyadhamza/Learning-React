import React from 'react';
import Card from "./Card";

class CardList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {  }
    }


    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
       return <div className="row">

            <div className="col-sm-4">
                <Card
                    imageUrl="https://via.placeholder.com/600x250,png"
                    title=" card image"
                    description="this is my first card description"
                    link="#"/>

            </div>
           <div className="col-sm-4">
               <Card
                   imageUrl="https://via.placeholder.com/600x250,png"
                   title="2nd card Perfect image"
                   description="this is my second card description"
                   link="#"/>

           </div>

           <div className="col-sm-4">
               <Card
                   imageUrl="https://via.placeholder.com/600x250,png"
                   title="3rd Perfect card image"
                   description="this is my third card description"
                   link="#"/>

           </div>

       </div>;
    }


}

export default CardList;
