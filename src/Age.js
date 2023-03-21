import PropTypes from "prop-types";

function Age(props){
    return <h1>You are {props.age} years old!</h1>
}

Age.propTypes = {
    age : PropTypes.number.isRequired
}

export default Age;