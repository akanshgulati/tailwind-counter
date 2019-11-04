import React from "react"
import Button from "./Button"

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            positionClicked: false,
            negativeClicked: false
        }
    }

    onClick(isPositive) {
        this.setState({
            count: isPositive ? this.state.count + 1 : this.state.count - 1
        });
    }

    render() {
        return (
            <div className="text-center p-20">
                <div className="count">{this.state.count}</div>
                <div className="counters">
                    <Button className="mx-20 px-10" onClick={() => {
                        this.onClick(true)
                    }}>+1</Button>
                    <Button className="mx-20 px-10" onClick={() => {
                        this.onClick(false)
                    }}>-1</Button>
                </div>
            </div>
        )
    }
}
