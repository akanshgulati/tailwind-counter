import React, {useState} from "react"
import Button from "./Button"

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="text-center p-20">
            <div className="count">{count}</div>
            <div className="counters">
                <Button className="mx-20 px-10" onClick={() => {
                    setCount(count + 1)
                }}>+1</Button>
                <Button className="mx-20 px-10" onClick={() => {
                    setCount(count - 1)
                }}>-1</Button>
            </div>
        </div>
    )
};
export default Counter;
