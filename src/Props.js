import React, {Component} from "react";
import PropTypes from "prop-types";

class Props extends Component{
    render(){
        return(
            <div>
                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool ? "Prawda" : "Fałsz"}</h3>
                <h3>Func: {this.props.propFunc(10)}</h3>
                <h3>Number: {this.props.propNumber}</h3>
                <h3>Object: {this.props.propObject.book}</h3>
                <h3>String: {this.props.propString}</h3>
            </div>
        );
    }
}

Props.propTypes = {
    propArray: PropTypes.array,
    propBool: PropTypes.bool,
    propFunc: PropTypes.func,
    propNumber: PropTypes.number.isRequired,
    propObject: PropTypes.object,
    propString: PropTypes.string
}

Props.defaultProps = {
    propArray: [20, 30, 40 , 50],
    propBool: true,
    propFunc: function(number){
        return number * 100;
    },
    propNumber: 100,
    propObject: {
        book: "Książka",
    },
    propString: "String"
}

export default Props
