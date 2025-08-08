import React, { useState, useEffect } from 'react';
import { Outlet,Link,useLoaderData,Form } from 'react-router-dom';//Form отпарвляет запросы не на сервер а на наше приложение(наш action),а form тег на сервер
import { createProject } from './useStorage';
export async function myAction() {
	const project = await createProject();
	return { project };
}
function RootRoute() {
	const { projects } = useLoaderData();
	const [apiData, setApiData] = useState("");
	useEffect(() => {
	    loadDataFromServer();
	}, []);
	async function loadDataFromServer() {
		let resp = await fetch("http://localhost:5081/dataserver", {method:"get"});
		setApiData(await resp.text());
	}
	return (
		<div id="main">
			<h2>{apiData}</h2>
			<div>
				<Form method="post">
					<button type="submit">ADD PROJECT</button>
				</Form>
			</div>
			{projects.length ? (
				<nav>
					{projects.map((project) => (
						<Link key={project.id} to={`products/${project.id}`}>
							{project.name ? project.name : <i>Unnamed</i>}
						</Link>
					))}
				</nav>
			) : (
				<p><i>no projects here ...</i></p>
			)}
			<div id="project">
				<Outlet />
			</div>
			<form method="post" action="http://localhost:5081/dataserver" >
				<input name="email" type="text" placeholder="email" />
				<input name="age" type="number" placeholder="age" />
				<button type="submit">POST DATA TO SERVER</button>
			</form>
			<button onClick={loadDataFromServer}>LOAD DATA FROM SERVER(GET)</button>
		</div>
	);
};
export default RootRoute;