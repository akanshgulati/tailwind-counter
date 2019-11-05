import React, {Suspense} from "react"
import "../css/tailwind.css"
import Counter from './Counter.js';

function App() {
    return (
        <div className="bg-teal-600 h-screen text-white flex-col items-center justify-center">
                <h1 className="text-center font-bold text-5xl w-full">Hello World!</h1>
                <Suspense fallback={<div>Loading...</div>}>
                        {[1,2,3,4,5,6,7,8,9].map(item => <Counter key={item}/>)}
                </Suspense>
        </div>
    )
}

export default App
