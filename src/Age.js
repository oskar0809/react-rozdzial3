function Age(props){
    return props.age !== undefined ?
        <h1>You are {props.age} years old!</h1>
    :
        <h1>I don't know your age!</h1>
}

export default Age;