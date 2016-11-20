export default class ProjectApi 
{
    static getList() {
        return fetch('http://localhost:3000/projects');
    }
}