const pg = require('pg'); 

const get = (req, res) => {

    const results = [];
    pg.connect('postgresql://localhost:5432/softpro', (err, client, done) => {
        if(err) {
            done();
            console.log(err);
            return res.status(500).json({success: false, data: err});
        }

        const query = client.query('SELECT * FROM projects ORDER BY name ASC');

        query.on('row', (row) => {
            results.push(row);
        });

        query.on('end', () => {
            done();
            return res.json(results);
        });
    });
};

module.exports = {get: (req, res) => get(req, res)};
