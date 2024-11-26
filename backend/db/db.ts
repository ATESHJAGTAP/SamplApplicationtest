import { Client } from 'pg';

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'my_database',
  password: 'password',
  port: 5432,
});

client.connect();

export default client;

