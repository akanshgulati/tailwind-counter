import React from "react"

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
                onClick={this.props.onClick}
                className={`${this.props.className} 
                bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded
                active:outline-none hover:bg-gray-500 transition-bg transition-500 transition-linear">`}>
                {this.props.children}
            </button>)
    }
}
