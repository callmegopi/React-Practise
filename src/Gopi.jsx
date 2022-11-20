import { Component } from "react";
import Wishes from "./Wishes";

export default class Gopi extends Component {
    constructor() {
        super()
        this.state = {
            message: "Hello from Message class component",
            welcome: "Hello from Welcome class component",

        }
    }
    render() {
        return <div>
            <button onClick={() => { this.setState({ message: "Hello from Gopi Component changed here" }) }}>Change Msg-1</button>
            <br />
            <button onClick={() => { this.setState({ welcome: "Hello from Chander Component changed here" }) }}>Change Msg-2</button>
            {/* <Wishes
            
                msg={this.state.message}
                wel={this.state.welcome} /> */}

            <Wishes {...this.state} />
        </div>
    }
}