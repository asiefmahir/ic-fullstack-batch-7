import { useEffect, useState } from "react";
import Nav from "./Nav";

const Counterfc = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => prev + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [counter])

	return (
        <>
            <Nav />
            <div>The value of the functional counter is {counter}</div>
        </>
    );
};

export default Counterfc;
