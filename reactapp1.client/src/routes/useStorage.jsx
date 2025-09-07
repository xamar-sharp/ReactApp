import localforage from 'localforage';
import { nanoid } from 'nanoid';
let someCache = {};
async function someNetwork(key) {
	if (!key) {
		someCache = {};
	}

	if (someCache[key]) {
		return;
	}

	someCache[key] = true;

	return new Promise((res) => {
		setTimeout(res, Math.random() * 700);
	});
}
export async function getProjects(projectId) {
	await someNetwork();
		let projects = await localforage.getItem('projects');
		if (!projects) projects = [];
		return projects;
}
export async function createProject() {
	await someNetwork();
	let id = nanoid(6);
	let project = { id };
	let projects = await getProjects();
	projects.unshift(project);
	await setProjects(projects);
	return project;
}
function setProjects(projects) {
	return localforage.setItem('projects', projects);
}
export default getProjects;