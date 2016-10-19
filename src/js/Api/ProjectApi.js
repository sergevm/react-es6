export default class ProjectApi 
{
    static getList() {
        return new Promise(function(resolve) {
            var projects = [
                {name: 'WebCms', startDate: new Date(2016, 9, 1), description: 'web application', category: 'web'},
                {name: 'Brooklyn', startDate: new Date(2015, 9, 1), description: 'publishing', category: 'service'}
            ];

            resolve(projects);
        });
    }
}