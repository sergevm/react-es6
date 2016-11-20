const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/softpro';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE projects(id SERIAL PRIMARY KEY, name VARCHAR(100) not null, startDate DATE not null, description VARCHAR(200), category VARCHAR(50))');
query.on('end', () => { client.end(); });