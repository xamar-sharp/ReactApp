import { getProjects } from './useStorage';
export async function projectsLoader(projectId) {
        const projects = await getProjects();
    return { projects };
}