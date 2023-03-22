import React, {Component} from "react";
class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.clear = this.clear.bind(this);
    }
    increase(){
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    }
    decrease(){
        this.setState((prevState) => ({
            counter: prevState.counter - 1
        }));
    }
    clear(){
        this.setState({
            counter: 0
        });
    }
    render(){
        return(
            <div>
                Stan licznika: {this.state.counter}
                <br/>
                <button onClick={this.increase}>Zwiększ o jeden</button>
                <br/>
                <button onClick={this.decrease}>Zmniejsz o jeden</button>
                <br/>
                <button onClick={this.clear}>Zeruj</button>
            </div>
        );
    }
}
export default Counter;