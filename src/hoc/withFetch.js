import { Component } from "react";

export const withFetch = (WrappedComponent, url, initData) => {
	class WrapperComponent extends Component {
		state = {
			data: initData,
			isLoading: true,
			errorMessage: "",
		};

		componentDidMount() {
			fetch(url)
				.then((res) => res.json())
				.then((result) => {
					this.setState({
						...this.state,
						isLoading: false,
						data: result,
						errorMessage: "",
					});
				})
				.catch((err) => {
					this.setState({
						...this.state,
						isLoading: false,
						data: [],
						errorMessage: err.message,
					});
				});
		}

        render () {
            const {data, isLoading, errorMessage} = this.state
            return (
                <WrappedComponent data={data} isLoading={isLoading} errorMessage={errorMessage}/>
            )
        }
	}
    return WrapperComponent
};
