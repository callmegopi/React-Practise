import { Component } from "react";

export default class Wishes extends Component {
    constructor(props) {
        super()
        console.log(props)
    }
    render() {
        return (
            <div>
                <h2 style={{ color: "blue" }}>{this.props.message}</h2>
                <h2 style={{ color: "red" }}>{this.props.welcome}</h2>
            </div>
        )
    }
}