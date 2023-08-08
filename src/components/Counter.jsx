import React, { Component } from "react";

export default class Counter extends Component {
	state = {
		counter: 0,
	};

	increaseHandler = (payload) => {
		this.setState({ ...this.state, counter: this.state.counter + payload });
	};

	decreaseHandler = (payload) => {
		this.setState({ ...this.state, counter: this.state.counter - payload });
	};

    componentDidMount() {
        console.log("I am from component did mount");
    }

    // useEffect(() => {

    // }, [])
    componentDidUpdate(prevProps, prevState) {
        if (prevState.counter !== this.state.counter) {
            alert(`The state has change`)
        }

    }

    // useEffect(() => {

    // }, [this.counter])


    componentWillUnmount() {
        console.log("I am from component will unMount");
    }

    // useEffect(() => {
    //     return () => {}
    // }, [])

	render() {
        console.log("Component re rendering");
		const { counter } = this.state;
		return (
			<div>
				<h2>
					The value of the counter is <i>{counter}</i>
				</h2>
				<button onClick={() => this.increaseHandler(1)}>
					Increase By 1
				</button>
				<button onClick={() => this.decreaseHandler(1)}>
					Decrease By 1
				</button>
			</div>
		);
	}
}
