import React, {Component} from 'react';

class BookDescription extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.author}</h2>
                <h4>Pages: {this.props.pages}</h4>
            </div>
        );
    }
}

export default BookDescription;