const projects = require('./actions/projects');
const cors = require('cors');

const setup = (app) => {
    app.use(cors());
    app.get('/projects', (req, res) => projects.get(req, res)); 
};

module.exports = (app) => setup(app); 