import { Component } from "react";

export default class Greetings extends Component {
    constructor(props) {
        super()
        console.log(props)
    }
    render() {
        return (
            <div>
                <h2 style={{color:"red"}}>{this.props.msg}</h2>
                <h2 style={{color:"green"}}>{this.props.wel}</h2>
            </div>
        )
    }
}