import React from "react";
import Person from "../components/Person";
import Counter from "../components/Counter";
import Posts from "../components/Posts";
import Nav from "../components/Nav";
import Todos from "../components/Todos";
import ComponentWithFetch from "../renderProps/ComponentWithFetch";

const Home = () => {
	return (
		<>
            <Nav />
			<Person name="Yousuf Khan" age={27} />
			<hr />
			<Counter demo="Hello" />
			<hr />
			<ComponentWithFetch url={`https://jsonplaceholder.typicode.com/posts?_limit=5`} initData={[]}>
                {(data, isLoading, errorMessage) => (
                    <Posts data={data} isLoading={isLoading} errorMessage = {errorMessage}/>
                )}
            </ComponentWithFetch>
            <hr />
            <ComponentWithFetch url={`https://jsonplaceholder.typicode.com/todos?_limit=5`} initData = {[]}>
                {(data, isLoading, errorMessage) => (
                    <Todos data={data} isLoading={isLoading} errorMessage={errorMessage}/>
                )}
            </ComponentWithFetch>
		</>
	);
};

export default Home;
