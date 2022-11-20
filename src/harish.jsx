import { Component } from "react";
import Greetings from "./Greetings";

export class Harish extends Component {
    constructor() {
        super()
        this.state = {
            message: "hello from Harish class component",
            welcome: "Hello from 10k-coders class component",
        
        }
    }
    render() {
        return <div>
            {/* <h2>{this.state.message}</h2>
            <h2>{this.state.welcome}</h2> */}
            {/* <button style={{color:"white",backgroundColor:"black",}} onClick={() => { this.setState({ message: "Hello Harish..im changed here"}) }}>Change message</button>
            <h2>{this.state.message}</h2>
            <button onClick={()=>{this.setState({welcome:"Im from 10k-coders gopichand"})}}>change msg2</button>
            <h2>{this.state.welcome}</h2> */}

            <Greetings
                msg={this.state.message}
                wel={this.state.welcome} />
        </div>
    }
}