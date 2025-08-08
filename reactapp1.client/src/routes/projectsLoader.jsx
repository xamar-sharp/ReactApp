import { getProjects } from './useStorage';
export async function projectsLoader(projectId) {
   // if (!projectId) {
        const projects = await getProjects();
    return { projects };
    //}
    //else {
    //    const project = await getProjects(projectId);
    //    return project;
    //}
}